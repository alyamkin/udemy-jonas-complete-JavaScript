'use strict';

/*
// Default Parameters 126
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   numPassengers = numPassengers ?? 1;
  //   price = price ?? 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH124', 2, 800);
createBooking('LH124', 1);
createBooking('LH124', 2);
createBooking('LH124', undefined, 500);
*/

/*
// How Passing Arguments Works: Value vs. Reference 127

const flight = 'LH234';
const andrey = {
  name: 'Andrey Lyamkin',
  passport: 23234355,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 23234355) {
    alert('Cheked in');
  } else {
    alert('Wrong passport');
  }
};

console.log(flight);
console.log(andrey);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000);
};

newPassport(andrey);
checkIn(flight, andrey);
*/

/*
// First-Class and Higher-Order Functions 128
//  Functions Accepting Callback Functions 129

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...rest] = str.split(' ');
  return [first.toUpperCase(), ...rest].join(' ');
};

// High order function
const transformer = function (str, fn) {
  console.log(str);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

const high5 = function () {
  console.log('🖐');
};

document.body.addEventListener('click', high5);

['Andrey', 'Tom'].forEach(high5);


// Practice
const calcSum = function (...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
};
const calculations = function (fn, ...numbers) {
  console.log(`The average is: ${fn(...numbers) / numbers.length}`);
};

const numbers = [1, 2, 3, 4, 5];
calculations(calcSum, ...numbers);
*/

/*
// Functions Returning Functions 130

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greet2 = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Andrey');

greet('Hello')('Bob');

greet2('Hola!')('Tom');
*/

/*
// The call and apply Methods 131

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNumber}`,
      name: `${name}`,
    });
  },
};

// Call
lufthansa.book(239, 'Andrey Lyamkin');
lufthansa.book(565, 'John Smith');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, 'Sara Smith');
book.call(lufthansa, 239, 'Yana Love');

console.log(eurowings.bookings);
console.log(lufthansa.bookings);

// Apply

const fligthData = [583, 'Vladimir Dostoevskiy'];
book.apply(eurowings, fligthData);
book.call(lufthansa, ...fligthData);
console.log(eurowings.bookings);
console.log(lufthansa.bookings);
*/
// The bind Method

/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNumber}`,
      name: `${name}`,
    });
  },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
const lhBookings = lufthansa.bookings;
const euBookings = eurowings.bookings;
// book.call(lufthansa, ...['333', 'Andrey Lyamkin']);
// book.call(eurowings, ...['335', 'Andrey Lyamkin']);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Steven Williams');
bookEW23('Andrey Lyamkin');

console.log(lhBookings);
console.log(euBookings);


// with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  //   console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

// Challenge

const addTaxGeneric = rate => value => value + value * rate;

const addGST = addTaxGeneric(0.18);
console.log(addGST(100));
*/
/*
// Coding Challenge #1 133

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let optionsStr = this.options.join('\n');
    const optionAnsw = Number(
      prompt(`${this.question}\n${optionsStr}\n(Write option number)`)
    );
    // Checking valid input
    if (
      optionAnsw !== NaN &&
      optionAnsw >= 0 &&
      optionAnsw < this.answers.length
    ) {
      this.answers[optionAnsw]++;
    } else {
      alert(`Wrong input. Try again`);
    }
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.bind(null, '1,2,3')();
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
*/

/*
// Immediately Invoked Function Expressions (IIFE) 134

const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);
(() => console.log('This will never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

console.log(notPrivate);
*/

/*
// Closures 135

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);
*/

/*
// More Closure Examples 136

// Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
*/

// Coding Challenge #2 137
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
