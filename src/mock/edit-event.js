import {generateRandomRangeNumber, generateRandomElement, getRandomDay, getRandomLogicType, generateOfferList} from '../util.js';
import {defaultTrip, eventType, cities} from '../const.js';

const generateDescription = (text) => {
  return text
    .filter(() => Math.random() > 0.5)
    .slice(1, generateRandomRangeNumber(2, 3));
};

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

export {generateDescription, renderEvent};
