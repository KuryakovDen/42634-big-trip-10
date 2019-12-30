import createTripInfo from './components/trip-info.js';
import createMenu from './components/menu.js';
import createFilter from './components/filter.js';
import createSort from './components/sort.js';
import createTripList from './components/trip-list.js';
import generateEventList from './mock/event-data.js';
import {menuItemList, filterItemList, sortItemList} from './const.js';
import {render, RenderPoition} from './util.js';

const eventList = generateEventList();

const sumOffers = (offerList) => offerList.reduce((accum, current) => accum + current.isChecked * current.cost, 0);
const sumEvents = (events) => events.reduce((accum, current) => accum + current.cost + sumOffers(current.offers), 0);

const renderIndex = () => {
  const tripMainElement = document.querySelector(`.trip-main`);
  const tripEventsElement = document.querySelector(`.trip-events h2`);
  const tripInfoElement = tripMainElement.querySelector(`.trip-info`);
  const tripControlElements = tripMainElement.querySelectorAll(`.trip-controls h2`);

  render(tripInfoElement, createTripInfo(eventList), RenderPoition.AFTERBEGIN);
  render(tripControlElements[0], createMenu(menuItemList), RenderPoition.AFTERBEGIN);
  // render(tripControlElements[1], createFilter(filterItemList), RenderPoition.AFTERBEGIN);
  render(tripEventsElement, `${createSort(sortItemList)}\n${createTripList(eventList)}`, RenderPoition.AFTERBEGIN);
};

renderIndex();

document.querySelector(`.trip-info__cost-value`).innerText = sumEvents(eventList);
