import {getDateTime, getShortDate, createElement} from '../utils.js';

class DayComponent {
  constructor(day) {
    this._element = null;
    this._day = day;
  }

  getTemplate() {
    const dateText = getShortDate(this._day.dayDate);
    const dateTime = getDateTime(this._day.dayDate);

    return (
      `<li class="trip-days__item  day">
        <div class="day__info">
          <span class="day__counter">${this._day.dayCounter}</span>
          <time class="day__date" datetime="${dateTime}">${dateText}</time>
        </div>
      </li>`);
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

export {DayComponent};
