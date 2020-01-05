import {createElement} from '../utils/common.js';

const createMenuItem = (menuItem) => `
<a class="trip-tabs__btn ${menuItem.active ? `  trip-tabs__btn--active` : ``}" href="${menuItem.href}">${menuItem.name}</a>`;

const createMenu = (menuItems) => {
  const menuItemList = menuItems.map((item) => createMenuItem(item)).join(`\n`);
  return `<nav class="trip-controls__trip-tabs  trip-tabs">${menuItemList}</nav>`;
};

class MenuComponent {
  constructor(menuPoints) {
    this._element = null;
    this._menuPoints = menuPoints;
  }

  getTemplate() {
    return createMenu(this._menuPoints);
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

export {MenuComponent};
