import TripInfoComponent from './components/trip-info.js';
import MenuComponent from './components/menu.js';
import FilterComponent from './components/filter.js';
import generateEventList from './mock/event-data.js';
import {menuItemList, filterItemList} from './const.js';
import {RenderPosition} from './utils/common.js';
import {render} from './utils/render.js';
import TripController from './controllers/trip-controller.js';

const eventList = generateEventList();

const sumOffers = (offerList) => offerList.reduce((accum, current) => accum + current.isChecked * current.cost, 0);
const sumEvents = (events) => events.reduce((accum, current) => accum + current.cost + sumOffers(current.offers), 0);

const tripMainElement = document.querySelector(`.trip-main`);
const tripEventsElement = document.querySelector(`.trip-events`);
const tripCost = document.querySelector(`.trip-info__cost-value`);
const tripInfoElement = tripMainElement.querySelector(`.trip-info`);
const tripControlElements = tripMainElement.querySelectorAll(`.trip-controls h2`);

tripCost.innerText = sumEvents(eventList);

const tripController = new TripController(tripEventsElement, eventList);

if (eventList.length) {
  render(tripInfoElement, new TripInfoComponent(eventList), RenderPosition.AFTERBEGIN);
}

render(tripControlElements[0], new MenuComponent(menuItemList), RenderPosition.AFTERBEGIN);

tripControlElements[0].classList.remove(`visually-hidden`);
tripControlElements[0].lastChild.textContent = null;

render(tripControlElements[1], new FilterComponent(filterItemList), RenderPosition.AFTERBEGIN);

tripControlElements[1].classList.remove(`visually-hidden`);
tripControlElements[1].lastChild.textContent = null;

tripController.render();
