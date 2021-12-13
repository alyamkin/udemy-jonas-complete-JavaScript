'use strict';

/**
 * Activating strict mode
 */
/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriverLicence = true;

if (hasDriversLicence) console.log(`I can drive :D`);

const interface = 'Audio';
*/

/**
 * Functions
 */
/*
function logger() {
  console.log(`My name is Jonas`);
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/

/**
 * Function Declaration vs. Expression
 */
/*
// Function declaration
function calcAge1(birthYear) {
  return 2021 - birthYear;
}

const age1 = calcAge1(1985);

// Function expression
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
}

const age2 = calcAge2(1985);

console.log(age1, age2);
*/

/**
 * Arrow Function
 */
/*
// Arrow function
const calcAge3 = birthYear => 2021 - birthYear;

const age3 = calcAge3(1985);
console.log(age3);

const yearsUntilRetirenment = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirenment = 65 - age;
  return `${firstName} retires in ${retirenment} years`;
}

console.log(yearsUntilRetirenment(1985, 'Andrey'));
console.log(yearsUntilRetirenment(1980, 'Bob'));
*/

/**
 * Functions Calling Other Functions
 */

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePices = cutFruitPieces(apples);
  const orangePices = cutFruitPieces(oranges);

  const juice = `Juice with ${applePices} pieces of apple and ${orangePices} pices of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/**
 * Reviewing Functions
 */
/*
const calcAge = function (birthYear) {
  return 2021 - birthYear;
}

const yearsUntilRetirenment = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirenment = 65 - age;

  if (retirenment > 0) {
    return retirenment;
  } else {
    return -1;
  }
}

console.log(yearsUntilRetirenment(1985, 'Andrey'));
console.log(yearsUntilRetirenment(1950, 'Mike'));
*/

/**
 * Introduction to Arrays
 */
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years2 = new Array(1991, 1994, 1984, 2021);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'jay';
console.log(friends);

const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, friends];
console.log(jonas);

// Exercise

const calcAge = function (birthYear) {
  return 2021 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
console.log(ages);
*/

/**
 * Basic Array Operations (Methods)
 */
/*
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay'); // Return a new length
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop(); // Retern popped element
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
*/

/**
 * Introduction to Objects
 * Dot vs. Bracket Notation
 */
/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
}

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['firstName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends')
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn])
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtmann';
console.log(jonas);
*/

/**
 * Object Methods
 */
/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he ${this.hasDriversLicense ? "has driving license" : "doesn't have driving license"}`;
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());

*/

/**
 * Iteration: The for Loop
 */
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetiton ${rep}`);
}
*/

/**
 * Looping Arrays, Breaking and Continuing
 */
/*
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  // types[i] = typeof jonas[i];

  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1968, 2020];

const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

//continue and break

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;
  console.log(jonas[i], typeof jonas[i]);
}

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') break;
  console.log(jonas[i], typeof jonas[i]);
}
*/

/**
 * Looping Backwards and Loops in Loops
 */
/*
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

for (let i = jonas.length; i >= 0; i--) {
  console.log(jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------------Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
  }
}
*/

/**
 * The while Loop
 */
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetiton ${rep}`);
}
*/
/*
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetiton ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end`);
}
*/