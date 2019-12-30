import {createElement} from '../util.js';

const createFilterItem = (filterItem) => (
  `<div class="trip-filters__filter">
    <input id="filter-${filterItem.name.toLowerCase()}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${name.toLowerCase()}" ${filterItem.isChecked ? `checked` : ``}>
    <label class="trip-filters__filter-label" for="filter-${filterItem.name.toLowerCase()}">${filterItem.name}</label>
  </div>`);

const createFilter = (filterItems) => {
  const filterItemsHtml = filterItems.map((item) => createFilterItem(item)).join(`\n`);
  return (
    `<form class="trip-filters" action="#" method="get">
    ${filterItemsHtml}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`);
};

export default class FilterComponent {
  constructor(filters) {
    this._element = null;
    this._filters = filters;
  }

  getTemplate() {
    return createFilter(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

export {createFilter};
