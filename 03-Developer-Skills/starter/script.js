// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 23;

const calcAge = birthYear => 2020 - birthYear;
console.log(calcAge(1986));
*/

/*
// Using Google, StackOverflow and MDN 59
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

let calcTempAmplitude = function (arr) {
  let min = arr[0];
  let max = arr[0];

  temperatures.forEach(temp => {
    if (temp === 'error') {
    } else {
      min = temp < min ? temp : min;
      max = temp > max ? temp : max;
    }
  });

  return max - min;
};

console.log(calcTempAmplitude(temperatures));


const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [-10, 5, 15, 20];

const calcTempAmplitude = function (temps1, temps2) {
  let temps = [...temps1, ...temps2];
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;
    if (temps[i] > max) max = curTemp;
    if (temps[i] < min) min = curTemp;
  }
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures1, temperatures2);
console.log(amplitude);
*/

/*
//Debugging with the Console and Breakpoints 61

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degree celsius:')),
  };

  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
*/

/*
// Coding Challenge #1
const printForecast = function (maxTemps) {
  let forecastStr = `... `;
  maxTemps.forEach((temp, index) => {
    forecastStr += ` ${temp}°C in ${++index} days ...`;
  });
  console.log(forecastStr);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
*/
