import {Months, TimeValue} from './const.js';

const getRandomNumber = (max, min = 0) => Math.round(min + Math.random() * (max - min));

const getRandomElement = (array) => array[getRandomNumber(array.length - 1)];

const getRandomBoolean = () => {
  return Math.random() > 0.5 ? true : false;
};

const formatNumber = (number) => number < 10 ? `0${number}` : `${number}`;

const getRandomDate = (dateStart, during) => {
  const time = getRandomNumber(+dateStart + during, +dateStart + TimeValue.HOUR);

  let date = new Date();
  date.setTime(time);

  return date;
};

const getRandomHour = (dateStart) => getRandomDate(dateStart, TimeValue.HOUR);
const getRandomTwoHours = (dateStart) => getRandomDate(dateStart, TimeValue.TWO_HOURS);
const getRandomHalfDay = (dateStart) => getRandomDate(dateStart, TimeValue.HALF_DAY);
const getRandomDay = (dateStart) => getRandomDate(dateStart, TimeValue.DAY);
const getRandomTwoDays = (dateStart) => getRandomDate(dateStart, TimeValue.TWO_DAYS);
const getRandomWeek = (dateStart) => getRandomDate(dateStart, TimeValue.WEEK);
const getRandom2Week = (dateStart) => getRandomDate(dateStart, TimeValue.TWO_WEEKS);

const getDaysCount = (dateMin, dateMax) => {
  const dateMinCopy = new Date(+dateMin);
  dateMinCopy.setSeconds(0);
  dateMinCopy.setMinutes(0);
  dateMinCopy.setHours(0);
  return Math.floor((+dateMax - dateMinCopy) / TimeValue.DAY);
};

const getShortYear = (date) => String(date.getFullYear()).substr(2, 2);
const getDate = (date, separator = `-`) => `${getShortYear(date)}${separator}${formatNumber(date.getMonth() + 1)}${separator}${formatNumber(date.getDate())}`;
const getTime = (date) => `${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}`;
const getDateTime = (date) => `${getDate(date)}T${getTime(date)}`;

const formatDate = (date1, date2) => {
  let time = Math.abs(+date1 - date2);
  let daysCount = Math.floor(time / TimeValue.DAY);

  time -= daysCount * TimeValue.DAY;
  let hoursCount = Math.floor(time / TimeValue.HOUR);

  time -= hoursCount * TimeValue.HOUR;
  let minutesCount = Math.round(time / TimeValue.MINUTE);

  daysCount = daysCount > 0 ? `${formatNumber(daysCount)}D` : ``;
  hoursCount = hoursCount === 0 && daysCount === 0 ? `` : `${formatNumber(hoursCount)}H`;
  minutesCount = `${formatNumber(minutesCount)}M`;

  return `${daysCount} ${hoursCount} ${minutesCount}`.replace(/  +/g, ` `);
};

const getShortDate = (date) => `${date.getDate()} ${Months[date.getMonth()]}`;

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const RenderPosition = {
  BEFOREEND: `beforeend`,
  AFTERBEGIN: `afterbegin`
};

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

export {
  getRandomNumber,
  getRandomElement,
  getRandomBoolean,
  getRandomHour,
  getRandomTwoHours,
  getRandomHalfDay,
  getRandomDay,
  getRandomTwoDays,
  getRandomWeek,
  getRandom2Week,
  getDaysCount,
  getShortYear,
  getDate,
  getTime,
  getDateTime,
  formatDate,
  getShortDate,
  createElement,
  RenderPosition,
  render
};
