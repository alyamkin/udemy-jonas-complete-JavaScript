/* Part 1 */

/**
 * Values and Variables
 */
/*
let country, continent, population;

country = 'Canada';
continent = 'North America';
population = 50000000;

console.log(`country: ${country}; continent: ${continent}; population: ${population}`);
*/

/**
 * Data Types
 */
/*
let country = 'Canada';
let continent = 'North America';
let population = 50000000;
let isIsland = false;
let language;

console.log(`is island: ${isIsland}\npopulation: ${population}\ncountry: ${country}\nlanguage: ${language}`);
*/

/**
 * let, const and var
 */
/*
 const country = 'Canada';
 const continent = 'North America';
 let population = 50000000;
 const isIsland = false;
 const language = 'English';
*/

/**
 * Basic operators
 * Strings and Template Literals
 */
/*
const country = 'Canada';
const continent = 'North America';
let population = 50;
const isIsland = false;
const language = 'English';
const splitPopulation = population / 2;
let finlandPopulation = 6;
const avgPopulation = 33;

console.log(population++);
console.log(population > finlandPopulation);
console.log(population < avgPopulation);

console.log(`${country} is in ${continent},and its ${population} million people speak ${language}`);
*/

/**
 * Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
 */
/*
const markName = 'Mark';
let markHeight = 1.68;
let markWeight = 78;
const johnName = 'John';
let johnHeight = 1.95;
let johnWeight = 92;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(`Marks weights ${markWeight} kg and is ${markHeight} m tall. John weights ${johnWeight} kg and is ${johnHeight} m tall.`);
console.log(`Marks BMI higher than Johns BMI?: ${markHigherBMI}`);
*/

/**
 * Taking Decisions: if / else Statements
 */
/*
let population = 50;
const avgPopulation = 33;
const country = 'Canada';

if (population > avgPopulation) {
  console.log(`${country}'s population is above average'`);
} else {
  console.log(`${country}'s population is ${33 - population} millions below avarage'`);
}
*/

/**
 * Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
/*
const nameMark = 'Mark';
let heightMark = 1.68;
let weightMark = 78;
const nameJohn = 'John';
let heightJohn = 1.95;
let weightJohn = 92;

let markBMI = weightMark / heightMark ** 2;
let johnBMI = weightJohn / heightJohn ** 2;

let markHigherBMI = markBMI > johnBMI;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's! (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
*/

/**
 * Type Conversion and Coercion
 */
/*
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
*/

/**
 * Equality Operators: == vs. ===
 */
/*
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
  console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 border`);
} else {
  console.log(`No borders`);
}
*/

/**
 * Boolean Logic
 * Logical Operators
 */

/*
const country = 'Canada';
let population = 50;
const isIsland = false;
const language = 'English';

if (population < 50 && language === 'English' && !isIsland) {
  console.log(`You should line in ${country}`);
} else {
  console.log(`${country} does not meet your criteria :D`);
}
*/

/**
 * There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

*/
/*
const avgScoreDolphing = (96 + 108 + 89) / 3;
const avgScoreKoalas = (88 + 91 + 110) / 3;
const avgScoreDolphingBonus1 = (97 + 112 + 101) / 3;
const avgScoreKoalasBonus1 = (109 + 95 + 123) / 3;
const avgScoreDolphingBonus2 = (97 + 112 + 101) / 3;
const avgScoreKoalasBonus2 = (109 + 95 + 106) / 3;
const minScore = 100;

if (avgScoreDolphing > avgScoreKoalas) {
  console.log(`Dolphins is winner`);
} else if (avgScoreDolphing > avgScoreKoalas) {
  console.log(`Koalas is winner`);
} else {
  console.log(`It's a draw`);
}

if (avgScoreDolphingBonus1 > avgScoreKoalasBonus1 && avgScoreDolphingBonus1 >= minScore) {
  console.log(`Dolphins is winner`);
} else if (avgScoreDolphingBonus1 < avgScoreKoalasBonus1 && avgScoreKoalasBonus1 >= minScore) {
  console.log(`Koalas is winner`);
} else {
  console.log(`No winner`);
}

if (avgScoreDolphingBonus2 > avgScoreKoalasBonus2 && avgScoreDolphingBonus2 >= minScore) {
  console.log(`Dolphins is winner`);
} else if (avgScoreDolphingBonus2 < avgScoreKoalasBonus2 && avgScoreKoalasBonus2 >= minScore) {
  console.log(`Koalas is winner`);
} else if (avgScoreDolphingBonus2 === avgScoreKoalasBonus2 && avgScoreKoalasBonus2 >= minScore && avgScoreDolphingBonus2 >= 100) {
  console.log(`It's a draw`);
} else {
  console.log(`No winner`);
*/

/**
 * The switch Statement
 */

/*
const language = 'russian';

switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log(`MOST number of native speakers`);
    break;
  case 'spanish':
    console.log(`2nd place in number of native speakers`);
    break;
  case 'english':
    console.log(`3rd place`);
    break;
  case 'hindi':
    console.log(`Number 4`);
    break;
  case 'arabic':
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Great language too :D`);
}
*/

/**
 * Statement and Expressions
 */

/**
 * The Conditional(Ternary) Operator
 */
/*
const country = 'Canada';
let population = 50;
const avgPopulation = 33;

const message = population > avgPopulation ? `${country}'s population is above average'` : `${country}'s population is below average'`;

console.log(message);
*/

/**
 * Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
 */

/*
let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
let total = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
*/