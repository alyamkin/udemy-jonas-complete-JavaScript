'use strict';

/*
function calcAge(birthYear) {
  const age = 2020 - birthYear;
  function printAge() {
    let output = `${firstName} You are ${age}, born in ${birthYear} `;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      // Creating new variable with the same name
      const firstName = 'Tom';
      var millenial = true;
      const str = `Oh, you are a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      // Redifine variable
      output = `New output`;
    }
    console.log(millenial);
    console.log(output);
    // console.log(add(2, 3)); // not allowed in the strict mode
  }

  printAge();
  return age;
}

const firstName = 'Andrey';
calcAge(1985);
*/
/*
// TDZ practice 95
console.log(me);
console.log(job);
console.log(year);
var me = 'Andrey';
let job = 'programmer';
const year = 1985;


console.log(addDecl(2, 3));
// console.log(addExp(2, 3));
console.log(addArrow(2, 3));
function addDecl(a, b) {
  return a + b;
}
const addExp = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;


//Example
let numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted`);
}
if (!numProducts) deleteShoppingCart();

var x = 1;
let y = 2;
const z = 3;

*/

// This keyword 96

/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(`Inside regular function ${this}`);
  return 2020 - birthYear;
};

calcAge(1985);

const calcAgeArrow = birthYear => {
  console.log(`Inside regular function ${this}`);
  return 2020 - birthYear;
};

calcAgeArrow(1985);

const andrey = {
  year: 1985,
  calcAge: function () {
    console.log(2020 - this.year);
  },
};

andrey.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = andrey.calcAge;
matilda.calcAge();

const f = andrey.calcAge;

f();

*/

/*
// Regular function vs arrow function 97

var firstName = 'Tom';
const andrey = {
  firstName: 'Andrey',
  year: 1985,
  calcAge: function () {
    console.log(2020 - this.year);

    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(`Hey, ${this.firstName}`);
  },
};

andrey.calcAge();

const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExp(2, 3);
const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 2);

*/

/*
//99. Primitives vs. Objects (Primitive vs. Reference Types) 99

let age = 34;
let oldAge = age;
age = 35;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Andrey',
  age: 35,
};

const friend = me;

friend.age = 40;

console.log(friend);
console.log(me);
*/

// Primitives vs. Objects in Practice 100
// Primitive
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

// Reference
const jessika = {
  firstName: 'Jessika',
  lastName: 'Williams',
  age: 27,
};

const marriedJessika = jessika;
marriedJessika.lastName = 'Devis';

console.log(jessika, marriedJessika);

// Copying object
const jessika2 = {
  firstName: 'Jessika',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessika2Copy = Object.assign({}, jessika2);
jessika2Copy.lastName = 'Davis';
console.log(jessika2, jessika2Copy);
jessika2Copy.family.push('Mary', 'John');
console.log(jessika2, jessika2Copy);
