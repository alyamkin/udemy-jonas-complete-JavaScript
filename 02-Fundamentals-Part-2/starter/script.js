"use strict";

/*
//Activating Strict Mode 32

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;
// const if = 23;
*/

/*
// Functions 33

function logger() {
  console.log(`My name is Andrey`);
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(5, 5);
console.log(appleOrangeJuice);

const num = Number("23");
console.log(num);

// Assignment functions

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

let canada = describeCountry("Canada", 50, "Ottawa");
let usa = describeCountry("USA", 300, "New Yourk");
let russia = describeCountry("Russia", 150, "Moskow");
console.log(canada);
console.log(usa);
console.log(russia);
*/

/*
// Function Declaration and function expression 34
// Function declaration
const age1 = calcAge1(1985);
console.log(age1);

function calcAge1(birthYear) {
  return 2020 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) {
  return 2020 - birthYear;
};

const age2 = calcAge2(1990);
console.log(age2);


// Assignment function declaration and expression
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
let chinaPerc = percentageOfWorld1(1441);
let russianPerc = percentageOfWorld2(150);
console.log(chinaPerc.toFixed(2));
console.log(russianPerc);
*/

/*
//Arrow function 35

const calcAge3 = (birthYear) => 2020 - birthYear;
const age3 = calcAge3(1990);
console.log(age3);

const yearsUntilRetirenment = (birthYear, firstName) => {
  const age = 2020 - birthYear;
  const retirenment = 65 - age;

  // return retirenment;
  return `${firstName} retires in ${retirenment} years`;
};

console.log(yearsUntilRetirenment(1985, "Andrey"));


// Assignment
const percentageOfWorld3 = (population) => (population / 7900) * 100;
let russianPerc = percentageOfWorld3(150);
console.log(russianPerc.toFixed(2));

*/

/*
// Function Calling other functions 36
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPices(apples);
  const orangePieces = cutFruitPices(oranges);

  const juice = `Juice with ${applePieces} pices ofapples and ${orangePieces} pices of oranges.`;
  return juice;
}

function cutFruitPices(fruit) {
  return fruit * 4;
}

console.log(fruitProcessor(2, 3));


// Assignment function calling other functions
const percentageOfWorld = (population) => (population / 7900) * 100;

let describePopulation = (country, population) => {
  let percPopulation = percentageOfWorld(population);

  return `${country} has ${population} million people, which is about ${percPopulation.toFixed(
    2
  )}% of the world.`;
};

console.log(describePopulation("Canada", 50));
*/

/*

// Reviewing functions 37
const calcAge = function (birthYear) {
  return 2020 - birthYear;
};
const yearsUntilRetirenment = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirenment = 65 - age;

  if (retirenment > 0) {
    console.log(`${firstName} retires in ${retirenment} years`);
    return retirenment;
  } else {
    console.log(`${firstName} already retired`);
    return -1;
  }

  // return `${firstName} retires in ${retirenment} years`;
};

console.log(yearsUntilRetirenment(1985, "Andrey"));
console.log(yearsUntilRetirenment(1950, "Mike"));
*/

/*
// Coding challenge 38

function calcAverage(...scores) {
  let sum = scores.reduce((acc, cur) => acc + cur);
  return sum / scores.length;
}

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No winner`);
  }
}

let dolphinsScoreAvg = calcAverage(44, 23, 71);
let koalasScoreAvg = calcAverage(65, 54, 49);

checkWinner(dolphinsScoreAvg, koalasScoreAvg);

let dolphinsScoreAvg2 = calcAverage(85, 54, 41);
let koalasScoreAvg2 = calcAverage(23, 34, 27);

checkWinner(dolphinsScoreAvg2, koalasScoreAvg2);
*/

