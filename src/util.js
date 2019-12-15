import {TimeValue} from './const.js';

const generateRandomElement = (array) => {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
};

const generateRandomRangeNumber = (min, max) => {
  return min + Math.floor(Math.random() * max);
};

const getRandomLogicType = () => Math.random() ? true : false;

const getRandomDate = (startDate, interval) => {
  const timeTrip = generateRandomRangeNumber(startDate + interval, startDate + TimeValue.HOUR);
  let date = new Date();

  date.setDate(timeTrip);

  return date;
};

/* const getRandomMinute = (startDate) => getRandomDate(startDate, Tim.MINUTE);
const getRandomHour = (startDate) => getRandomDate(startDate, Tim.HOUR);
const getRandomHalfDay = (startDate) => getRandomDate(startDate, Tim.HALF_DAY);
const getRandomDay = (startDate) => getRandomDate(startDate, Tim.DAY);
const getRandomWeek = (startDate) => getRandomDate(startDate, Tim.WEEK);*/

const convertTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const convertDateFormat = (currentDate) => {
  const date = new Date(currentDate);
  const hours = convertTimeFormat(date.getHours() % 12);
  const minutes = convertTimeFormat(date.getMinutes());

  const interval = date.getHours() > 11 ? `pm` : `am`;

  return `${hours}:${minutes} ${interval}`;
};

export {generateRandomElement, getRandomDate, getRandomLogicType, generateRandomRangeNumber, convertTimeFormat, convertDateFormat};
