'use strict';

const weekDays = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];

const restaurant = {
  name: "Random",
  openingHours: {
    [weekDays[1]]: {
      open: 9,
      close: 17
    },

    [weekDays[3]]: {
      open: 13,
      close: 8
    },

    [weekDays[5]]: {
      open: 14,
      close: 0
    }

  }

};

console.log(restaurant);

const openingHrsEntries = Object.entries(restaurant.openingHours);
for (const x of openingHrsEntries) {
  // const weekday = x[0];
  // const openTime = x[1].open;
  // const closeTime = x[1].close;

  const [weekday, { open: openTime, close: closeTime }] = x

  console.log(`The restuarant ${restaurant.name} on ${weekday} ${weekday === 'wed' ? 'nes' : ''}day opens at ${openTime} and closes at ${closeTime}.`)
}