/*
// Introduction to array 39

const friend1 = "Mike";
const friend2 = "Tom";
const friend3 = "Bill";

const friends = ["Mike", "Tom", "Bill"];
console.log(friends);

// const years = new Array(1991, 1985, 2000);
// console.log(years);

console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jane";
console.log(friends);

const firstName = "Andrey";
const andrey = [firstName, "Lyamkin", 2020 - 1985, friends];
console.log(andrey);

//Exercise
const calcAge = function (birthYear) {
  return 2020 - birthYear;
};

const years = [2020, 1985, 1983, 2005];

const ages = [calcAge(years[0]), calcAge(years[1])];

console.log(ages);

// Assignment arrays
const percentageOfWorld = (population) => (population / 7900) * 100;
const populations = [50, 150, 300, 6];

console.log(populations.length === 4);

const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];

console.log(percentages);

*/

/*
// Basic array operators 40

const friends = ["Mike", "Tom", "Bill"];

// Add elements
const newLength = friends.push("Jake");
console.log(friends, newLength);

friends.unshift("John");
console.log(friends);

// remove elements

friends.pop(); //last
console.log(friends);

friends.shift(); //firsr
console.log(friends);

console.log(friends.indexOf("Tom"));

console.log(friends.includes("Tom"));

if (friends.includes("Tom")) console.log(`You have a friend Tom`);

// Assignment arrays methods

const neighbours = ["China", "Mongolia", "Finland"];
neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany")) {
  console.log(`Probably not a central European country :D`);
}

const indexChina = neighbours.indexOf("China");
neighbours[indexChina] = "India";
console.log(neighbours);
*/

/*
// Coding challenge2 41

let tipCalc = function(bill) {
  return (bill > 50 && bill < 300) ? bill * 0.15 : bill * 0.2; 
}

const bills = [125,555,44];
const tips = [];
const total = [];

bills.forEach(bill =>  {
  const tip = tipCalc(bill);
  tips.push(tip);
  total.push(tip + bill);
});

console.log(bills);
console.log(tips);
console.log(total);

*/

/*
// Introduction to objects 42

const andrey = {
  firstName: 'Andrey',
  lastName: 'Lyamkin',
  age: 2020 - 1985,
  job: 'programmer',
  friends: ['Tom','Jim','John']
}

//Assignment objects

const myCountry = {
  country: 'Canada',
  capital: 'Ottawa',
  language: 'English',
  population: 50,
  neighbours: ['USA']
}

*/

// Dot vs bracket notation 43
/*
const andrey = {
  firstName: 'Andrey',
  lastName: 'Lyamkin',
  age: 2020 - 1985,
  job: 'programmer',
  friends: ['Tom','Jim','John']
}

console.log(andrey);
console.log(andrey.lastName);
console.log(andrey['age']);

const nameKey = 'Name';
console.log(andrey['first' + nameKey]);
console.log(andrey['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Andrey? Choose between firstName, lastName, age, job and friends');

if(andrey[interestedIn]) {
  console.log(andrey[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

andrey.location = 'Canada';
andrey['email'] = 'test@gmail.com';

console.log(andrey);

// Challenge

console.log(`${andrey.firstName} has ${andrey.friends.length}, and his best friend is called ${andrey.friends[0]} `)



// Assignment Dot vs bracket notation

const myCountry = {
  country: 'Canada',
  capital: 'Ottawa',
  language: 'English',
  population: 50,
  neighbours: ['USA']
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry['population'] += 2;

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

*/

/*
// Object methods 44

const andrey = {
  firstName: "Andrey",
  lastName: "Lyamkin",
  birthYear: 1985,
  job: "programmer",
  friends: ["Tom", "Jim", "John"],
  hasDriversLicense: true,

  // calcAge: function(birthYear) {
  //   return 2020 - birthYear;
  // }

  // calcAge: function () {
  //   console.log(this);
  //   return 2020 - this.birthYear;
  // },

  calcAge: function () {

    this.age = 2020 - this.birthYear;
    return this.age;
  },

  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
  }
};

console.log(andrey.calcAge());
console.log(andrey.age);
// console.log(andrey['calcAge']());


// Challenge
console.log(andrey.getSummary());


// Assignment object methods

const myCountry = {
  country: 'Canada',
  capital: 'Ottawa',
  language: 'English',
  population: 50,
  neighbours: ['USA'],

  checkIsland: function() {
    this.isIsland  = this.neighbours.length > 0 ? false : true
  },

  describe: function() {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
  },
}

console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry.isIsland);

*/

