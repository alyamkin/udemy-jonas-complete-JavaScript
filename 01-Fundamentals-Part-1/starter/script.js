/*
// Values and variables 10
let js = "amazing";
console.log("Andrey");
console.log(23);
let firstName = "Andrey";
console.log(firstName);
console.log(firstName);
console.log(firstName);

const PI = 3.14;

let myFirstJob = "Programmer";
let mySecondJob = "Teacher";

console.log(myFirstJob);


//  Assignment Values and variables


let continent = "North America";
let country = "Canada";
let population = "50 millions";
console.log(`${continent} , ${country}, ${population}`);
*/

/*
//Data types 12
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 10);
console.log(typeof "Andrey");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

//  Assignment Data types

let continent = "North America";
let country = "Canada";
let population = "50 millions";
let isIsland = false;
let language;
console.log(
  `${typeof continent} , ${typeof country}, ${typeof population} , ${typeof isIsland} , ${typeof language}`
);
*/

/*
// let, const, var 13

let age = 30;
age = 31;

const birthYear = 1985;
// birthYear = 1991; not allowed

// const job; not allowed

var job = "programmer";
job = "teacher";

// lastName = "Lyamkin"; bad practice

//  Assignment let, const, var

const continent = "North America";
const country = "Canada";
let population = "50 millions";
const isIsland = false;
const language = "English";
console.log(
  `${typeof continent} , ${typeof country}, ${typeof population} , ${typeof isIsland} , ${typeof language}`
);
*/

/*
// Operators 14
//Math operators
const now = 2020;
const ageAndrey = now - 1985;
const ageTom = now - 1991;
console.log(ageAndrey, ageTom);
console.log(ageAndrey * 2, ageAndrey / 2, 2 ** 3);

const firstName = "Andrey";
const lastName = "Lyamkin";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

//Comparison operators

console.log(ageAndrey > ageTom); // >, < , >=, <=
console.log(ageTom >= 18);

const isFullAge = ageTom >= 18;

console.log(now - 1985 >= now - 1991);

//  Assignment operators

const continent = "North America";
const country = "Canada";
let population = 50;
const isIsland = false;
const language = "English";
let finlandPopulation = 6;

let halfPopulation = population / 2;

console.log(halfPopulation);
console.log(++halfPopulation);
console.log(population > finlandPopulation);
console.log(population > 33000000);
("Portugal is in Europe, and its 11 million people speak portuguese");

console.log(
  `${country} is a ${continent}, and its ${population} million people speak ${language}`
);
*/

/*

// Operators precedence 15

const now = 2020;
const ageAndrey = now - 1985;
const ageTom = now - 1991;

console.log(now - 1985 >= now - 1991);

let x, y;

x = y = 25 - 10 - 5;

averageAge = (ageAndrey + ageTom) / 2;

console.log(ageAndrey, ageTom, averageAge);

*/

/*
//Coding challenge 16

let [markWeight, markHeight] = [78, 1.69];
let [johnWeight, johnHeight] = [92, 1.95];
let markHigherBMI;

let markBmi = bmiCalc(markWeight, markHeight);
let johnBmi = bmiCalc(johnWeight, johnHeight);
markHigherBMI = markBmi > johnBmi;

console.log(`Mark's BMI ${markBmi}, John's BMI ${johnBmi}
    Mark's BMI higher than John's BMI : ${markHigherBMI}
`);
function bmiCalc(weight, height) {
  return weight / height ** 2;
}

*/

/*

// Strings and template literals 17

const firstName = "Andrey";
const job = "programmer";
const birthYear = 1985;

const year = 2020;

const str =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

const strNew = `I'm ${firstName} ,a ${year - birthYear} years old ${job}`;
console.log(str);

*/

/*
// If/else statements 18
let age = 15;

if (age >= 18) {
  console.log(`Sara can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sara is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 1985;
let centery;
if (birthYear <= 2000) {
  centery = 20;
} else {
  centery = 20;
}

console.log(centery);

//  Assignment if/else

const continent = "North America";
const country = "Canada";
let population = 50;
const isIsland = false;
const language = "English";
let finlandPopulation = 6;
let avgWorldPopulation = 33;
let halfPopulation = population / 2;

if (population > avgWorldPopulation) {
  console.log(`${country} population is above average`);
} else {
  console.log(
    `${country} population is ${
      avgWorldPopulation - population
    } millions below average`
  );
}

*/

