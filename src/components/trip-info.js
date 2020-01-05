import {getShortDate} from '../utils.js';
import {AbstractComponent} from '../components/abstract.js';

const getDateTitle = (eventList) => {
  return `${getShortDate(eventList[0].start)}&nbsp;&mdash;&nbsp;${getShortDate(eventList[eventList.length - 1].finish)}`;
};

const createTripInfo = (eventList) => {
  const shortTrip = eventList.length > 3 ? [eventList[0].destination, `...`, eventList[eventList.length - 1].destination] : [eventList[0].destination, eventList[1].destination];

  return (
    `<div class="trip-info__main">
      <h1 class="trip-info__title">${shortTrip.join(` &mdash; `)}</h1>
      <p class="trip-info__dates">${getDateTitle(eventList)}</p>
    </div>`);
};

class TripInfoComponent extends AbstractComponent {
  constructor(events) {
    super();
    this._events = events;
  }

  getTemplate() {
    return createTripInfo(this._events);
  }
}

export {TripInfoComponent};
