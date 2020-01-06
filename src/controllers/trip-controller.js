import {splitEventsByDay, RenderPosition} from '../utils/common.js';
import {replace, render} from '../utils/render.js';
import {sortItemList} from '../const.js';
import EventComponent from '../components/event.js';
import EventEditComponent from '../components/event-edit.js';
import EventListComponent from '../components/event-list.js';
import NoPointsComponent from '../components/no-points';
import SortComponent from '../components/sort.js';
import DayComponent from '../components/day.js';
import DayListComponent from '../components/day-list.js';

const renderEvent = (eventData) => {
  const eventToEdit = () => replace(eventEditElement, eventElement);
  const editToEvent = () => replace(eventElement, eventEditElement);
  const documentKeyDownHandler = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      editToEvent();
      document.removeEventListener(`keydown`, documentKeyDownHandler);
    }
  };

  const eventComponent = new EventComponent(eventData);
  const eventElement = eventComponent.getElement();

  const eventEditComponent = new EventEditComponent(eventData);
  const eventEditElement = eventEditComponent.getElement();

  const eventRollupButton = eventElement.querySelector(`.event__rollup-btn`);
  const eventEditRollupButton = eventEditElement.querySelector(`.event__rollup-btn`);

  eventRollupButton.addEventListener(`click`, () => {
    eventToEdit();
    document.addEventListener(`keydown`, documentKeyDownHandler);
  });

  eventEditRollupButton.addEventListener(`click`, () => {
    editToEvent();
    document.removeEventListener(`keydown`, documentKeyDownHandler);
  });

  eventEditElement.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    editToEvent();
    document.removeEventListener(`keydown`, documentKeyDownHandler);
  });

  return eventComponent;
};

const renderEvents = (container, eventList) => {
  const eventElements = eventList.map((it) => renderEvent(it).getElement());
  render(container.getElement(), eventElements, RenderPosition.BEFOREEND);
};

export default class TripController {
  constructor(container, eventList) {
    this._container = container;
    this._eventList = eventList;
    this._sortComponent = new SortComponent(sortItemList);
    this._dayListComponent = new DayListComponent();
  }

  render() {
    if (this._eventList.length) {
      const days = splitEventsByDay(this._eventList);

      days.forEach((day) => {
        const dayComponent = new DayComponent(day);
        const dayEventListComponent = new EventListComponent();

        render(this._dayListComponent.getElement(), dayComponent.getElement(), RenderPosition.BEFOREEND);
        render(dayComponent.getElement(), dayEventListComponent.getElement(), RenderPosition.BEFOREEND);

        renderEvents(dayEventListComponent, day.dayEvents);
      });

      render(this._container, this._sortComponent.getElement(), RenderPosition.BEFOREEND);
      render(this._container, this._dayListComponent.getElement(), RenderPosition.BEFOREEND);

    } else {
      render(this._container, new NoPointsComponent().getElement(), RenderPosition.BEFOREEND);
    }
  }
}
