"use strict";
/*
// 96. The this Keyword
// 97. The this Keyword in Practice
const andreyObj = {
  firstName: "Andrey",
  lastName: "Lyamkin",
  birthDate: 1985,
  calcAge() {
    this.age = new Date().getFullYear() - this.birthDate;
    return this.age;
  },
};
const yanaObj = {
  firstName: "Yana",
  lastName: "Golovatskaya",
  birthDate: 1982,
};

const calcAge = function (birthDate) {
  console.log(`Inside regular function ${this}`);
  return new Date().getFullYear() - birthDate;
};

const calcAgeArrow = (birthDate) => {
  console.log(`Inside regular function ${this}`);
  return new Date().getFullYear() - birthDate;
};

console.log(andreyObj.calcAge.call(yanaObj));
*/

/*
// 98. Regular Functions vs. Arrow Functions

const andreyObj = {
  firstName: "Andrey",
  lastName: "Lyamkin",
  birthDate: 1985,
  calcAge() {
    this.age = new Date().getFullYear() - this.birthDate;
    const isMillenial = () => {
      return this.birthDate >= 1981 && this.birthDate <= 1991;
    };

    return [this.age, isMillenial()];
  },
};

console.log(andreyObj.calcAge());
*/
/*
// 103. Destructuring Arrays

let arr = [10, 60, 55];

const [x, y, z] = arr;
console.log(`${x}, ${y}, ${z}`);

const [x, y, z = 0] = [15, 60];
console.log(`${x}, ${y}, ${z}`);


const summ = function (x, y) {
  return x + y;
};

const [x, , [y, z]] = [1, 2, [3, 4]];
console.log(x, y, z);
console.log(summ(...[10, 20]));

*/

/*
// 104. Destructuring Objects
const yanaObj = {
  firstName: "Yana",
  lastName: "Golovatskaya",
  birthDate: 1982,
};

const { firstName, lastName, birthDate } = yanaObj;
console.log(firstName, lastName, birthDate);

let a = 111;
let b = 222;
const obj = { a: 33, b: 44, c: 88 };

({ a, b } = obj);
console.log(a, b);

const obj2 = { a: 10, b: 40, c: { d: 50, e: 90 } };

const {
  a,
  b,
  c: { d, e },
} = obj2;
console.log(a, b, d, e);

*/
/*
// 105. The Spread Operator (...)
let arr = [4, 5, 6];
let newArr = [1, 2, 3, ...arr];

let arr2 = [...arr];
arr2.push(7);
console.log(arr2, arr);


const nameLetters = [..."Andrey"];
console.log(nameLetters);


const arr = [1, 2, ...[3, 4]];

const [x, ...others] = arr;
console.log(others);


const yanaObj = {
  firstName: "Yana",
  lastName: "Golovatskaya",
  birthDate: 1982,
};

const { firstName, ...others } = yanaObj;

console.log(others);
*/

/*
// 107. Short Circuiting (&& and ||)

console.log(false || false || 3 + 5);
console.log(3 + 5 && false && 3 + 5);
*/

/*
// 108. The Nullish Coalescing Operator (??)

console.log(0 ?? 3);
console.log(null ?? 3);
*/

/*
// 110. Looping Arrays: The for-of Loop

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let [index, num] of numbers.entries()) {
  console.log(`${index} : ${num}`);
}
*/

/*
// 112. Optional Chaining (?.)

const yanaObj = {
  firstName: "Yana",
  lastName: "Golovatskaya",
  birthDate: 1982,
  calcAge() {
    this.age = new Date().getFullYear() - this.birthDate;
    return this.age;
  },
};

// console.log(yanaObj.calcAge?.() || `Method does not exist`);

const users = [{ firstName: "Yana" }, { firstName: "Andrey" }];

console.log(users[1]?.firstName || `The user not exist`);
*/

/*
// 113. Looping Objects: Object Keys, Values, and Entries
const yanaObj = {
  firstName: "Yana",
  lastName: "Golovatskaya",
  birthDate: 1982,
  calcAge() {
    this.age = new Date().getFullYear() - this.birthDate;
    return this.age;
  },
};

for (let [key, value] of Object.entries(yanaObj)) {
  console.log(`${key}:${value}`);
}
*/

/*
// 115. Sets

const arr = ["Andrey", "Tom", "John", "Andrey"];

const setNames = new Set(arr);

console.log(setNames);

const firstName = "Andreyyyy";
const nameLetters = new Set(firstName);
console.log(nameLetters.size);
console.log(setNames.has("Tom"));

setNames.add("Anastasiia");
const uniqueNames = [...setNames];
console.log(uniqueNames);
*/

/*
// 116. Maps: Fundamentals

const mapExample = new Map();

mapExample.set("firstName", "Andrey");
mapExample.set("secondName", "Lyamkin");
mapExample.set("age", 36);
mapExample.set(
  document.querySelector("h1"),
  document.querySelector("h1").textContent
);

console.log(mapExample.get("secondName"));
console.log(mapExample.has("age"));
console.log(mapExample.size);
*/

/*
// 117. Maps: Iteration

const mapExample = new Map();

mapExample.set("firstName", "Andrey");
mapExample.set("secondName", "Lyamkin");
mapExample.set("age", 36);
mapExample.set(
  document.querySelector("h1"),
  document.querySelector("h1").textContent
);

for (let [key, value] of mapExample) {
  console.log(`${key}: ${value}`);
}

const mapToArr = [...mapExample.entries()];

console.log(mapToArr);
*/

