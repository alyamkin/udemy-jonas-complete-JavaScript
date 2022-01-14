'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov >= 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov} €</div>
    </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = account => {
  account.balance = account.movements.reduce((acc, cur) => (acc += cur), 0);
  labelBalance.textContent = `${account.balance} €`;
};

const calcDisplaySummary = account => {
  const movements = account.movements;
  const interestRate = account.interestRate;

  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${Math.abs(interest)} €`;
};

const createUsernames = accounts =>
  accounts.forEach(
    account =>
      (account.username = account.owner
        .toLowerCase()
        .split(' ')
        .map(name => name.at(0))
        .join(''))
  );

createUsernames(accounts);

const updateUI = account => {
  // Display movements
  displayMovements(account.movements);

  // Display balance
  calcDisplayBalance(currentAccount);

  // Display summary
  calcDisplaySummary(currentAccount);
};

// Event handlers
let currentAccount;

btnLogin.addEventListener('click', e => {
  e.preventDefault();
  const userName = inputLoginUsername.value;
  const userPin = Number(inputLoginPin.value);
  currentAccount = accounts.find(account => account.username === userName);

  if (currentAccount?.pin === userPin) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount?.owner.split(' ')[0]
    }`;
    containerApp.classList.add('app--display');

    // Clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  // Get data for the current account
  const trasferToUser = inputTransferTo.value;
  const transferAmount = Number(inputTransferAmount.value);

  // Get transfer to Account
  const receiverAccount = accounts.find(
    account => account.username === trasferToUser
  );

  // Clear transfer input fields
  inputTransferAmount.value = inputTransferTo.value = '';

  // Check if current account has enought money to transfer, and not the same account
  if (
    transferAmount > 0 &&
    receiverAccount &&
    transferAmount <= currentAccount.balance &&
    currentAccount.username !== receiverAccount.username
  ) {
    // Withdraw amount for current amount
    currentAccount?.movements.push(-transferAmount);

    // Deposit the same amount other user
    receiverAccount?.movements.push(transferAmount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const loanAmount = Number(inputLoanAmount.value);

  if (
    loanAmount > 0 &&
    urrentAccount.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    currentAccount.movements.push(loanAmount);

    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', e => {
  e.preventDefault();

  const userName = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);

  if (currentAccount?.username === userName && currentAccount?.pin === pin) {
    const index = accounts.findIndex(account => account === currentAccount);

    // delete account
    accounts.splice(index, 1);

    // hide UI
    containerApp.classList.remove('app--display');

    // clear inputs
    inputCloseUsername.value = inputClosePin.value = '';
  }
});

let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  sorted = sorted ? false : true;
  displayMovements(currentAccount.movements, sort);
});
//////////////////////////////////////////////
///
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/**
 * Coding challenge 4
 */

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:


GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => (dog.recommendedFood = dog.weight ** 0.75 * 28));
console.log(dogs);

// 2.
const eatsTooMuch = dog => dog.curFood > dog.recommendedFood * 1.1;
const eatsTooLittl = dog => dog.curFood < dog.recommendedFood * 0.9;
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
const isEatingTooLittleMuch = dog =>
  eatsTooLittl(dog) ? 'too liitle' : eatsTooMuch(dog) ? 'too much' : 'balanced';

console.log(`Sarah's dog eating ${isEatingTooLittleMuch(sarahDog)}`);

// 3.
const ownersOfDogsEatTooMuch = dogs
  .filter(dog => eatsTooMuch(dog))
  .map(dog => dog.owners)
  .flat();
const ownersOfDogsEatTooLittle = dogs
  .filter(dog => eatsTooLittl(dog))
  .map(dog => dog.owners)
  .flat();

console.log(ownersOfDogsEatTooMuch);
console.log(ownersOfDogsEatTooLittle);

