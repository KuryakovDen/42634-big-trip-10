import {createElement} from '../utils.js';

class DayListComponent {
  constructor(eventList) {
    this._element = null;
    this._eventList = eventList;
  }

  getTemplate() {
    return `<ul class="trip-days"></ul>`;
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

export {DayListComponent};
