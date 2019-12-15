export const generateRandomElement = (array) => {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
};

export const generateRandomRangeNumber = (min, max) => {
  return min + Math.floor(Math.random() * max);
};

export const convertTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const convertDateFormat = (currentDate) => {
  const date = new Date(currentDate);
  const hours = convertTimeFormat(date.getHours() % 12);
  const minutes = convertTimeFormat(date.getMinutes());

  const interval = date.getHours() > 11 ? `pm` : `am`;

  return `${hours}:${minutes} ${interval}`;
};
