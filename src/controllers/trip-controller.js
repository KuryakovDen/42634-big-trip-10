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
  const eventToEdit = () => replace(eventEditComponent, eventComponent);
  const editToEvent = () => replace(eventComponent, eventEditComponent);
  const documentKeyDownHandler = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      editToEvent();
      document.removeEventListener(`keydown`, documentKeyDownHandler);
    }
  };

  const eventComponent = new EventComponent(eventData);
  const eventEditComponent = new EventEditComponent(eventData);

  eventComponent.setRollupButtonClickHandler(() => {
    eventToEdit();
    document.addEventListener(`keydown`, documentKeyDownHandler);
  });

  eventEditComponent.setRollupButtonClickHandler(() => {
    editToEvent();
    document.removeEventListener(`keydown`, documentKeyDownHandler);
  });

  eventEditComponent.setSubmitHandler((evt) => {
    evt.preventDefault();
    editToEvent();
    document.removeEventListener(`keydown`, documentKeyDownHandler);
  });

  return eventComponent;
};

const renderEvents = (container, eventList) => {
  const eventComponents = eventList.map((it) => renderEvent(it));
  render(container.getElement(), ...eventComponents, RenderPosition.BEFOREEND);
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

        render(this._dayListComponent.getElement(), dayComponent, RenderPosition.BEFOREEND);
        render(dayComponent.getElement(), dayEventListComponent, RenderPosition.BEFOREEND);

        renderEvents(dayEventListComponent, day.dayEvents);
      });

      render(this._container, this._sortComponent, RenderPosition.BEFOREEND);
      render(this._container, this._dayListComponent, RenderPosition.BEFOREEND);

    } else {
      render(this._container, new NoPointsComponent(), RenderPosition.BEFOREEND);
    }
  }
}
