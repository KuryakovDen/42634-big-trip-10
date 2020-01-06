import {createElement, RenderPosition} from '../utils/common.js';
import {render, replace} from '../utils/render.js';
import EventComponent from './event.js';
import EventEditComponent from './event-edit.js';
import AbstractComponent from './abstract.js';

export default class EventListComponent extends AbstractComponent {
  constructor(eventList) {
    super();
    this._eventList = eventList;
  }

  getTemplate() {
    return `<ul class="trip-events__list"></ul>`;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());

      this._eventList.forEach((item) => {
        const eventToEdit = () => replace(eventEditElement, eventElement);
        const editToEvent = () => replace(eventElement, eventEditElement);
        const documentKeyDownHandler = (evt) => {
          const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

          if (isEscKey) {
            editToEvent();
            document.removeEventListener(`keydown`, documentKeyDownHandler);
          }
        };

        const eventElement = new EventComponent(item);
        const eventEditElement = new EventEditComponent(item);

        const eventRollupButton = eventElement.getElement().querySelector(`.event__rollup-btn`);
        const eventEditRollupButton = eventEditElement.getElement().querySelector(`.event__rollup-btn`);

        eventRollupButton.addEventListener(`click`, () => {
          eventToEdit();
          document.addEventListener(`keydown`, documentKeyDownHandler);
        });

        eventEditRollupButton.addEventListener(`click`, () => {
          editToEvent();
          document.removeEventListener(`keydown`, documentKeyDownHandler);
        });

        eventEditElement.getElement().addEventListener(`submit`, (evt) => {
          evt.preventDefault();
          editToEvent();
          document.removeEventListener(`keydown`, documentKeyDownHandler);
        });

        render(this._element, eventElement, RenderPosition.BEFOREEND);
      });
    }

    return this._element;
  }
}
