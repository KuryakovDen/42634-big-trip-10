import AbstractComponent from './abstract-component.js';

export const SortType = {
  DEFAULT: `default`,
  TIME: `time`,
  PRICE: `price`
};

export const sortList = [
  {name: `Event`, checked: true, direction: false, sortType: SortType.DEFAULT},
  {name: `Time`, checked: false, direction: true, sortType: SortType.TIME},
  {name: `Price`, checked: false, direction: true, sortType: SortType.PRICE}
];

const createSortItem = (sortItem) => {
  const name = sortItem.name.toLowerCase();
  const direction = sortItem.direction ? `
                  <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
                  <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
                </svg>` : ``;

  return `
            <div class="trip-sort__item  trip-sort__item--${name}">
              <input  data-sort-type="${sortItem.sortType}" id="sort-${name}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${name}"${sortItem.checked ? `checked` : ``}>
              <label class="trip-sort__btn" for="sort-${name}">
                ${sortItem.name}
                ${direction}
              </label>
            </div>`;
};

const createSortHtml = (sortItems) => {

  return `
          <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            <span class="trip-sort__item  trip-sort__item--day">Sort</span>
            ${sortItems.map((item) => createSortItem(item)).join(`\n`)}
            <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
          </form>`;
};

export default class SortComponent extends AbstractComponent {
  constructor(sortItems) {
    super();
    this._sortItems = sortItems;
    this._activeSortType = sortItems[0].sortType;
  }

  getTemplate() {
    return createSortHtml(this._sortItems);
  }

  setSortTypeChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      if (evt.target.dataset.sortType && evt.target.dataset.sortType !== this._activeSortType) {
        this._activeSortType = evt.target.dataset.sortType;
        handler(this._activeSortType);
      }
    });
  }
}
