import {createElement, splitEventsByDay, render, RenderPosition} from '../utils.js';
import {DayComponent} from './day.js';

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

      splitEventsByDay(this._eventList).forEach((item) => {
        render(this._element, new DayComponent(item), RenderPosition.BEFOREEND);
      });
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

export {DayListComponent};
