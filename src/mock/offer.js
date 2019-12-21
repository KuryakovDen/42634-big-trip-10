import {generateRandomRangeNumber, getRandomLogicType} from '../utils.js';
import {eventTypeProperties} from '../const.js';

const generateOfferList = (eventType) => {
  const availableOfferTypes = eventTypeProperties[eventType].availableOfferTypes;
  const offers = availableOfferTypes ? Array.from(availableOfferTypes).map((it) => {
    return {
      type: it,
      isChecked: getRandomLogicType(),
      cost: generateRandomRangeNumber(10, 100)
    };
  }) : [];

  return offers;
};

export {generateOfferList};