/*
// Coding challenge3 45

const markObj = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBmi: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}
const johnObj = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBmi: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

if(markObj.calcBmi() > johnObj.calcBmi()) {
  console.log(`${markObj.fullName} BMI (${markObj.bmi}) is higher than ${johnObj.fullName} (${johnObj.bmi})`);
} else if(markObj.bmi < johnObj.bmi) {
  console.log(`${markObj.fullName} BMI (${markObj.bmi}) is lower than ${johnObj.fullName} (${johnObj.bmi})`);
} else {
  console.log(`${markObj.fullName} BMI (${markObj.bmi}) is equals ${johnObj.fullName} (${johnObj.bmi})`);
}
*/

/*
// Iteration: The for Loop 46

for(let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep}`);
}

// Assignment the for loop 
for(let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}
*/

/*
// Looping Arrays, Breaking and Continue 47

const andrey = ['Andrey', 'Lyamkin', 2020 - 1985,'programmer', ['Tom', 'Bill','Jake'], true];

const types =[];
for(let i = 0; i< andrey.length; i++) {
  console.log(andrey[i], typeof andrey[i]);

  // types[i] = typeof andrey[i];
  types.push(typeof andrey[i]);
}

console.log(types);

const years = [1991,2007,1969,2020];
const ages = [];

for(let i =0; i < years.length; i++) {
  ages.push(2020 - years[i]);
}
console.log(ages);

// continue
for(let i = 0; i< andrey.length; i++) {

  if(typeof andrey[i] !== 'string') continue;
  console.log(andrey[i]);
}

// break
for(let i = 0; i< andrey.length; i++) {

  if(typeof andrey[i] === 'number') break;
  console.log(andrey[i]);
}


// Assignment Looping Arrays, Breaking and Continue

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [50, 150, 300, 6];
const percentages2 = [];
populations.forEach(population => {
  percentages2.push(percentageOfWorld1(population));
})

console.log(percentages2);

*/

// Looping backwards and Loops in Loop 48
/*
const andrey = ['Andrey', 'Lyamkin', 2020 - 1985,'programmer', ['Tom', 'Bill','Jake'], true];

for(let i = andrey.length; i >= 0; i-- ) {
  console.log(andrey[i]);
}

for(let exercise = 1; exercise <= 3; exercise++) {
  console.log(`------------ Starting exercise ${exercise}`);
  for(let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}



// Assignment backwards looping

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];

for(let i = 0; i < listOfNeighbours.length; i++) {
  for(let j = 0; j< listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}
*/

/*
// The while loop 49

let rep = 1;
while(rep <=10) {
  console.log(`Lifting weight repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !=6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if(dice ===6) console.log(`Loop is about to end...`);
}


// Assignment while loop

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [50, 150, 300, 6];
const percentages2 = [];

let index = 0;
while(index < populations.length) {
  percentages2.push(percentageOfWorld1(populations[index]));
  index++;
}

console.log(percentages2);

*/

/*
// Coding Challenge4 50

let tipCalc = function(bill) {
  return (bill > 50 && bill < 300) ? bill * 0.15 : bill * 0.2; 
}
let calcAverage = function(arr) {
  let sum = arr.reduce((acc, num) => acc+num,0);
  return sum / arr.length; 
}

const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const total = [];

bills.forEach(bill =>  {
  const tip = tipCalc(bill);
  tips.push(tip);
  total.push(tip + bill);
});

console.log(bills);
console.log(tips);
console.log(total);
console.log(calcAverage(total));
*/