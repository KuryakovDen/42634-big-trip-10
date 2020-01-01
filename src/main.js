import {createTripInfo} from './components/trip-info.js';
import {MenuComponent} from './components/menu.js';
import createFilter from './components/filter.js';
import {SortComponent} from './components/sort.js';
import {createTripList} from './components/trip-list.js';
import generateEventList from './mock/event-data.js';
import {menuItemList, filterItemList, sortItemList} from './const.js';
import {render, RenderPosition} from './utils.js';

const eventList = generateEventList();

const sumOffers = (offerList) => offerList.reduce((accum, current) => accum + current.isChecked * current.cost, 0);
const sumEvents = (events) => events.reduce((accum, current) => accum + current.cost + sumOffers(current.offers), 0);

const renderIndex = () => {
  const tripMainElement = document.querySelector(`.trip-main`);
  const tripEventsElement = document.querySelector(`.trip-events h2`);

  // const tripInfoElement = tripMainElement.querySelector(`.trip-info`);
  const tripControlElements = tripMainElement.querySelectorAll(`.trip-controls h2`);

  tripControlElements[0].classList.remove(`visually-hidden`);
  tripControlElements[0].firstChild.textContent = null;

  // render(tripInfoElement, createTripInfo(eventList), RenderPosition.AFTERBEGIN);

  const menuComponent = new MenuComponent(menuItemList);
  render(tripControlElements[0], menuComponent.getElement(), RenderPosition.BEFOREEND);

  // render(tripControlElements[1], createFilter(filterItemList), RenderPosition.AFTERBEGIN);

  const sortComponent = new SortComponent(sortItemList);
  render(tripEventsElement, sortComponent.getElement(), RenderPosition.AFTERBEGIN);
};

renderIndex();

document.querySelector(`.trip-info__cost-value`).innerText = sumEvents(eventList);
