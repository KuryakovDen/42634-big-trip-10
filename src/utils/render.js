import {RenderPosition} from '../utils/common.js';

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

const replace = (oldComponent, newComponent) => {
  const parentElement = oldComponent.getElement().parentElement;
  const oldElement = oldComponent.getElement();
  const newElement = newComponent.getElement();

  const isExistElements = !!(parentElement && newElement && oldElement);

  if (isExistElements && parentElement.contains(oldElement)) {
    parentElement.replaceChild(oldElement, newElement);
  }
};

const remove = (component) => {
  component.getElement().remove();
  component.removeElement();
};

export {
  render,
  replace,
  remove,
};
