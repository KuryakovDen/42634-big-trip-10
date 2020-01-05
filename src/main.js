import {TripInfoComponent} from './components/trip-info.js';
import {MenuComponent} from './components/menu.js';
import {FilterComponent} from './components/filter.js';
import {SortComponent} from './components/sort.js';
import {DayListComponent} from './components/day-list.js';
import {NoPointsComponent} from './components/no-points.js';
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

  const tripInfoElement = tripMainElement.querySelector(`.trip-info`);
  const tripControlElements = tripMainElement.querySelectorAll(`.trip-controls h2`);

  // TripInfo
  const tripInfoComponent = new TripInfoComponent(eventList);
  render(tripInfoElement, tripInfoComponent, RenderPosition.AFTERBEGIN);

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

  tripEventsElement.classList.remove(`visually-hidden`);
  tripEventsElement.lastChild.textContent = null;

  if (eventList.length) {
    // Sorting
    const sortComponent = new SortComponent(sortItemList);
    render(tripEventsElement, sortComponent, RenderPosition.AFTERBEGIN);

    // DayList
    const dayListComponent = new DayListComponent(eventList);
    render(tripEventsElement, dayListComponent.getElement(), RenderPosition.BEFOREEND);
  } else {
    const noPointsComponent = new NoPointsComponent();
    render(tripEventsElement, noPointsComponent.getElement(), RenderPosition.BEFOREEND);
  }
};

renderApplication();
