import {getDaysCount} from './date.js';

const getRandomNumber = (max, min = 0) => Math.round(min + Math.random() * (max - min));

const getRandomElement = (array) => array[getRandomNumber(array.length - 1)];

const getRandomBoolean = () => {
  return Math.random() > 0.5 ? true : false;
};

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

const replace = (oldComponent, newComponent) => {
  const parentElement = oldComponent.getElement().parentElement();
  const oldElement = oldComponent.getElement();
  const newElement = newComponent.getElement();

  const isExistElements = !!(parentElement && newElement && oldElement);

  if (isExistElements && parentElement.contains(oldElement)) {
    parentElement.replaceChild(oldElement, newElement);
  }
};

const remove = (component) => {
  component.getElement().remove();
  component.removeElement();
};

const splitEventsByDay = (eventList) => {
  const days = [];
  let dayCounter = 1;
  let dayDate = eventList[0].start;
  let dayEvents = [eventList[0]];

  for (let i = 1; i < eventList.length; i++) {
    const daysCount = getDaysCount(dayDate, eventList[i].start);

    if (daysCount === 0) {
      dayEvents.push(eventList[i]);
      continue;
    }

    days.push({'dayDate': dayDate, 'dayCounter': dayCounter, 'dayEvents': dayEvents});
    dayCounter += daysCount;
    dayDate = eventList[i].start;
    dayEvents = [eventList[i]];
  }

  if (dayEvents.length) {
    days.push({'dayDate': dayDate, 'dayCounter': dayCounter, 'dayEvents': dayEvents});
  }

  return days;
};

export {
  getRandomNumber,
  getRandomElement,
  getRandomBoolean,
  createElement,
  RenderPosition,
  render,
  replace,
  remove,
  splitEventsByDay
};