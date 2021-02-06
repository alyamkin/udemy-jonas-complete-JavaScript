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

// 181. Selecting, Creating, and Deleting Elements
// 182. Styles, Attributes and Classes
/*
console.log(document.body);
console.log(document.documentElement);
console.log(document.head);

console.log(document.getElementById("paragraph"));
console.log(document.getElementsByClassName("list"));
console.log(document.getElementsByTagName("p"));


console.log(document.querySelectorAll(".list-item"));

const ul = document.querySelector(".list");

document.querySelector(".btn__style-li").addEventListener("click", function () {
  document.querySelectorAll(".list li").forEach((elem) => {
    elem.setAttribute("class", "");
    elem.classList.add("list-item");
  });
});

document
  .querySelector(".btn__append-li")
  .addEventListener("click", function () {
    const listLength = document.querySelectorAll(".list li").length;
    const li = document.createElement("li");
    li.textContent = `option ${listLength + 1}`;
    ul.insertAdjacentElement("beforeend", li);
  });

document.querySelector(".btn__style-p").addEventListener("click", function () {
  document.querySelector("#paragraph").classList.toggle("text-red");
});
console.log(document.querySelector("#paragraph").dataset.someText);
*/

/*  ******************RECAP 04.02.2021******************* */
// This keyword 96
/*
console.log(this);

const calacAge = function (birthYear) {
  console.log(`Regular call function ${this}`);
  return 2021 - birthYear;
};

const calacAge = (birthYear) => {
  console.log(`Regular call function ${this}`);
  return 2021 - birthYear;
};
console.log(calacAge(1985));


const andreyObj = {
  birthYear: 1985,
  calcAge: function () {
    console.log(2021 - this.birthYear);
  },
};

const yanaObj = {
  birthYear: 1982,
};

andreyObj.calcAge();

yanaObj.calcAge = andreyObj.calcAge;

yanaObj.calcAge();
*/

//99. Primitives vs. Objects (Primitive vs. Reference Types) 99
/*
let age = 34;
let ageNew = age;
ageNew = 35;

console.log(age);
console.log(ageNew);

const me = {
  firstName: "Andrey",
  age: 35,
};

const friend = me;

friend.age = 40;

console.log(me);


const me = {
  firstName: "Andrey",
  age: 35,
};

const meCopy = { ...me };

console.log(me, meCopy);
meCopy.age = 50;
console.log(me, meCopy);
*/

// Destructuring arrays 103
/*
const arr = [1, 2, 3];

const [x, y, z] = arr;

console.log(x, y, z);


const arr = [1, 2];

const [x, y, z = 10] = arr;

console.log(x, y, z);


const arr = [1, 2];

const [x, , z = 10] = arr;

console.log(x, z);



const nestedArr = [1, 2, 3, [4, 5]];

const [x, y, z, [r, t]] = nestedArr;
console.log(x, y, z, r, t);
*/

//Destructuring Objects 104
/*
const me = {
  firstName: "Andrey",
  age: 35,
  friends: { friend1: "Yana", friend2: "Nastya" },
};

const { age, firstName } = me;

console.log(age, firstName);


const { age: myAge, firstName } = me;
console.log(myAge, firstName);


let a = 111;
let b = 555;

const obj = { a: 5, b: 6, c: 41 };

({ a, b } = obj);
console.log(a, b);


const {
  firstName,
  age,
  friends: { friend1, friend2 },
} = me;

console.log(firstName, age, friend1, friend2);
*/

//The Spread Operator (...) 105
/*
let arr = [1, 2, 3];
let arr2 = [...arr, 4, 5, 6];
const arr3 = [3, 2, 1];


console.log(arr2);

const newArr = [...arr, ...arr3];
console.log(newArr);

const arr4 = arr3;
console.log(arr3);
arr4[0] = 10;
console.log(arr3);


const arr4 = [...arr3];
console.log(arr3, arr4);
arr4[0] = 10;
console.log(arr3, arr4);


const myName = "Andrey";

const letters = [...myName];
console.log(letters);


const sum = function (x, y) {
  return x + y;
};

const val = [3, 5];

console.log(sum(...val));
*/

//Rest Pattern and Parameters 106
/*
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const [x, y, ...others] = arr;

console.log(x, y, others);


const me = {
  firstName: "Andrey",
  lastName: "Lyamkin",
  age: 35,
};

const { firstName, lastName, ...others } = me;

console.log(firstName, lastName, others);
*/

// Short Circuiting (&& and ||) 107

/*
console.log(null || false || 5 || true);
console.log("" || null || "Andrey");
console.log(undefined || null);



const toPay = 0 || 10;
console.log(toPay);

console.log(7 && "Andrey");
console.log("Hello" && 23 && 23 && null && "Andrey");
*/

/*
// The Nullish Coalescing Operator (??) 108
const value = 0;
// const rez = value || 10;
const rez = value ?? 100;

console.log(rez);
*/

/*
//Looping Arrays: The for-of Loop 110

for (const [i, mov] of movements.entries()) {
  console.log(mov, i);
}
*/

