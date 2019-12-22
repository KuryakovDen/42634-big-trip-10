import {TimeValue, months} from './const.js';

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

const getRandomMinute = (startDate) => getRandomDate(startDate, TimeValue.MINUTE);
const getRandomHour = (startDate) => getRandomDate(startDate, TimeValue.HOUR);
const getRandomHalfDay = (startDate) => getRandomDate(startDate, TimeValue.HALF_DAY);
const getRandomDay = (startDate) => getRandomDate(startDate, TimeValue.DAY);
const getRandomWeek = (startDate) => getRandomDate(startDate, TimeValue.WEEK);

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

const getShortYear = (date) => String(date.getFullYear()).substr(2, 2);
const getDate = (date, separator = `-`) => `${getShortYear(date)}${separator}${convertTimeFormat(date.getMonth() + 1)}${separator}${convertTimeFormat(date.getDate())}`;
const getTime = (date) => `${convertTimeFormat(date.getHours())}:${convertTimeFormat(date.getMinutes())}`;
const getDateTime = (date) => `${getDate(date)}T${getTime(date)}`;
const getShortDate = (date) => `${date.getDate()} ${months[date.getMonth()]}`;

const getDaysCount = (dateMin, dateMax) => {
  const dateMinCopy = new Date(+dateMin);
  dateMinCopy.setSeconds(0);
  dateMinCopy.setMinutes(0);
  dateMinCopy.setHours(0);

  return Math.floor((+dateMax - dateMinCopy) / TimeValue.DAY);
};

const formatDate = (date1, date2) => {
  let time = Math.abs(+date1 - date2);
  let daysCount = Math.floor(time / TimeValue.DAY);

  time -= daysCount * TimeValue.DAY;
  let hoursCount = Math.floor(time / TimeValue.HOUR);

  time -= hoursCount * TimeValue.HOUR;
  let minutesCount = Math.round(time / TimeValue.MINUTE);

  daysCount = daysCount > 0 ? `${convertTimeFormat(daysCount)}D` : ``;
  hoursCount = hoursCount === 0 && daysCount === 0 ? `` : `${convertTimeFormat(hoursCount)}H`;
  minutesCount = `${convertTimeFormat(minutesCount)}M`;

  return `${daysCount} ${hoursCount} ${minutesCount}`.replace(/  +/g, ` `);
};

export {generateRandomElement,
  getRandomDate,
  getRandomLogicType,
  generateRandomRangeNumber,
  convertTimeFormat,
  convertDateFormat,
  getRandomMinute,
  getRandomHour,
  getRandomHalfDay,
  getRandomDay,
  getRandomWeek,
  getDate,
  getTime,
  getDateTime,
  getDaysCount,
  getShortDate,
  formatDate
};
