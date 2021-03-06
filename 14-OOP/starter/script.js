'use strict';

/*
// 205. Constructor Functions and the new Operator

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside constructor function
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);

// console.log(jonas);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function autpmatically return {}

const test = function () {
  console.log(this);
};

test();

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// 206. Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));

.prototypeOfLinkedObjects
Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);

console.log(jonas.hasOwnProperty('firstName'));

console.log(jonas.hasOwnProperty('species'));

console.log(Number.isFinite(null));

Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);
207. Prototypal Inheritance and The Prototype Chain
208. Prototypal Inheritance on Built-In Objects

const arr = [3, 6, 6, 9, 9, 4, 4, 5, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');

console.dir(x => x + 1);
*/

/*
// 209. Coding Challenge #1

// Coding Challenge #1


1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK ????


const Car = function (make, speed = 0) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function (speedIncrease = 10) {
  this.speed += speedIncrease;
  console.log(this.speed);
};

Car.prototype.brake = function (speedDecrease = 5) {
  this.speed -= speedDecrease;
  console.log(this.speed);
};
const bmwCar = new Car('BMW', 120);
const mercedesCar = new Car('Mercedes', 95);
bmwCar.accelerate(10);
bmwCar.accelerate(10);
bmwCar.brake();

*/

/*
// 210. ES6 Classes

// class expression
//const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizens
// 3. Classes are executed in strict mode
*/

/*
// 211. Setters and Getters

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

// getters and setters in the class
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property. Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set property
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static
  static hey() {
    console.log('Hi there!!');
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);

const walter = new PersonCl('Walter', 2000);

PersonCl.hey();
*/

// 212. Static Methods
// See above

/*
// 213. Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
console.log(steven);
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

// 214. Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK ????
*/

// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK ????

/* Use a constructor function */
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(
    `The ${this.make} speed was increased by 10 km/h. The new speed is ${this.speed}`
  );
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(
    `The ${this.make} speed decreased by 5 km/m. The new speed is ${this.speed}`
  );
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
*/

/* Use an ES6 classes*/

/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(
      `The ${this.make} speed was increased by 10 km/h. The new speed is ${this.speed}`
    );
  }

  brake() {
    this.speed -= 5;
    console.log(
      `The ${this.make} speed decreased by 5 km/m. The new speed is ${this.speed}`
    );
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
ford.accelerate();
ford.speedUS = 10;
console.log(ford);
*/

/* Use Object.create*/
/*
const CarProto = {
  accelerate() {
    this.speed += 10;
    console.log(
      `The ${this.make} speed was increased by 10 km/h. The new speed is ${this.speed}`
    );
  },

  brake() {
    this.speed -= 5;
    console.log(
      `The ${this.make} speed decreased by 5 km/m. The new speed is ${this.speed}`
    );
  },

  init(make, speed) {
    this.make = make;
    this.speed = speed;
  },
};

const bmw = Object.create(CarProto);
bmw.init('BMW', 120);

console.log(bmw);
*/

// 215. Inheritance Between "Classes": Constructor Functions

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I'm study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Since');
mike.introduce();
mike.calcAge();
console.log(mike);
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

Student.prototype.constructor = Student;
console.log(mike);
*/

// 216. Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism ????

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK ????
*/

/*
const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(
    `The ${this.make} speed was increased by 20 km/h. The new speed is ${this.speed}`
  );
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(
    `The ${this.make} speed decreased by 5 km/m. The new speed is ${this.speed}`
  );
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.chargeBattery(90);
tesla.accelerate();
tesla.brake();
console.log(tesla);
*/

// 217. Inheritance Between "Classes": ES6 Classes
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`Hey there`);
  }
}

class StudentCL extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce = function () {
    console.log(`My name is ${this.fullName} and I'm study ${this.course}`);
  };

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} and I study.....`);
  }
}

const martha = new StudentCL('Martha Jones', 2012, 'Computer Science');

martha.introduce();
martha.calcAge();
*/

// 218. Inheritance Between "Classes": Object.create
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I'm study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

// Recap
// Using function constructor
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(
    `The ${this.make} accelerate on 10 km/h, the current speed is ${this.speed}`
  );
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(
    `The ${this.make} brake on 5 km/h, the current speed is ${this.speed}`
  );
};

const EVCar = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EVCar.prototype = Object.create(Car.prototype);

EVCar.prototype.chargeTo = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`The battery charged to ${this.charge}`);
};

EVCar.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `The ${this.make} accelerate on 20 km/h, the current speed is ${this.speed}, the battery charge is ${this.charge}`
  );
};

const tesla = new EVCar('Tesla', 140, 25);
tesla.accelerate();
console.log(tesla);
*/
// Using classes

/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate = function () {
    this.speed += 10;
    console.log(
      `The ${this.make} accelerate on 10 km/h, the current speed is ${this.speed}`
    );
  };

  brake = function () {
    this.speed -= 5;
    console.log(
      `The ${this.make} brake on 5 km/h, the current speed is ${this.speed}`
    );
  };
}

class EVCar extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }

  accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(
      `The ${this.make} accelerate on 20 km/h, the current speed is ${this.speed}, the battery charge is ${this.charge}`
    );
  };
  chargeTo = function (chargeTo) {
    this.charge = chargeTo;
    console.log(`The battery charged to ${this.charge}`);
  };
}

const tesla = new EVCar('Tesla', 140, 25);
tesla.accelerate();
tesla.brake();
console.log(tesla);
*/

// Using Object create
/*
const CarProto = {
  init(make, speed) {
    this.make = make;
    this.speed = speed;
  },

  accelerate() {
    this.speed += 10;
    console.log(
      `The ${this.make} accelerate on 10 km/h, the current speed is ${this.speed}`
    );
  },

  brake() {
    this.speed -= 5;
    console.log(
      `The ${this.make} brake on 5 km/h, the current speed is ${this.speed}`
    );
  },
};

const EVCarProto = Object.create(CarProto);
EVCarProto.init = function (make, speed, charge) {
  CarProto.init.call(this, make, speed);
  this.charge = charge;
};
EVCarProto.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `The ${this.make} accelerate on 20 km/h, the current speed is ${this.speed}, the battery charge is ${this.charge}`
  );
};

const tesla = Object.create(EVCarProto);
tesla.init('Tesla', 140, 25);
tesla.accelerate();
tesla.brake();
console.log(tesla);
*/

// 219. Another Class Example

/*
// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // protected
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for openening an account ${owner}`);
  }
  // 3) Public methods
  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  _approveLoan(val) {
    return true;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  // 4) Private methods
  // #approveLoan(val) {
  //   return true;
  // }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.#movements.push(250); // Not accessible
// acc1._movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

// 220. Encapsulation: Protected Properties and Methods
// 221. Encapsulation: Private Class Fields and Methods
// 222. Chaining Methods
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1);
console.log(acc1.getMovements());
*/
// 223. ES6 Classes Summary

// 224. Coding Challenge #4

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism ????

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK ????
*/

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK ????
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(
      `The ${this.make} accelerate on 10 km/h, the current speed is ${this.speed}`
    );
  }

  brake() {
    this.speed -= 5;
    console.log(
      `The ${this.make} brake on 5 km/h, the current speed is ${this.speed}`
    );
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed, charge);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().chargeBattery(90);
console.log(rivian);
