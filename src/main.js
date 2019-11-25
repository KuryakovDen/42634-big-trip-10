import {createSiteMenu} from './components/menu.js';
import {createSiteFilters} from './components/filter.js';
import {createBuildForm} from '/components/form.js';
import {createEditEventTemplate} from '/components/edit-event.js';
import {createTripContainerTemplate} from '/components/trip-container.js';
import {createTripDays} from '/components/trip-days.js';
import {createInfoRoute} from '/components/info-route.js';

const CARDS_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const getTripInfo = () => {
  return document.querySelector(`.trip-info`);
};

render(getTripInfo(), createInfoRoute(), `afterbegin`);

const getTripControls = () => {
  return document.querySelector(`.trip-controls`);
};

render(getTripControls(), createSiteMenu());
render(getTripControls(), createSiteFilters());

const getTripEvents = () => {
  return document.querySelector(`.trip-events`);
};

render(getTripEvents(), createBuildForm());
render(getTripEvents(), createEditEventTemplate());
render(getTripEvents(), createTripContainerTemplate());

new Array(CARDS_COUNT).fill(``).forEach(() => render(getTripEvents(), createTripDays()));
