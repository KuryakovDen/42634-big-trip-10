import {createElement, render, RenderPosition} from '../utils/common.js';
import {getDateTime, getShortDate} from '../utils/date.js';
import EventListComponent from './event-list.js';
import AbstractComponent from './abstract.js';

export default class DayComponent extends AbstractComponent {
  constructor(dayItem) {
    super();
    this._dayItem = dayItem;
  }

  getTemplate() {
    const dateText = getShortDate(this._dayItem.dayDate);
    const dateTime = getDateTime(this._dayItem.dayDate);

    return (
      `<li class="trip-days__item  day">
        <div class="day__info">
          <span class="day__counter">${this._dayItem.dayCounter}</span>
          <time class="day__date" datetime="${dateTime}">${dateText}</time>
        </div>
      </li>`);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());

      render(this._element, new EventListComponent(this._dayItem.dayEvents).getElement(), RenderPosition.BEFOREEND);
    }

    return this._element;
  }
}
