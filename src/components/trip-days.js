import {createEditEventTemplate, createEventTypeItem} from './edit-event.js';
import {getDaysCount, getShortDate, getDateTime, getTime, formatDate} from '../utils.js';
import {extraOfferTypeProperties, eventTypeProperties, DirectionForMoving} from '../const.js';

const createTripDay = (date, dayCounter, events) => {
  const dateText = getShortDate(date);
  const dateTime = getDateTime(date);

  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${dayCounter}</span>
        <time class="day__date" datetime="${dateTime}">${dateText}</time>
      </div>
      ${events}
    </li>`);
};

const createEvent = (eventData, isForm = false) => {
  if (isForm) {
    return createEditEventTemplate(eventData);
  }

  const eventProperty = eventTypeProperties[createEventTypeItem.type];
  const icon = eventProperty.icon;
  const title = `${eventProperty.name} ${DirectionForMoving[eventProperty.movingType]}`;
  const offersMarkup = createOffers(eventData.offers);

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
      ${offersMarkup}
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`);
};

const createEventList = (eventList, formEvent) => {
  const currentEvent = eventList.map((item) => createEvent(item, item === formEvent)).join(`\n`);

  return (
    `<ul class="trip-events__list">
      ${currentEvent}
    </ul>`);
};

const createOffers = (offerData) => {
  const selected = offerData.filter((item) => item.isChecked).slice(0, 3);

  if (selected.length === 0) {
    return ``;
  }

  const offers = selected.map((item) =>
    `<li class="event__offer">
      <span class="event__offer-title">${extraOfferTypeProperties[item.type].name}</span>
      &plus;
      &euro;&nbsp;<span class="event__offer-price">${item.cost}</span>
    </li>`);

  return (
    `<h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${offers.join(`\n`)}
    </ul>`);
};

const createTripList = (eventList) => {
  const days = [];
  const editTaskEvent = eventList[0];
  let dayCounter = 1;
  let dayDate = editTaskEvent.start;
  let dayEvents = [editTaskEvent];
  const formEvent = eventList[0];

  eventList.forEach((element) => {
    const daysCount = getDaysCount(dayDate, element.start);

    if (daysCount === 0) {
      dayEvents.push(element);
    }

    days.push(createTripDay(dayDate, dayCounter, createEventList(dayEvents, formEvent)));
    dayCounter += daysCount;
    dayDate = element.start;
    dayEvents = [element];

    if (dayEvents.length) {
      days.push(createTripDay(dayDate, dayCounter, createEventList(dayEvents)));
    }

    return `<ul class="trip-days">${days.join(`\n`)}</ul>`;
  });
};

export {createTripList};
