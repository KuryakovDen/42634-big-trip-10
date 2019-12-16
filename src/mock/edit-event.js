import {generateRandomRangeNumber, generateRandomElement, getRandomDay, getRandomLogicType} from '../util.js';
import {defaultTrip, eventType, cities} from '../const.js';
import {generateOfferList} from './offer.js';

const renderEvent = (startData) => {
  const event = {};

  Object.assign(event, defaultTrip);
  event.type = generateRandomElement(Object.values(eventType));
  event.start = startData;
  event.finish = getRandomDay(event.start);
  event.desctination = generateRandomElement(cities);
  event.cost = generateRandomRangeNumber(10, 100);
  event.isFavourite = getRandomLogicType();
  event.offers = generateOfferList(event.type);

  return event;
};

export {renderEvent};
