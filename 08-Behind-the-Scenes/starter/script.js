'use strict';

/**
 * Scoping in Practice
 */
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = `NEW OUTPUT`;
    }

    // console.log(str);
    // console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

/**
 * Hoisting in practice
 */
/*
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Exampple
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;
*/

/**
 * Sum 2 numbers
 */
/*
const sumNumStr = (numStr1, numStr2) => {
  const maxLengthNumber = numStr1.length >= numStr2.length ? numStr1 : numStr2;
  let numStr1Recalc = Number(numStr1);
  let numStr2Recalc = Number(numStr2);
  let num1 = 0;
  let num2 = 0;
  let reminder = 0;
  let sumTwoNumInter = 0;
  let sumTwoNumInterArr = [];
  const sumTwoNumResult = [];

  for (let i = 1; i <= maxLengthNumber.length; i++) {
    // Get reminder of the number 256 -> 6
    num1 = numStr1Recalc % 10;
    num2 = numStr2Recalc % 10;
    // Recalculate a new number 256 -> 25
    numStr1Recalc = Math.floor(numStr1Recalc / 10);
    numStr2Recalc = Math.floor(numStr2Recalc / 10);

    // Sum number with reminder
    sumTwoNumInter = num1 + num2 + reminder;
    // Reset reminder for the next iteration
    reminder = 0;
    // Check if sum > 9 then update final array . Ex 13 -> reminder = 1 and final result in the array = 3
    if (sumTwoNumInter > 9) {
      // Ex: 15 -> add 5 to the funal array
      sumTwoNumResult.push(Number(sumTwoNumInter % 10));
      // Update reminder. The max might be 18, so add reminder 1 for any cases > 9
      reminder = 1;
    } else {
      sumTwoNumResult.push(sumTwoNumInter);
    }
  }

  // For special cases. Ex: 99 + 99. We have only 2 iteration. In that case we will missing leading 1.
  if (reminder) {
    sumTwoNumResult.push(reminder);
  }

  return sumTwoNumResult.reverse().join('');
};

console.log(sumNumStr('199', '99'));
*/
/**
 * The this Keyword in Practice
 */
/*
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

// calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

// calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;

matilda.calcAge();

const f = jonas.calcAge;
*/

/**
 * Regular vs Arrow functions
 */
/*
var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    const isMillenial = () => {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 3);
*/

/**
 * Primitives vs. Objects
 */
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend: ', friend.age);
console.log('Me: ', me.age);
*/

/**
 * Primitives vs. Objects in Practice
 */
/*
// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference type
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Marry');
jessicaCopy.family.push('John');
console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
*/
