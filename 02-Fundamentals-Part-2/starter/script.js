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
