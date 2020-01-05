import AbstractComponent from './abstract.js';

export default class NoPointsComponent extends AbstractComponent {
  constructor(message = `Click New Event to create your first point`) {
    super();
    this._message = message;
  }

  getTemplate() {
    return `<p class="trip-events__msg">${this._message}</p>`;
  }
}