/*
// Optional Chaining (.?) 112
const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const schedule = {
  mon: { open: "7am", close: "11pm" },
  tue: { open: "7am", close: "11pm" },
  wed: { open: "7am", close: "11pm" },
  thu: { open: "7am", close: "11pm" },
  fri: { open: "7am", close: "11pm" },
  sat: { open: "10am", close: "9pm" },
};

weekDays.forEach((weekDay) => {
  console.log(
    `On ${weekDay} the store open at ${
      schedule[weekDay]?.open ?? "closed"
    } and close at ${schedule[weekDay]?.close ?? "closed"}`
  );
});

const me = {
  firstName: "Andrey",
  lastName: "Lyamkin",
  year: 1985,
  calcAge: function (curYear) {
    console.log(curYear - this.year);
  },
};

me.calcAge?.(2021);
console.log(me.calcAg?.(2021) ?? "Method does not exist");
*/

/*
// Looping Objects: Object Keys, Values, and Entries 113

const schedule = {
  mon: { open: "7am", close: "11pm" },
  tue: { open: "7am", close: "11pm" },
  wed: { open: "7am", close: "11pm" },
  thu: { open: "7am", close: "11pm" },
  fri: { open: "7am", close: "11pm" },
  sat: { open: "10am", close: "9pm" },
};

for (const keys of Object.keys(schedule)) {
  console.log(keys);
}

for (const values of Object.values(schedule)) {
  console.log(values);
}

for (const [key, { open, close }] of Object.entries(schedule)) {
  console.log(`${key} : ${open} - ${close} `);
}
*/

/*
// Sets 115

const names = new Set(["Andrey", "Andrey", "Yana"]);
console.log(names);
console.log(names.size);

const myName = new Set("Andrey");
console.log(myName);
console.log(myName.size);
console.log(myName.has("t"));
myName.add("p");
console.log(myName);
myName.delete("p");
console.log(myName);

const namesArr = [...names];
console.log(namesArr);
*/

/*
//Maps: Fundamentals 116

const myMap = new Map();

myMap.set("firstName", "Andrey");
myMap.set("lastName", "Lyamkin");
myMap.set("age", 35);

console.log(myMap.get("age"));

myMap.delete("age");
console.log(myMap);
console.log(myMap.size);
*/

/*
// Maps: Iteration 117
const question = new Map([
  ["question", "What is the best programming language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);

let options = ``;
question.forEach((value, key) => {
  if (typeof key === "number") {
    options += `${key} : ${value} \n`;
  }
});

const answer = Number(prompt(`${question.get("question")} \n${options}`));

console.log(question.get(answer === question.get("correct")));
*/

// Strings

/*
const myName = "Annndrrreyyyrryyy";
const unique = new Set(myName);
const myNameCleared = [...unique].join("");
console.log(myNameCleared);

const str = "My name is Andrey";
console.log(str[1]);
console.log(str.split(" "));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.replace(/e/g, "R"));
console.log(str.trimLeft());
console.log(str.padStart(50, "*"));
console.log(str.indexOf("n"));
console.log(str.lastIndexOf("n"));
console.log(str.slice(0, str.indexOf("n")));
console.log(str.slice(3, 7));
console.log(str.replace("a", "*"));
console.log(str.includes("is"));

const [firstName, lastName] = "Andrey Lyamkin".split(" ");
console.log(firstName, lastName);
*/

/*
// Default Parameters 126

const calcTotal = function (total, discount = 0) {
  return total - (discount / total) * 100;
};

console.log(calcTotal(100, 60));
*/

/*
// How Passing Arguments Works: Value vs. Reference 127
const income = 80000;
const me = {
  fName: "Andrey",
  lName: "Lyamkin",
  sin: 575869434,
};
console.log(income, me.sin);
const payTax = function (incomeTotal, person) {
  incomeTotal = 90000;
  person.sin = 111111111;
};
payTax(income, me);

console.log(income, me.sin);
*/

/*
// First-Class and Higher-Order Functions 128
//  Functions Accepting Callback Functions 129

const capitalizeFirstLowerRest = function (str) {
  const [first, ...rest] = [...str.toLowerCase()];
  return [first.toUpperCase(), ...rest].join("");
};

const undescoreLetters = function (str) {
  const letters = [...str];
  return letters.join("_");
};

const strModifier = function (str, func) {
  return func(str);
};
const str = "ANDREY";
console.log(strModifier(str, capitalizeFirstLowerRest));
console.log(strModifier(str, undescoreLetters));
*/

/*
// Functions Returning Functions 130

const authUser = function (name) {
  return function (pass) {
    console.log(`Welcome back ${name} your pass is ${pass}`);
  };
};

const user1 = authUser("Andrey");
user1(12345);
*/

/*
// The call and apply Methods 131

const me = {
  fName: "Andrey",
  lName: "Lyamkin",
  year: 1985,
  calcAge: function (currYear, value) {
    console.log(
      `${this.fName} ${this.lName} is ${
        currYear - this.year
      } and value : ${value}`
    );
  },
};

const yana = {
  fName: "Yana",
  lName: "Golovatskaya",
  year: 1982,
};
me.calcAge(2021, 123);
me.calcAge.call(yana, 2021, 345);
me.calcAge.call(yana, ...[2021, 678]);
me.calcAge.apply(yana, [2021, 543]);

const yanaCalcAge = me.calcAge.bind(yana, 2021);

yanaCalcAge(988);
*/

// Closures 135

const bookReservation = function () {
  let reservations = 0;
  return function () {
    reservations++;
    console.log(`Number of reservations : ${reservations}`);
  };
};

const reserve = bookReservation();
reserve();
reserve();
reserve();
reserve();