/*
// 120. Working With Strings - Part 1

const firstName = "Andrey";

console.log(firstName.length);
console.log(firstName[0]);
console.log(firstName.indexOf("y"));
console.log([...firstName]);
console.log(firstName.lastIndexOf("y"));
console.log(firstName.slice(1, -1));
*/

/*
// 121. Working With Strings - Part 2
const firstName = "  Andrey  ";
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.trim());
console.log(firstName.replace("y", "w"));
console.log(firstName.includes("re"));
console.log(firstName.trim().startsWith("A"));
*/

/*
// Working With Strings - Part 3 122

const fullName = "Andrey Lyamkin";

const [firstName, lastName] = fullName.split(" ");

console.log(firstName);
console.log(lastName);

const alphabit = ["a", "b", "c"];

console.log(alphabit.join(" "));

const number = 55555;

console.log(String(number).padStart(7, "*"));
*/

/*
// 126. Default Parameters

const power = function (number, pow = 2) {
  return number ** pow;
};

console.log(power(2, 4));
*/

/*
// 129. Functions Accepting Callback Functions

const sum = function (values) {
  return values.reduce((acc, num) => acc + num, 0);
};

const mult = function (values) {
  return values.reduce((acc, num) => acc * num);
};
const calculation = function (func, ...values) {
  return func(values);
};

console.log(calculation(sum, 1, 2, 3, 4));
console.log(calculation(mult, 1, 2, 3, 4));
*/

/*
// 130. Functions Returning Functions

const calcPowTwo = function (number) {
  return function () {
    return number ** 2;
  };
};

console.log(calcPowTwo(5)());
*/

/*
// 131. The call and apply Methods

const andreyObj = {
  firstName: "Andrey",
  lastName: "Lyamkin",
  birthDate: 1985,
  calcAge() {
    this.age = new Date().getFullYear() - this.birthDate;
    return this.age;
  },
};

const yanaObj = {
  firstName: "Yana",
  lastName: "Golovatskaya",
  birthDate: 1982,
};

const calcAge = andreyObj.calcAge;

const calcAgeAndrey = calcAge.bind(andreyObj);

console.log(calcAgeAndrey());
*/

// 140. Simple Array Methods
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
const movements2 = [...movements];
const firstName = [..."Andrey"];
movements.push(200);
movements.pop();
movements.unshift(500);
movements.shift();
// movements.splice(1, 5000);
// console.log(movements.slice());
// movements.reverse();
// movements.sort((a, b) => b - a);
console.log(movements.concat(movements2.reverse()));
console.log(firstName.join("-"));
console.log(movements);
*/
/*
// 141. Looping Arrays: forEach

for (let mov of movements) {
  console.log(mov);
}

movements.forEach((mov) => console.log(mov));
*/

/*
// 142. forEach With Maps and Sets

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(["USD", "GBR", "USD", "EUR", "EUR"]);

currenciesUnique.forEach((value) => console.log(value));
*/

/*
// 147. The map Method

const euro = movements.map((mov) => mov * 1.2);
console.log(euro);
*/

/*
// 149. The filter Method
const deposit = movements.filter((mov) => mov > 0);
const withdrowal = movements.filter((mov) => mov < 0);
console.log(deposit);
console.log(withdrowal);
*/

/*
// 150. The reduce Method

const balance = movements.reduce((acc, mov) => acc + mov);
console.log(balance);

const maxMovement = movements.reduce((acc, mov) => (mov > acc ? mov : acc));

console.log(maxMovement);
*/

/*
// 154. The find Method

const names = ["Andrey Lyamkin", "Yana Golovatskaya", "Anastasiia Lyamkina"];

console.log(names.find((user) => user === "Yana Golovatskaya"));
*/

/*
// 158. some and every
const deposits = movements.filter((mov) => mov > 0);
console.log(movements.some((mov) => mov === -400));
console.log(deposits.every((mov) => mov < 0));
*/

/*
// 160. Sorting Arrays

// console.log(movements.sort((a, b) => a - b));

const movements2 = Array.from(movements);
console.log(movements2);
*/

/*
// 166. Converting and Checking Numbers

const num = "123";

console.log(Number(num));
console.log(Number.parseInt(num));
console.log(Number.isNaN(20 / 0));
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(null));


const random = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

for (let i = 0; i < 100; i++) {
  console.log(random(5, 10));
}
*/

// // Working with BigInt 169

/*
// 170. Creating Dates

const now = new Date();

console.log(now.getFullYear());

console.log(now.getDate());
console.log(now.getTime());
console.log(now.toISOString());
*/

/*
// 172. Operations With Dates

const now = new Date();
const nextBirth = new Date(2021, 11, 19);

console.log(nextBirth);

const calcDaytToNextBirth = function (date1, date2) {
  return Math.abs(Math.floor((date2 - date1) / (1000 * 60 * 60 * 24)));
};

console.log(calcDaytToNextBirth(now, nextBirth));
*/

/*
const date = new Date();

const usDate = Intl.DateTimeFormat(navigator.language).format(new Date());

console.log(usDate);

console.log(navigator);
*/
