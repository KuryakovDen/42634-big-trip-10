import {splitEventsByDay, RenderPosition} from '../utils/common.js';
import {replace, render} from '../utils/render.js';
import {sortItemList, SortType} from '../const.js';
import EventComponent from '../components/event.js';
import EventEditComponent from '../components/event-edit.js';
import EventListComponent from '../components/event-list.js';
import NoPointsComponent from '../components/no-points';
import SortComponent from '../components/sort.js';
import DayComponent from '../components/day.js';
import DayListComponent from '../components/day-list.js';

const sortEventsByTime = (eventList) => {
  const dayCounter = ``;
  const dayDate = ``;

  const dayEvents = eventList.slice().sort((a, b) => (+a.finish - a.start) - (b.finish - b.start));

  return [{dayCounter, dayDate, dayEvents}];
};

const sortEventsByPrice = (eventList) => {
  const dayCounter = null;
  const dayDate = null;

  const dayEvents = eventList.slice().sort((a, b) => a.cost - b.cost);

  return [{dayCounter, dayDate, dayEvents}];
};

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

const renderDays = (container, dayList) => {
  dayList.forEach((it) => {
    const dayComponent = new DayComponent(it);
    const dayEventListComponent = new EventListComponent();

    render(container, dayComponent, RenderPosition.BEFOREEND);
    render(dayComponent.getElement(), dayEventListComponent, RenderPosition.BEFOREEND);

    renderEvents(dayEventListComponent, it.dayEvents);
  });
};

export default class TripController {
  constructor(container, eventList) {
    this._container = container;
    this._eventList = eventList;
    this._sortComponent = new SortComponent(sortItemList);
    this._dayListComponent = new DayListComponent();
    this._editEventComponent = null;
  }

  render() {
    let sortedDays = [];

    if (this._eventList.length) {
      this._sortComponent.setSortTypeChangeHandler((sortType) => {
        switch (sortType) {
          case SortType.TIME:
            sortedDays = sortEventsByTime(this._eventList);
            break;
          case SortType.PRICE:
            sortedDays = sortEventsByPrice(this._eventList);
            break;

          default:
          case SortType.EVENT:
            sortedDays = splitEventsByDay(this._eventList);
            break;
        }

        this._dayListComponent.getElement().innerHTML = ``;
        renderDays(this._dayListComponent.getElement(), sortedDays);
      });

      const days = splitEventsByDay(this._eventList);

      renderDays(this._dayListComponent.getElement(), days);

      render(this._container, this._sortComponent, RenderPosition.BEFOREEND);
      render(this._container, this._dayListComponent, RenderPosition.BEFOREEND);

    } else {
      render(this._container, new NoPointsComponent(), RenderPosition.BEFOREEND);
    }
  }
}
