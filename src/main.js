import {createTripInfo} from './components/trip-info.js';
import {MenuComponent} from './components/menu.js';
import {FilterComponent} from './components/filter.js';
import {SortComponent} from './components/sort.js';
import {createTripList} from './components/trip-list.js';
import generateEventList from './mock/event-data.js';
import {menuItemList, filterItemList, sortItemList} from './const.js';
import {render, RenderPosition} from './utils.js';

const eventList = generateEventList();

const sumOffers = (offerList) => offerList.reduce((accum, current) => accum + current.isChecked * current.cost, 0);
const sumEvents = (events) => events.reduce((accum, current) => accum + current.cost + sumOffers(current.offers), 0);

const renderApplication = () => {
  const tripMainElement = document.querySelector(`.trip-main`);
  const tripEventsElement = document.querySelector(`.trip-events h2`);
  const tripCost = document.querySelector(`.trip-info__cost-value`);

  tripCost.innerText = sumEvents(eventList);

  // const tripInfoElement = tripMainElement.querySelector(`.trip-info`);
  const tripControlElements = tripMainElement.querySelectorAll(`.trip-controls h2`);

  // EventList
  // render(tripInfoElement, createTripInfo(eventList), RenderPosition.AFTERBEGIN);

  // Menu
  tripControlElements[0].classList.remove(`visually-hidden`);
  tripControlElements[0].firstChild.textContent = null;

  const menuComponent = new MenuComponent(menuItemList);
  render(tripControlElements[0], menuComponent.getElement(), RenderPosition.BEFOREEND);

  // Filter
  tripControlElements[1].classList.remove(`visually-hidden`);
  tripControlElements[1].firstChild.textContent = null;

  const filterComponent = new FilterComponent(filterItemList);
  render(tripControlElements[1], filterComponent.getElement(), RenderPosition.AFTERBEGIN);

  // Sorting
  const sortComponent = new SortComponent(sortItemList);
  render(tripEventsElement, sortComponent.getElement(), RenderPosition.AFTERBEGIN);
};

renderApplication();
