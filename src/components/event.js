import {createForm} from './form.js';
import {EventTypeProperties, PlaceholderParticle, OfferTypeOptions} from '../const.js';
import {formatDate, getDateTime, getTime, createElement} from '../utils.js';

const createOffersHtml = (offerData) => {
  const selected = offerData.filter((item) => item.isChecked).slice(0, 3);
  if (!selected.length) {
    return ``;
  }

  const offers = selected.map((item) =>
    `<li class="event__offer">
      <span class="event__offer-title">${OfferTypeOptions[item.type].name}</span>
      &plus;
      &euro;&nbsp;<span class="event__offer-price">${item.cost}</span>
    </li>`);

  return (
    `<h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${offers.join(`\n`)}
      </ul>`);
};

const createEventHtml = (eventData, isForm = false) => {
  if (isForm) {
    return createForm(eventData);
  }

  const eventProperty = EventTypeProperties[eventData.type];
  const icon = eventProperty.icon;
  const title = `${eventProperty.name} ${PlaceholderParticle[eventProperty.movingType]} ${eventData.destination}`;
  const offersHtml = createOffersHtml(eventData.offers);

  return (
    `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${icon}" alt="Event type icon">
        </div>
        <h3 class="event__title">${title}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${getDateTime(eventData.start)}">${getTime(eventData.start)}</time>
            &mdash;
            <time class="event__end-time" datetime=${getDateTime(eventData.finish)}">${getTime(eventData.finish)}</time>
          </p>
          <p class="event__duration">${formatDate(eventData.finish, eventData.start)}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${eventData.cost}</span>
        </p>
        ${offersHtml}
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`);
};

class EventComponent {
  constructor(events) {
    this._element = null;
    this._events = events;
  }

  getTemplate() {
    return createEventHtml(this._events);
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

export {EventComponent};
