import {createElement} from '../utils/common.js';

class NoPointsComponent {
  constructor(message = `Click New Event to create your first point`) {
    this._element = null;
    this._message = message;
  }

  getTemplate() {
    return `<p class="trip-events__msg">${this._message}</p>`;
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

export {NoPointsComponent};
