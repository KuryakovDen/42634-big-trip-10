import {createElement, render, RenderPosition} from '../utils.js';
import {EventComponent} from './event.js';

class EventListComponent {
  constructor(eventPoints) {
    this._element = null;
    this._eventPoints = eventPoints;
  }

  getTemplate() {
    return `<ul class="trip-events__list"></ul>`;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());

      this._eventPoints.forEach((item) => {
        const eventElement = new EventComponent(item).getElement();
        // const eventEditElement = new EventEditComponent(item).getElement();
        // const eventRollupButton = eventElement.querySelector(`.event__rollup-btn`);
        // const eventEditRollupButton = eventEditElement.querySelector(`.event__rollup-btn`);

        // const eventToEdit = () => this._element.replaceChild(eventEditElement, eventElement);
        // const editToEvent = () => this._element.replaceChild(eventElement, eventEditElement);

        /* const onKeyDownEvent = (evt) => {
          const isEscKey = evt.key === `Escape` || `Esc`;

          if (isEscKey) {
            editToEvent();
            document.removeEventListener(`keydown`, onKeyDownEvent);
          }
        }; */

        render(this._element, eventElement, RenderPosition.BEFOREEND);
      });
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

export {EventListComponent};
