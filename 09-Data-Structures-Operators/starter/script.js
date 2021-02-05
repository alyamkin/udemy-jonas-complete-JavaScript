'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2},${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  //ES6 enhanced object literals

  openingHours,
};

// RECAP 112 -123
// Optional Chaining and objects
const wDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const hours = {
  mon: {
    open: 7,
    close: 23,
  },
  wed: {
    open: 7,
    close: 23,
  },
  thu: {
    open: 7,
    close: 23,
  },
  sat: {
    open: 10,
    close: 22,
  },

  displayOpenDays() {
    console.log(`Monday, Wednsday, Thursday, Saturday`);
  },
};
/*
console.log(hours.sun?.open);

for (const wDay of wDays) {
  hours?.[wDay] && console.log(hours[wDay].open);
}

// Optional Chaining and arrays
const personArr = [{ name: 'Andrey' }];
console.log(personArr[1]?.name ?? 'Element is not exist');

// Optional Chaining and methods
hours.displayOpenDays?.() || console.log('Method is not exist');


// Looping objects
for (const [day, opens] of Object.entries(hours)) {
  console.log(Object.entries(hours));
}


// set
const namesArr = ['Andrey', 'Andrey', 'Yana', 'Andrey'];
const namesSet = new Set(namesArr);
namesSet.add('Yana');
namesSet.add('Tom');
namesSet.delete('Yana');
console.log(namesSet);
console.log(namesSet.has('tom'));
console.log(namesSet.size);
console.log([...new Set('Andreyyy')]);


// Map
const mapExample = new Map();
mapExample.set('name', 'Andrey');
mapExample.set(false, 'has no job');
mapExample.set(1, 'has bank account');
console.log(mapExample);
mapExample.delete(false);
console.log(mapExample);
console.log(mapExample.has(1));

const mapExample2 = new Map([
  ['firstName', 'Andrey'],
  [
    'age',
    function () {
      console.log('Hello');
    },
  ],
]);

let getAge = mapExample2.get('age');

console.log(mapExample2);

for (const [key, value] of mapExample2) {
  if (typeof value === 'function') value();
}

const mapToArr = [...mapExample2.values()];
console.log(mapToArr[1]());


// strings
const arr = ['My', 'name', 'is', 'Andrey'];
const str = '    My name is Andrey';
console.log(str[0]);
console.log(str.split(' '));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.replace(/e/g, 'E'));
console.log(arr.join(' '));
console.log(str.trimLeft());
console.log(str.trim().padStart(30, '*'));
*/
/*
// RECAP 103-110
//destructuring arrays
const [x, y, z] = [1, 2, 3];
console.log(x, y, z);


let [x, y, z] = [1, 2, 3];
[x, y, z] = [z, y, x];

console.log(x, y, z);


let [x, y, z = 0.5] = [1, 2];
console.log(x, y, z);


let [x, , y] = [1, 2, 5];
console.log(x, y);



let [x, y, [z, w]] = [1, 5, [6, 7]];
console.log(x, y, z, w);


const [starterMenu, mainMenu] = restaurant.order(0, 0);
console.log(starterMenu, mainMenu);

*/
/*
// destructuring objects

const andreyObj = {
  firstName: 'Andrey',
  age: 21,
  family: {
    numberMembers: 5,
    surname: 'Lyamkin',
  },
};

const { firstName, age } = andreyObj;
console.log(firstName, age);

const { firstName, lastName: surname = 'Lyamkin', age: fullAge } = andreyObj;
console.log(firstName, surname, fullAge);


const {
  firstName,
  age,
  family: { numberMembers, surname },
} = andreyObj;
console.log(
  `Person information: ${firstName} , ${age}; family information: ${numberMembers}, ${surname}`
);

*/

