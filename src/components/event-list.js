import {createElement} from '../utils.js';

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
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

export {EventListComponent};
