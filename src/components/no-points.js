import {createElement} from '../utils.js';

class NoPointsComponent {
  constructor(message) {
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
