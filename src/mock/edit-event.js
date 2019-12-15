import {generateRandomRangeNumber} from '../util.js';
import {descriptionSentences} from '../const.js';

export const generateDescription = (text) => {
  return text
    .filter(() => Math.random() > 0.5)
    .slice(1, generateRandomRangeNumber(2, 3));
};


export const renderEvent = () => {
  return {
    description: generateDescription(descriptionSentences),
    image: Math.random() > 0.5
  };
};
