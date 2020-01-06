import {createElement, RenderPosition} from '../utils/common.js';
import {render} from '../utils/render.js';
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
        const eventToEdit = () => this._element.replaceChild(eventEditElement, eventElement);
        const editToEvent = () => this._element.replaceChild(eventElement, eventEditElement);
        const documentKeyDownHandler = (evt) => {
          const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

          if (isEscKey) {
            editToEvent();
            document.removeEventListener(`keydown`, documentKeyDownHandler);
          }
        };

        const eventElement = new EventComponent(item).getElement();
        const eventEditElement = new EventEditComponent(item).getElement();
        const eventRollupButton = eventElement.querySelector(`.event__rollup-btn`);
        const eventEditRollupButton = eventEditElement.querySelector(`.event__rollup-btn`);

        eventRollupButton.addEventListener(`click`, () => {
          eventToEdit();
          document.addEventListener(`keydown`, documentKeyDownHandler);
        });

        eventEditRollupButton.addEventListener(`click`, () => {
          editToEvent();
          document.removeEventListener(`keydown`, documentKeyDownHandler);
        });

        eventEditElement.addEventListener(`submit`, (evt) => {
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
