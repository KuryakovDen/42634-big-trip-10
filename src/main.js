import {RenderPosition, renderComponent} from './utils/render.js';
import MenuComponent, {menuList} from './components/menu.js';
import FilterComponent, {filterList} from './components/filter.js';
import generateEventList from './mock/event-data.js';
import Events from './models/events.js';

import TripController from './controllers/trip-controller.js';

const tripMainElement = document.querySelector(`.trip-main`);
const tripEventsElement = document.querySelector(`.trip-events`);
const tripControlElements = tripMainElement.querySelectorAll(`.trip-controls h2`);

const events = new Events(generateEventList());
const tripController = new TripController(tripEventsElement, events);

renderComponent(tripControlElements[0], RenderPosition.AFTER_END, new MenuComponent(menuList));
renderComponent(tripControlElements[1], RenderPosition.AFTER_END, new FilterComponent(filterList));

tripController.render();
