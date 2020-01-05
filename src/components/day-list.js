import {createElement, splitEventsByDay, render, RenderPosition} from '../utils/common.js';
import {DayComponent} from './day.js';
import {AbstractComponent} from './abstract.js';

class DayListComponent extends AbstractComponent {
  constructor(eventList) {
    super();
    this._eventList = eventList;
  }

  getTemplate() {
    return `<ul class="trip-days"></ul>`;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());

      splitEventsByDay(this._eventList).forEach((item) => {
        render(this._element, new DayComponent(item).getElement(), RenderPosition.BEFOREEND);
      });
    }

    return this._element;
  }
}

export {DayListComponent};
