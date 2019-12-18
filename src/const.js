const cities = [`Amsterdam`, `Geneva`, `Chamonix`, `Saint Petersburg`];

const months = [
  `JAN`,
  `FEB`,
  `MAR`,
  `APL`,
  `MAY`,
  `JUN`,
  `JUL`,
  `AUG`,
  `SEP`,
  `OCT`,
  `NOV`,
  `DEC`
];

const MovingType = {
  moving: `moving`,
  staying: `staying`
};

const DirectionForMoving = {
  [MovingType.moving]: `to`,
  [MovingType.staying]: `in`
};

const eventType = {
  taxi: `Taxi`,
  bus: `Bus`,
  train: `Train`,
  ship: `Ship`,
  transport: `Transport`,
  drive: `Drive`,
  flight: `Flight`,
  checkin: `Check-in`,
  sightseeing: `Sightseeing`,
  restaraunt: `Restaraunt`,
  trip: `Trip`
};

const eventTypeProperties = {
  [eventType.taxi]: {
    name: eventType.taxi,
    icon: `${eventType.taxi.toLowerCase()}.png`,
    movingMethod: MovingType.moving
  },

  [eventType.bus]: {
    name: eventType.bus,
    icon: `${eventType.bus.toLowerCase()}.png`,
    movingMethod: MovingType.moving
  },

  [eventType.train]: {
    name: eventType.train,
    icon: `${eventType.train.toLowerCase()}.png`,
    movingMethod: MovingType.moving
  },

  [eventType.ship]: {
    name: eventType.ship,
    icon: `${eventType.ship.toLowerCase()}.png`,
    movingMethod: MovingType.moving
  },

  [eventType.transport]: {
    name: eventType.transport,
    icon: `${eventType.transport.toLowerCase()}.png`,
    movingMethod: MovingType.moving
  },

  [eventType.drive]: {
    name: eventType.drive,
    icon: `${eventType.taxi.toLowerCase()}.png`,
    movingMethod: MovingType.moving
  },

  [eventType.flight]: {
    name: eventType.flight,
    icon: `${eventType.taxi.toLowerCase()}.png`,
    movingMethod: MovingType.moving
  },

  [eventType.flight]: {
    name: eventType.checkin,
    icon: `${eventType.checkin.toLowerCase()}.png`,
    movingMethod: MovingType.staying
  },

  [eventType.sightseeing]: {
    name: eventType.sightseeing,
    icon: `${eventType.sightseeing.toLowerCase()}.png`,
    movingMethod: MovingType.staying
  },

  [eventType.restaraunt]: {
    name: eventType.restaraunt,
    icon: `${eventType.restaraunt.toLowerCase()}.png`,
    movingMethod: MovingType.staying
  },

  [eventType.trip]: {
    name: eventType.trip,
    icon: `${eventType.trip.toLowerCase()}.png`,
    movingMethod: MovingType.moving
  }
};

const extraOfferType = {
  luggage: `luggage`,
  comfort: `comfort`,
  meal: `meal`,
  seats: `seats`,
  train: `train`
};

const TimeValue = {
  MINUTE: 60 * 1000,
  HOUR: (60 * 1000) * 60,
  HALF_DAY: (60 * 1000 * 60) * 12,
  DAY: (60 * 1000 * 60 * 12) * 2,
  WEEK: (60 * 1000 * 60 * 12 * 2) * 7
};

const defaultStartDate = new Date();
const defaultEndDate = defaultStartDate;

const defaultTrip = {
  type: eventType.flight,
  startTrip: defaultStartDate,
  endTrip: defaultEndDate,
  desctination: ``,
  cost: 0,
  isFavourite: false,
  offers: []
};

const extraOfferTypeProperties = {
  [extraOfferType.luggage]: {
    name: `Add ${extraOfferType.luggage}`
  },

  [extraOfferType.comfort]: {
    name: `Switch ${extraOfferType.comfort}`
  },

  [extraOfferType.meal]: {
    name: `Add ${extraOfferType.meal}`
  },

  [extraOfferType.seats]: {
    name: `Choose ${extraOfferType.seats}`
  },

  [extraOfferType.train]: {
    name: `Travel by ${extraOfferType.train}`
  }
};

const filters = [
  {
    name: `Everything`,
    isChecked: false
  },

  {
    name: `Future`,
    isChecked: true
  },

  {
    name: `Past`,
    isChecked: false
  }
];

export {eventType,
  extraOfferTypeProperties,
  cities,
  eventTypeProperties,
  DirectionForMoving,
  MovingType,
  months,
  extraOfferType,
  TimeValue,
  defaultTrip,
  filters};