/*
// spread operator
const sum = function (x, y, z) {
  return x + y + z;
};

const num = [1, 2, 3];
const newNum = [...num, 4, 5, 6];
console.log(newNum);
console.log(sum(1, 2, 3));
console.log(sum(...num));


const num = [1, 2, 3];
const newNum = [...num];
console.log(num);
console.log(newNum);
newNum.push(4);
console.log(num);
console.log(newNum);


const firstName = 'Andrey';
const letters = [...firstName];
console.log(letters);


const andreyObj = {
  firstName: 'Andrey',
  age: 21,
  family: {
    numberMembers: 5,
    surname: 'Lyamkin',
  },
};

const andreyObjNew = { ...andreyObj, weight: 80 };
andreyObjNew.job = 'programmer';
console.log(andreyObj);
console.log(andreyObjNew);
*/
/*
// rest operator
const add = function (...numbers) {
  let sum = numbers.reduce((sum, num) => sum + num);
  return sum;
};

let numbers = [1, 2, 3];

console.log(add(...numbers));


const [x, y, ...numbers] = [1, 2, 3, 4, 5, 6];
console.log(x, y, numbers);



const andreyObj = {
  firstName: 'Andrey',
  age: 21,
  family: {
    numberMembers: 5,
    surname: 'Lyamkin',
  },
};

const { firstName, ...other } = andreyObj;
console.log(firstName, other);



// looping arrays for-of
const mainMenu = [...restaurant.mainMenu];

for (const [id, meal] of mainMenu.entries()) {
  console.log(`${id + 1}: ${meal}`);
}
*/

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole,21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Sole,21',
  starterIndex: 2,
});
*/
/*
// Destructuring arrays 103
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary);


// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);



// nested destructoring
const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// dafault values

const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
*/
/*
//Destructuring Objects 104

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);

console.log(a, b);

//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
//The Spread Operator (...) 105

let arr = [1, 2, 3];

let newArr = [5, 7, ...arr];
console.log(newArr);
console.log(...newArr);


const newMenu = [...restaurant.mainMenu, 'Gnocci'];

console.log(newMenu);


// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);


//Iterables: arrays, strings, maps, sets. NOT objects

const str = 'Andrey';

const letters = [...str, 'L.'];
console.log(letters);

//

// Spread and functions

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Let's make pasta! Ingredient 2?"),
  prompt("Let's make pasta! Ingredient 3?"),
];

restaurant.orderPasta(...ingredients);


// Spread and Objects

const newRestaurant = { ...restaurant, founder: 'Guiseppe', foundedIn: 1998 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/

//Rest Pattern and Parameters 106

// Destructuring
/*
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Rest in object

const { sat, ...weekdays } = restaurant.openingHours;

console.log(sat, weekdays);



// Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x);



restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
*/

// Short Circuiting (&& and ||) 107

/*
// Use ANY data type, return ANY data type, short-circuiting

// OR
console.log(false || 3 || 'Jonas');
console.log('' || 'Andrey');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuest = 23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);


const guest2 = restaurant.numGuest || 10;
console.log(guest2);


// AND

console.log(0 && 'Andrey');
console.log(7 && 'Andrey');
console.log('Hello' && 23 && 23 && null && 'Andrey');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('potatoes');
*/

/*
// The Nullish Coalescing Operator (??) 108

restaurant.numGuest = 0;

const guest = restaurant.numGuest || 10;
console.log(guest);

// Nullish: null and undefined
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);
*/

/*
//Coding Challenge #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...playerNames) {
    console.log(`${playerNames.length} goals were scored`);
    playerNames.forEach(name => {
      console.log(name);
    });
  },
};

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const { team1, x: draw, team2 } = game.odds;

const playersTest = ['Davies', 'Miller', 'Lewandowski', 'Kimmich'];
game.printGoals(...playersTest);
game.printGoals(...game.scored);

team1 < team2 && console.log(`team 1 more likely to win`);
team2 < team1 && console.log(`team 2 more likely to win`);
*/

/*
//Looping Arrays: The for-of Loop 110

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}



for (const [index, item] of menu.entries()) {
  console.log(`${index + 1}: ${item}`);
}

*/

// Enhanced Object Literals 111
// Optional Chaining (.?) 112
/*
if (restaurant.openingHours.mon && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example ?.

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}



// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');



// Arrays
const users = [{ name: 'Andrey', email: 'test@andrey.io' }];
// const users = [];
console.log(users[1]?.name ?? 'element is not exist');
*/

// Looping Objects: Object Keys, Values, and Entries 113
/*
 
// property name
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}

console.log(openStr);


// property values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
/*
// Coding Challenge #2 114

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...playerNames) {
    console.log(`${playerNames.length} goals were scored`);
    playerNames.forEach(name => {
      console.log(name);
    });
  },
};

// .1
for (let [id, playerName] of game.scored.entries()) {
  console.log(`Goal ${id + 1}: ${playerName}`);
}

// .2
let sum = 0;
let average = 0;
const odds = Object.values(game.odds);
for (let odd of odds) {
  sum += odd;
}
average = sum / odds.length;
console.log(`Average odd is ${average.toFixed(2)}`);

// .3

for (let [team, odd] of Object.entries(game.odds)) {
  game?.[team] && console.log(`Odd of victory ${game[team]}: ${odd}`);
  game?.[team] ?? console.log(`Odd of draw ${odd}`);
}

// .4

const scores = {};

for (let playerName of game.scored) {
  scores?.[playerName] && scores[playerName]++;
  scores?.[playerName] ?? (scores[playerName] = 1);
}

console.log(scores);
*/

