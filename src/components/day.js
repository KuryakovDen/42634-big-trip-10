import {getDateTime, getShortDate, createElement, render, RenderPosition} from '../utils.js';
import {EventListComponent} from './event-list.js';

class DayComponent {
  constructor(dayItem) {
    this._element = null;
    this._day = dayItem;
  }

  getTemplate() {
    const dateText = getShortDate(this._day.dayDate);
    const dateTime = getDateTime(this._day.dayDate);

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

  removeElement() {
    this._element = null;
  }
}

export {DayComponent};