//Coding challenge 19

/*
let [markWeight, markHeight] = [78, 1.69];
let [johnWeight, johnHeight] = [92, 1.95];
let markHigherBMI;

let markBmi = bmiCalc(markWeight, markHeight);
let johnBmi = bmiCalc(johnWeight, johnHeight);
markHigherBMI = markBmi > johnBmi;

if (markHigherBMI) {
  console.log(
    `Mark's BMI (${markBmi.toFixed(
      2
    )}) is higher than John's BMI (${johnBmi.toFixed(2)})`
  );
} else {
  console.log(
    `Mark's BMI (${markBmi.toFixed(
      2
    )}) is less than John's BMI (${johnBmi.toFixed(2)})`
  );
}

function bmiCalc(weight, height) {
  return weight / height ** 2;
}
*/

/*
// Type conversion and coercion 20

// type conversion
const birthYear = "1985";
console.log(Number(birthYear));
console.log(Number(birthYear) + 18);

console.log(Number("Andrey"));

console.log(String(23));
console.log(typeof String(50));

// type coircion
console.log("i'm " + 23 + " yers old");
console.log("23" - "3" - 10);
console.log("23" * 2);
console.log("23" > 2);
console.log(2 + 3 + "ww");

let n = "1" + 1;
n -= 1;
console.log(n);

*/

/*
// Truthy falsy values 21

// 5 falsy values : 0, '', false, undefined, NaN
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean("Andrey"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 10;

if (money) {
  console.log("Don't spend id all");
} else {
  console.log("Your should get a job");
}

let height = 123;

if (height) {
  console.log(`height is defined`);
} else console.log(`height is not defined`);

*/

/*
//Equality operators 22

const age = `18`;

if (age === 18) console.log(`Ypu just became an adult (strict)`);
if (age == 18) console.log(`Ypu just became an adult (loose)`);

const favourite = Number(prompt(`What is you favourite number?`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log(`23 is amazing number`);
} else if (favourite === 7) {
  console.log(`7 is amazing number`);
} else {
  console.log(`number is not 7 or 23`);
}

// Assignment equality operators

const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours == 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

*/

/*
//Logical operators 24

const hasDrivingLicense = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);

const shouldDrive = hasDrivingLicense && hasGoodVision && !isTired;

if (shouldDrive) {
  console.log(`Sarah should drive`);
} else {
  console.log(`Someone else should drive`);
}

// Assignment logical operators

const country = "Canada";
let population = 50;
const isIsland = false;
const language = "English";

if (language === "English" && !isIsland && population < 51) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

*/

/*
//Coding challenge 25

const [d1, d2, d3] = [88, 91, 200];
const [k1, k2, k3] = [88, 91, 110];

const avgDolphins = (d1 + d2 + d3) / 3;
const avgKoalas = (k1 + k2 + k3) / 3;

console.log(`Dolphins team score is ${avgDolphins.toFixed(2)}
Koalas team score is ${avgKoalas.toFixed(2)}`);
if (avgDolphins >= 100 && avgDolphins > avgKoalas) {
  console.log(`Dolphins is winner!`);
} else if (avgKoalas >= 100 && avgDolphins < avgKoalas) {
  console.log(`Koalas is winner!`);
} else if (avgDolphins === avgKoalas && avgDolphins >= 100) {
  console.log(`draw`);
} else {
  console.log(`no winner`);
}

*/

/*
// Switch statement 26

const day = "wednesday";

switch (day) {
  case "monday":
    console.log(`Plan my course structure`);
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare teories videous");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videous");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}

// Assignment switch
const lang = "english";

switch (lang) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}
*/

/*

// Statements and expressions

// The conditional (ternary) operator 28

const age = 10;
age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`);

const drink = age >=18 ? 'wine' : 'water';
console.log(drink);

let drink2;

if(age >=18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}

console.log(drink2);

console.log(`I like to drink ${age >=18 ? 'wine' : 'water'}`);

// Assignment ternary operator

let population = 50;
let country = 'Canada'
let message = population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);
*/
/*

//Coding challenge 29

let bill = 275;

let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${bill + tip}`);
*/