// 4.
console.log(`${ownersOfDogsEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersOfDogsEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
dogs.forEach(
  dog =>
    dog.curFood === dog.recommendedFood &&
    console.log(
      `The dog of ${dog.owners.join(' and ')} eats recommended amount of food`
    )
);

// 6.
dogs.forEach(
  dog =>
    !eatsTooMuch(dog) &&
    !eatsTooLittl(dog) &&
    console.log(
      `The dog of ${dog.owners.join(' and ')} eats OKAY amount of food`
    )
);

// 7.

const dogsEatsOkay = dogs.filter(
  dog => !eatsTooMuch(dog) && !eatsTooLittl(dog)
);

console.log(dogsEatsOkay);

// 8.
const dogsSortedByRecomAcs = Array.from(dogs).sort(
  (obj1, obj2) => obj1.recommendedFood - obj2.recommendedFood
);
console.log(dogsSortedByRecomAcs);

/**
 * Array Methods Practice
 */
/*
// 1. Total deposits
const totalDeposits = accounts
  .map(account => account.movements)
  .flat()
  .filter(mov => mov > 0)
  .reduce((acc, current) => acc + current, 0);

console.log(totalDeposits);

// 2. How many deposits atlist 1000
const counterDeposits1000 = accounts
  .flatMap(account => account.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(counterDeposits1000);

// 3. Create object with total withdrawal and deposits
const sums = accounts
  .flatMap(account => account.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { withdrawals: 0, deposits: 0 }
  );

console.log(sums);

// 4. Create function to convert any string to the title case
// this is a nice title -> This Is a Nice Title
const convertTitleCase = title => {
  const capitalize = str => str.replace(str[0], str[0].toUpperCase());

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return titleCase;
};
console.log(convertTitleCase('this is a nice title'));
('');
*/
/**
 * More Ways of Creating and Filling Arrays
 */
/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8));

// Empty array + fill method
const x = new Array(7);
console.log(x);
// x.fill(1);
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);

console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});
*/
// const arrOfMovements = Array.from({ length: movements2.length }, movements2);
// console.log(arrOfMovements);
/**
 * Sorting Arrays
 */
/*
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
console.log(movements.sort());

console.log(movements.sort((a, b) => a - b));
*/
/**
 * flat and flatMap
 */
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const overalBalance = accounts
  .map(account => account.movements)
  .flat()
  .reduce((acc, mov) => acc + mov);

console.log(overalBalance);
*/
/**
 * some and every
 */
/*
// EQUALITY
console.log(movements.includes(-130));

// CONDITION: SOME
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// CONDITION: EVERY
const allDeposits = movements.every(mov => mov > 0);
console.log(allDeposits);
*/
/**
 * The find Method
 */
/*
const firstWithdrawal = movements.find(mov => mov < 0);

console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/
/*
const findAccount = (ownerName, accounts) => {
  for (const account of accounts) {
    if (account.owner === ownerName) {
      return account;
    }
  }
};
console.log(findAccount('Jessica Davis', accounts));
*/
/**
 * Coding Challenge 3
 */
/*

Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = ages => {
  const average = ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  return average;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/
/**
 * The Magic of Chaining Methods
 */
/*
const eurToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);

    return mov * eurToUsd;
  })
  // .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
*/
/**
 * Coding Challenge 2
 */
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = ages => {
  let counter = 0;
  const humanAges = ages.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );

  const adults = humanAges.filter(humanAge => humanAge >= 18);

  const average = adults.reduce(
    (acc, cur, i, arr) => acc + cur / arr.length,
    0
  );

  return average;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/
/**
 * The reduce Method
 */
/*
console.log(movements);

// const balance = movements.reduce((acc, cur, i, arr) => {
//   console.log(`Iteration ${i} : ${acc}`);
//   return (acc += cur);
// }, 0);

const balance = movements.reduce((acc, cur) => (acc += cur));
console.log(balance);

// Maximum value
const maxMovement = account1.movements.reduce(
  (max, cur) => (cur > max ? cur : max),
  0
);
console.log(maxMovement);
*/

/**
 *  The filter Method
 */
/*
const deposits = movements.filter(mov => mov > 0);

console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/

/**
 * The map Method
 */
/*
const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}

console.log(movementsUSDfor);

const movementsUSDarrow = movements.map(mov => mov * eurToUsd);
console.log(movementsUSDarrow);

const movementsDescriptions = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1} You ${mov > 0 ? 'deposited' : 'withdrew'}  ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
*/
/**
 * Coding Challenge #1
 */

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaShallow = dogsJulia.slice(1, -1);
  const dogs = [...dogsJuliaShallow, ...dogsKate];

  dogs.forEach(function (dog, index) {
    if (dog >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${dog} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy 🐶"`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/
/**
 * forEach With Maps and Sets
 */
/*
// MAP
currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

// SET
const currenciesUnique = new Set([
  'potatoes',
  'tomatoes',
  'cheese',
  'tomatoes',
]);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});
*/
/**
 * Looping Arrays: forEach
 */
/*
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1} You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`);
  }
});
*/
/**
 * The new at Method
 */
/*
const arr = [23, 11, 64];
console.log(arr.at(0));

// getting the last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

console.log(arr.at(-1));

console.log('Andrey'.at(0));
*/
/**
 * Simple Array Methods
 */
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
console.log(arr.splice(2));
arr.splice(-1);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);

// JOIN
console.log(letters.join(' - '));
*/
