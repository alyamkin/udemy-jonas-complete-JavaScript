// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/**
 * Using Google, StackOverflow and MDN
 */

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
/*
const calcTempAmplitude = (...arr) => {
  let minTemp = arr[0];
  let maxTemp = arr[0];
  for (let temp of arr) {
    if (typeof temp !== 'number') {
      continue;
    }

    if (temp > maxTemp) maxTemp = temp;

    if (temp < minTemp) minTemp = temp;
  }
  return maxTemp - minTemp;
};

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, -2, -6, -1, 'error', 9, 100, 17, 15, 14, 9, 5];

console.log(calcTempAmplitude(...temperatures, ...temperatures2));
*/

/**
 * Debugging with the Console and Breakpoints
 */
/*
const measureKelvin = function () {
  const measurenment = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX
    value: Number(prompt('Degrees celsius:')),
  };

  // B) FIND
  // console.table(measurenment);
  // console.log(measurenment);
  // console.log(measurenment.value);
  // console.warn(measurenment.value);
  // console.error(measurenment.value);

  const kelvin = measurenment.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());
*/
/*
const calcTempAmplitude = (...arr) => {
  let minTemp = arr[0];
  let maxTemp = arr[0];
  for (let temp of arr) {
    if (typeof temp !== 'number') {
      continue;
    }

    if (temp > maxTemp) maxTemp = temp;
    debugger;
    if (temp < minTemp) minTemp = temp;
  }
  return maxTemp - minTemp;
};

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, -2, -6, -1, 'error', 9, 100, 17, 15, 14, 9, 5];

console.log(calcTempAmplitude(...temperatures, ...temperatures2));
*/

/**
 * Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
 */
/*
const printForecast = arr => {
  let forecastString = '';

  for (let day = 0; day < arr.length; day++) {
    forecastString += ` ... ${arr[day]}°C in ${day + 1} days`;
  }

  return `${forecastString} ...`;
};
let temp1 = [17, 21, 23];
let temp2 = [12, 5, -5, 0, 4];
console.log(printForecast(temp1));
*/
