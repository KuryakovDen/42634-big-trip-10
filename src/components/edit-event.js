import {eventTypeProperties, MovingType, extraOfferTypeProperties, defaultTrip} from '../const.js';
import {generatePhotoList, generateDescription} from '../mock/destination.js';

const createEventTypeItem = (eventType) => {
  const eventTypeCode = eventType.toLowerCase();

  return (
    `<div class="event__type-item">
      <input id="event-type-${eventTypeCode}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${eventTypeCode}">
      <label class="event__type-label  event__type-label--${eventTypeCode}" for="event-type-${eventTypeCode}-1">${eventType}</label>
    </div>`);
};

const createEventTypeList = () => {
  const movingEvents = Object.entries(eventTypeProperties)
    .filter((item) => item[1].movingMethod === MovingType.moving)
    .map((item) => item[0]).map((item) => createEventTypeItem(item))
    .join(`\n`);

  const activityEvents = Object.entries(eventTypeProperties)
    .filter((item) => item[1].movingMethod === MovingType.staying)
    .map((item) => item[0]).map((item) => createEventTypeItem(item))
    .join(`\n`);

  return (
    `<div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Transfer</legend>
        ${movingEvents}
      </fieldset>
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Activity</legend>
        ${activityEvents}
      </fieldset>
    </div>`);
};

const createEventOffer = (offer) => {
  const offerOptions = extraOfferTypeProperties[offer.type];

  return (
    `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.type}-1" type="checkbox" name="event-offer-${offer.type}" ${offer.isChecked ? `checked` : ``}>
      <label class="event__offer-label" for="event-offer-${offer.type}-1">
        <span class="event__offer-title">${offerOptions.name}</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">${offer.cost}</span>
      </label>
    </div>`);
};

const createEventOffers = (offers) => {
  if (offers.length === 0) {
    return ``;
  }

  const eventOffers = offers.map((item) => createEventOffer(item).join(`\n`));

  return (
    `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${eventOffers}
      </div>
    </section>`);
};

const createDestination = (destination) => {
  if (!destination) {
    return ``;
  }

  const photoList = generatePhotoList()
    .map((item) => `<img class="event__photo" src="${item}" alt="Event photo">`)
    .join(`\n`);

  return (
    `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${generateDescription()}</p>
      <div class="event__photos-container">
        <div class="event__photos-tape">
          ${photoList}
        </div>
      </div>
    </section>`);
};

const createEditEventTemplate = (event = defaultTrip) => {

};

export {createEditEventTemplate};
