import {createSiteMenu} from './components/menu.js';
import {createSiteFilters} from './components/filter.js';
import {createBuildForm} from './components/site-form.js';
// import {createEditEventTemplate} from './components/edit-event.js';
import {createTripContainerTemplate} from './components/trip-container.js';
import {createTripDays} from './components/trip-days.js';
import {createInfoRoute} from './components/info-route.js';
import {filters} from './const.js';
// import {generateOfferList} from './utils.js';
// import {renderEvent} from './mock/edit-event.js';
// import {generateDescription, descriptionSentences} from './mock/destination.js';

const CARDS_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const tripInfo = document.querySelector(`.trip-info`);

render(tripInfo, createInfoRoute(), `afterbegin`);

const tripControls = document.querySelector(`.trip-controls`);

render(tripControls, createSiteMenu());

const tripFilters = tripControls.querySelectorAll(`.trip-controls h2`);

render(tripFilters[0], createSiteFilters(filters), `afterend`);

const tripEvents = () => {
  return document.querySelector(`.trip-events`);
};

const getTripList = () => {
  return document.querySelector(`.trip-days`);
};

render(tripEvents(), createBuildForm());
// render(tripEvents(), createEditEventTemplate());
render(tripEvents(), createTripContainerTemplate());

// new Array(CARDS_COUNT).fill(``).forEach(() => render(getTripList(), createTripDays()));
