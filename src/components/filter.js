const createFilterItem = (filterItem) => {
  return (
    `<div class="trip-filters__filter">
      <input id="filter-${filterItem.name.toLowerCase()}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${name.toLowerCase()}" ${filterItem.isChecked ? `checked` : ``}>
      <label class="trip-filters__filter-label" for="filter-${filterItem.name.toLowerCase()}">${filterItem.name}</label>
    </div>`);
};

const createSiteFilters = (filterItems) => {
  const filterItemsMarkup = filterItems.map((item) => createFilterItem(item)).join(`\n`);

  return (
    `<form class="trip-filters" action="#" method="get">
      ${filterItemsMarkup}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};

export {createSiteFilters};
