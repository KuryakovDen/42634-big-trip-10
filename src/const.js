const MovingType = {
  MOVING: `moving`,
  STAYING: `staying`
};

const PlaceholderParticle = {
  [MovingType.MOVING]: `to`,
  [MovingType.STAYING]: `in`
};

const EventType = {
  TAXI: `Taxi`,
  BUS: `Bus`,
  TRAIN: `Train`,
  SHIP: `Ship`,
  TRANSPORT: `Transport`,
  DRIVE: `Drive`,
  FLIGHT: `Flight`,
  CHECKIN: `Check-in`,
  SIGHTSEEING: `Sightseeing`,
  RESTAURANT: `Restaurant`,
  TRIP: `Trip`
};

const SortType = {
  EVENT: `event`,
  TIME: `time`,
  PRICE: `price`
};

const EventTypeProperties = {
  [EventType.TAXI]: {
    name: `Taxi`,
    icon: `taxi.png`,
    movingType: MovingType.MOVING
  },

  [EventType.BUS]: {
    name: `Bus`,
    icon: `bus.png`,
    movingType: MovingType.MOVING
  },

  [EventType.TRAIN]: {
    name: `Train`,
    icon: `train.png`,
    movingType: MovingType.MOVING
  },

  [EventType.SHIP]: {
    name: `Ship`,
    icon: `ship.png`,
    movingType: MovingType.MOVING
  },

  [EventType.TRANSPORT]: {
    name: `Transport`,
    icon: `transport.png`,
    movingType: MovingType.MOVING
  },

  [EventType.DRIVE]: {
    name: `Drive`,
    icon: `drive.png`,
    movingType: MovingType.MOVING
  },

  [EventType.FLIGHT]: {
    name: `Flight`,
    icon: `flight.png`,
    movingType: MovingType.MOVING
  },

  [EventType.CHECKIN]: {
    name: `Check-in`,
    icon: `check-in.png`,
    movingType: MovingType.STAYING
  },

  [EventType.SIGHTSEEING]: {
    name: `Sightseeing`,
    icon: `sightseeing.png`,
    movingType: MovingType.STAYING
  },

  [EventType.RESTAURANT]: {
    name: `Restaurant`,
    icon: `restaurant.png`,
    movingType: MovingType.STAYING
  },

  [EventType.TRIP]: {
    name: `Trip`,
    icon: `trip.png`,
    movingType: MovingType.MOVING
  }
};

const Destinations = [
  `Minsk`,
  `London`,
  `Kogalym`,
  `Berlin`,
  `Barcelona`,
  `Rome`,
  `Milan`,
  `Moscow`,
  `St. Petersburg`,
  `Biysk`,
  `Istanbul`,
  `Kiev`,
  `Amsterdam`,
  `Paris`,
  `Prague`,
  `Sydney`
];

const Months = [
  `JAN`,
  `FEB`,
  `MAR`,
  `APR`,
  `MAY`,
  `JUN`,
  `JUL`,
  `AUG`,
  `SEP`,
  `OCT`,
  `NOV`,
  `DEC`
];

const TimeValue = {
  MINUTE: 60 * 1000,
  HOUR: 60 * 60 * 1000,
  TWO_HOURS: 2 * 60 * 60 * 1000,
  HALF_DAY: 12 * 60 * 60 * 1000,
  DAY: 2 * 12 * 60 * 60 * 1000,
  TWO_DAYS: 2 * 2 * 12 * 60 * 60 * 1000,
  WEEK: 7 * 2 * 12 * 60 * 60 * 1000,
  TWO_WEEKS: 14 * 2 * 12 * 60 * 60 * 1000
};

const EVENT_DEFAULT = {
  type: EventType.FLIGHT,
  start: new Date(),
  finish: new Date(Date.now() + TimeValue.DAY),
  destination: ``,
  cost: 0,
  isFavorite: false,
  offers: []
};

const OfferType = {
  LUGGAGE: `luggage`,
  COMFORT: `comfort`,
  MEAL: `meal`,
  SEATS: `seats`,
  TRAIN: `train`
};

const OfferTypeOptions = {
  [OfferType.LUGGAGE]: {
    name: `Add luggage`
  },

  [OfferType.COMFORT]: {
    name: `Switch to comfort class`
  },

  [OfferType.MEAL]: {
    name: `Add meal`
  },

  [OfferType.SEATS]: {
    name: `Choose seats`
  },

  [OfferType.TRAIN]: {
    name: `Travel by train`
  }
};

const menuItemList = [
  {name: `Table`, href: `#`, active: true},
  {name: `Stats`, href: `#`, active: false}
];

const filterItemList = [
  {name: `Everything`, isChecked: true},
  {name: `Future`, isChecked: false},
  {name: `Past`, isChecked: false}
];

const sortItemList = [
  {name: `Day`, isChecked: false, direction: true},
  {name: `Event`, isChecked: true, direction: false, sortType: SortType.EVENT},
  {name: `Time`, isChecked: false, direction: true, sortType: SortType.TIME},
  {name: `Price`, isChecked: false, direction: true, sortType: SortType.PRICE},
  {name: `Offers`, isChecked: false, direction: true}
];

export {
  menuItemList,
  filterItemList,
  sortItemList,
  MovingType,
  PlaceholderParticle,
  EventType,
  SortType,
  EventTypeProperties,
  Destinations,
  Months,
  TimeValue,
  EVENT_DEFAULT,
  OfferType,
  OfferTypeOptions
};
