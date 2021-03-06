'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-01-03T17:01:17.194Z',
    '2021-01-05T23:36:17.929Z',
    '2021-01-08T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
const formatMovementDate = function (date, locale) {
  const calcDaysPass = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
  const daysPassed = calcDaysPass(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formattedMov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  // labelBalance.textContent = `${acc.balance.toFixed(2)} ???`;
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);

  // const currDate = new Date();
  // labelDate.textContent = `${currDate.getDate()}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  // labelSumIn.textContent = `${incomes.toFixed(2)} ???`;
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  // labelSumOut.textContent = `${Math.abs(outcome.toFixed(2))} ???`;
  labelSumOut.textContent = formatCur(outcome, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  // labelSumInterest.textContent = `${Math.abs(interest.toFixed(2))} ???`;
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUserName = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name.slice(0, 1))
      .join('');
  });
};

createUserName(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);
  // Display Balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = () => {
    const min = String(Math.trunc(timer / 60)).padStart(2, '0');
    const sec = String(timer % 60).padStart(2, '0');
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out the user
    if (timer === 0) {
      clearInterval(timerInt);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.cssText = 'opacity:0';
    }
    // Decrease 1 second
    timer--;
  };
  // Set time to 5 minuts
  let timer = 120;
  // Call the timer every second
  tick();
  const timerInt = setInterval(tick, 1000);
  return timerInt;
};
///////////////////////////////////////////////
// Event handlers
let currentAccount, timerInt;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.cssText = 'opacity:1';

btnLogin.addEventListener('click', function (event) {
  // Prevent form from submitting
  event.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and messsage
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.cssText = 'opacity:1';

    // Create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();

    // Timer
    if (timerInt) clearInterval(timerInt);
    timerInt = startLogOutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  // check if transfer amount is positive , check enough balance to transfer
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timerInt);
    timerInt = startLogOutTimer();
  }
});
btnLoan.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add transfer date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timerInt);
      timerInt = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});
btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  const username = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);
  if (currentAccount.username === username && currentAccount.pin === pin) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.cssText = 'opacity:0';
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (event) {
  event.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
// Converting and Checking Numbers 166
console.log(0.1 + 0.2);
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30', 10));
console.log(Number.parseFloat('2.5rem', 10));

// NaN . Ckeck is NaN value
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20px'));
console.log(Number.isNaN(20 / 0));
// isFinite. Check if number is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20px'));
console.log(Number.isFinite(20 / 0));
// Check inInteger
console.log(Number.isInteger(20));
console.log(Number.isInteger('20'));
console.log(Number.isInteger('20px'));
console.log(Number.isInteger(20 / 2));
*/

/*
// Math and Rounding 167
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(25 ** (1 / 3));
console.log(Math.max(1, 3, 4, 5, 20));
console.log(Math.max(1, 3, 4, '5', 20));
console.log(Math.min(1, 3, 4, 5, 20));
console.log(Math.PI);
console.log(Math.PI * Number.parseFloat('10px') ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
Math.floor(Math.random() * (max - min + 1)) + min;

for (let i = 0; i < 100; i++) {
  console.log(randomInt(5, 10));
}

const x = -2.6;
console.log(Math.trunc(x));
console.log(Math.floor(x));
console.log(Math.round(x));
console.log(Math.ceil(x));


// Rounding decimals
console.log((2.6).toFixed(0));
console.log((2.6).toFixed(1));
console.log(+(2.6).toFixed(2));
*/
/*
// The Remainder Operator 168
console.log(5 % 2); //5 = 2 * 2 + 1
console.log(5 / 2); //5 = 2 * 2 + 1
console.log(8 % 3); //8 = 2 * 3 + 2
console.log(8 / 3); //8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);
console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(5));


labelWelcome.addEventListener('click', function (event) {
  event.preventDefault();
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    row.style.cssText =
      i % 2 === 0 ? 'background-color: cyan;' : 'background-color: lightgreen;';
  });
});
*/

/*
// Working with BigInt 169
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(4546464878978789798445464654564545646546548787876464n);
console.log(BigInt(454646487897));

// Operations
console.log(10000n + 10000n);
console.log(100045454646464421213213213454654640n * 100000000000000n);

const huge = 2054545467987465467743143131354564n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 10);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == 20);

// String concat ex
console.log(huge + 'is really big!!!');
// console.log(Math.sqrt(16n));

// Divisions

console.log(10n / 3n); //3n
console.log(10 / 3); //3.333333
*/

// Creating Dates 170
/*
const now = new Date();
console.log(now);

console.log(new Date('Wed Jan 06 2021 19:49:46'));
console.log(new Date('December 24, 2015'));

console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future); // Thu Nov 19 2037 15:23:00 GMT-0500 (Eastern Standard Time)
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); // time stampt
console.log(Date.now());

future.setFullYear(2040);
console.log(future);
*/

// Adding Dates to "Bankist" App 171

/*
// 172. Operations With Dates

const future = new Date(2021, 1, 14);
const now = new Date(2021, 1, 9);

const calcDaysPass = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPass(now, future);

console.log(days1);
*/

// 173. Internationalizing Dates (Intl)

/*
// 174. Internationalizing Numbers (Intl)

const num = 3884764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'CAD',
  useGrouping: false,
};

console.log('US: ', new Intl.NumberFormat('en-US').format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE').format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
*/

/*
// 175. Timers: setTimeout and setInterval
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);

console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
setInterval(() => {
  const now = new Date();
  console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds(0)}`);
}, 1000);
*/

// 176. Implementing a Countdown Timer

// let counter = 100;

// setInterval(() => {
//   console.log(counter--);
// }, 1000);
