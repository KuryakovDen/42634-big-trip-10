import createTripInfo from './components/trip-info.js';
import createMenu from './components/menu.js';
import createFilter from './components/filter.js';
import createSort from './components/sort.js';
import createTripList from './components/trip-list.js';
import generateEventList from './mock/event-data.js';
import {menuItemList, filterItemList, sortItemList} from './const.js';

const eventList = generateEventList();

const render = (container, html, position = `beforeend`) => {
  container.insertAdjacentHTML(position, html);
};

const sumOffers = (offerList) => offerList.reduce((accum, current) => accum + current.isChecked * current.cost, 0);
const sumEvents = (events) => events.reduce((accum, current) => accum + current.cost + sumOffers(current.offers), 0);

const renderIndex = () => {
  const tripMainElement = document.querySelector(`.trip-main`);
  const tripEventsElement = document.querySelector(`.trip-events h2`);
  const tripInfoElement = tripMainElement.querySelector(`.trip-info`);
  const tripControlElements = tripMainElement.querySelectorAll(`.trip-controls h2`);

  render(tripInfoElement, createTripInfo(eventList), `afterbegin`);
  render(tripControlElements[0], createMenu(menuItemList), `afterend`);
  render(tripControlElements[1], createFilter(filterItemList), `afterend`);
  render(tripEventsElement, `${createSort(sortItemList)}\n${createTripList(eventList)}`, `afterend`);
};

renderIndex();

document.querySelector(`.trip-info__cost-value`).innerText = sumEvents(eventList);