/*
// Sets 115

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('aAandrey'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pasta'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.add('Apples pie');
ordersSet.delete('Risotto');
console.log(ordersSet);
// ordersSet.clear();
// console.log(ordersSet);
for (const order of ordersSet) console.log(order);

const names = ['Andrey', 'Andrey', 'Yana', 'Yana'];

const namesUnique = new Set(names);
console.log(namesUnique);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set('Andreyyyyy').size);
*/

/*
//Maps: Fundamentals 116

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are opened')
  .set(false, 'We are closed');

rest.get('name');
console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Delete key - value
console.log(rest.has('categories'));
rest.delete(2);

// size
console.log(rest.size);

// clear
// console.log(rest.clear);
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(
  document.querySelector('h1'),
  document.querySelector('h1').textContent
);
console.log(rest.get(arr));
console.log(rest.get(document.querySelector('h1')));
console.log(rest);
*/

/*
// Maps: Iteration 117

const question = new Map([
  ['question', 'What is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

console.log(question);
console.log(Object.entries(openingHours));

// Convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(hoursMap.get('thu'));

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key} : ${value}`);
  }
}

const answer = Number(prompt('Your answer'));

console.log(question.get(answer === question.get('correct')));

// Convert map to array
console.log([...question]);

console.log([...question.keys()]);
console.log([...question.values()]);

*/

// Summary: Which Data Structure to Use? 118

/*
// Coding Challenge #3 119

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];

// 2.
gameEvents.delete(64);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents) {
  const timeLimit = 45;
  let gamePeriod = min <= timeLimit ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${gamePeriod} ${min}: ${event}`);
}

console.log(gameEvents);

*/

/*
// Working With Strings - Part 1 120

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log(`You got the middle seat`);
  else console.log(`You got lucky`);
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

*/

/*
// Working With Strings - Part 2 121

const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('Andrey'.toUpperCase());

// Fix capitalization in name

const passenger = 'aNdREy';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing email

const email = 'hello@andrey.io';
const loginEmail = ' Hello@Andrey.Io \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail);

// replacing

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('Ai'));
console.log(plane.endsWith('neo'));

if (plane.startsWith('Airbus') && plane.endsWith('neo'))
  console.log(`Part of the NEW Arbus family`);

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are not allowed on board`);
  } else {
    console.log(`Welcome on board`);
  }
};

checkBaggage('I have a laptop, some Food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

/*
// Working With Strings - Part 3 122

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Andrey Lyamkin'.split(' '));

const [firstName, lastName] = 'Andrey Lyamkin'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// capitalize names
const capitalizeName = function (name) {
  const namesUpper = [];
  const names = name.split(' ');
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann swith davis');

// Padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+'));
console.log('Andrey'.padStart(25, '+').padEnd(50, '+'));
console.log('Andrey'.padEnd(25, '+'));

const maskCreditCard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(454651215748446));

console.log(maskCreditCard('4785653665648794313131'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'plane'.repeat(n)}`);
};

planesInLine(5);

*/

/*
// Coding Challenge #4 123
const textArea = document.createElement('textarea');
document.body.append(textArea);
const button = document.createElement('button');
button.textContent = 'Ok';
document.body.append(button);

button.addEventListener('click', function () {
  const varsUnderscore = textArea.value.split('\n');

  for (const [index, varName] of varsUnderscore.entries()) {
    const [fName, sName] = varName.trim().toLowerCase().split('_');
    const varCamelCase =
      fName + sName.replace(sName[0], sName[0].toUpperCase());
    console.log(`${varCamelCase.padEnd(20, '.')}${'✅'.repeat(index + 1)}`);
  }
});


*/

///////////////////////////////////////
// String Methods Practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
console.log(flights);

const flightsSep = flights.split('+');
flightsSep.forEach(flight => {
  const [message, from, to, time] = flight.split(';');
  const messageF = message.replaceAll('_', ' ').trim();
  const fromF = from.slice(0, 3).toUpperCase();
  const toF = to.slice(0, 3).toUpperCase();
  const timeF = time.replace(':', 'h');
  console.log(
    `${messageF} from ${fromF} to ${toF} (${timeF})`.padStart(50, ' ')
  );
});

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
