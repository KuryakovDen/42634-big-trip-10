const MovingType = {
  MOVING: `moving`,
  STAYING: `staying`
};

const PlaceholderParticle = {
  [MovingType.MOVING]: `to`,
  [MovingType.STAYING]: `in`
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

const EventTypeProperties = {
  [EventType.TAXI]: {
    name: `Taxi`,
    icon: `taxi.png`,
    movingType: MovingType.MOVING
  },

  [EventType.BUS]: {
    name: `Bus`,
    icon: `bus.png`,
    movingType: MovingType.MOVING,
    availableOfferTypes: new Set([
      OfferType.SEATS
    ])
  },

  [EventType.TRAIN]: {
    name: `Train`,
    icon: `train.png`,
    movingType: MovingType.MOVING,
    availableOfferTypes: new Set([
      OfferType.LUGGAGE,
      OfferType.COMFORT,
      OfferType.MEAL
    ])
  },

  [EventType.SHIP]: {
    name: `Ship`,
    icon: `ship.png`,
    movingType: MovingType.MOVING,
    availableOfferTypes: new Set([
      OfferType.LUGGAGE,
      OfferType.COMFORT,
      OfferType.MEAL,
      OfferType.SEATS
    ])
  },

  [EventType.TRANSPORT]: {
    name: `Transport`,
    icon: `transport.png`,
    movingType: MovingType.MOVING,
    availableOfferTypes: new Set([
      OfferType.LUGGAGE,
      OfferType.COMFORT,
      OfferType.MEAL,
      OfferType.SEATS
    ])
  },

  [EventType.DRIVE]: {
    name: `Drive`,
    icon: `drive.png`,
    movingType: MovingType.MOVING,
    availableOfferTypes: new Set([
      OfferType.COMFORT
    ])
  },

  [EventType.FLIGHT]: {
    name: `Flight`,
    icon: `flight.png`,
    movingType: MovingType.MOVING,
    availableOfferTypes: new Set([
      OfferType.LUGGAGE,
      OfferType.COMFORT,
      OfferType.MEAL,
      OfferType.SEATS,
      OfferType.TRAIN
    ])
  },

  [EventType.CHECKIN]: {
    name: `Check-in`,
    icon: `check-in.png`,
    movingType: MovingType.STAYING,
    availableOfferTypes: new Set([
      OfferType.MEAL
    ])
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

export {
  MovingType,
  PlaceholderParticle,
  OfferType,
  OfferTypeOptions,
  EventType,
  EventTypeProperties,
  TimeValue,
  EVENT_DEFAULT
};
