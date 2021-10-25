//Challenge #4

// const bill = parseInt(prompt("Enter the sum you need to pay"));
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// alert(`The bill was ${bill}, the tip was ${Math.round(tip)}, and the total value is ${Math.round(bill + tip)}`);

// function logger() {
//     console.log("My name is Andy");
// }
//calling, running, invokking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges. `;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

//Function declaration

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1984);

//Function expression exprassions produce value`s
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

//Arrov function
// const calcAge3 = birthYear => 2087 - birthYear;
// const age3 = calcAge3(1984);
// console.log(age3);

// const yearsUntilRetairment = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retairment = 65 - age;
//     // return retairment;
//     return `${firstName} retires in ${retairment} years`;
// }
// console.log(yearsUntilRetairment(1984, "Andy"));

// const dolphinsScore = [100, 54, 41];
// const koalasScore = [10, 10, 27];
// const calcAvarage = (arr) => Math.floor((arr[0] + arr[1] + arr[2]) / 3);
// const avgDolhins = calcAvarage([100, 54, 41]);
// const avgKoalas = calcAvarage([10, 10, 27]);

// const checkWinner = (a, b)  => {
//     if (a >= b*2) {
//         console.log(`Koalas win (${a} vs ${b})`);
//     } else if (b >= a*2) {
//         console.log(`Dolphins win (${b} vs ${a})`);
//     } else {
//         console.log("There is no winner");
//     }
// }

// const friends = ['Mike', 'John', 'Kelly'];
// console.log(friends);
// const newFriends = friends.push("Miko");
// console.log(newFriends);

// const popped = friends.pop();
// console.log(popped);

// const shifted = friends.shift();
// console.log(shifted);

// console.log(friends.indexOf('Bob'));
// console.log(friends.includes('John'));

// const calcTip = function (number) {
//     if (number >= 50 && number <= 300) {
//         return number * 0.15;
//     } else {
//         return number * 0.2;
//     }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// const andy = {
//     firstName: 'Andrii',
//     lastName: 'Skokovskyi',
//     age: 37,
//     job: 'freelancer',
//     friends: ['Mika', 'Setsuna', 'Lightning']
// };

// const nameKey = "Name";
// console.log(andy['first' + nameKey]);
// console.log(andy['last' + nameKey]);

// const interestedIn = prompt('Ask what do you want to know about Andrii? Choose between firstName, lastName, age, job and friends');

// if (andy[interestedIn]) {
//     console.log(andy[interestedIn]);
// } else {
//     console.log('Please select the correct question');
// }

// andy.location = "Ukraine";
// andy['linkedIn'] = "yes";
// console.log(`${andy.firstName} has ${andy.friends.length} friends, and his best friend is called ${andy.friends[2]}`);

// const andy = {
//     firstName: 'Andrii',
//     lastName: 'Skokovskyi',
//     birthYear: 1984,
//     job: 'freelancer',
//     friends: ['Mika', 'Setsuna', 'Lightning'],
//     hasDriverLicens: true,
//     // calcAge: function (birthYear) {
//     //     return 2021 - birthYear;
//     // }
//     // calcAge: function () {
//     //     return 2021 - this.birthYear;
//     // }
//     getSummary: function () {
//         return `${this.firstName} is ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicens ? 'a' : 'no'} driver's license.`
//     },
//     calcAge: function () {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     }
// };
// console.log(andy.calcAge());
// console.log(andy.age);
// console.log(andy.age);
// console.log(andy.age);
// console.log(andy['calcAge'](1984));
// console.log(andy['calcAge'](andy.birthYear));
// console.log(andy.calcAge(1984));

// console.log(andy.getSummary());

// function hello() {
//     console.log('Hello', this)
// }

// const person = {
//     name: 'Andrew',
//     age: 37,
//     sayHello: hello,
//     logInfo: function (job, phone) {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`job is ${job}`)
//         console.log(`Phone is ${phone}`)
//         console.groupEnd()
//     }
// }

// const lena = {
//     name: 'Elena',
//     age: 28
// }
// person.logInfo();

// person.logInfo.bind(lena, 'Frontend', '015 025 45')();
// person.logInfo.call(lena, 'Frontend', '015 025 45');
// person.logInfo.apply(lena, ['Frontend', '015 025 45']);

// const array = [1, 2, 3, 4, 5];
// const array2 = [5, 4, 3, 2, 1];

// Array.prototype.multBy = function (n) {
//     return this.map(function (i) {
//         return i * n;
//     } )
// }

// console.log(array.multBy(2));

// function multBy(arr, n) {
//     return arr.map(function (i) {return i * n;});
// }
// console.log(multBy(array, 2));

// Array.prototype.multiplyBy = function (n) {
//     return this.map(function (i) {
//         return i * n;
//     })
// }
// console.log(array.multiplyBy(10));

// function createCalcFunction(n) {
//     return function () {
//         console.log(1000 * n);
//     }
// }
// const calc = createCalcFunction(42);
// calc();

// function createIncrementor(n) {
//     return function (num) {
//         return n + num;
//     }
// }
// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);
// console.log(addOne(10));
// console.log(addTen(10));

// function urlGenerator(domain) {
//     return function (url) {
//         return (`https://${url}.${domain}.ua`);
//     }
// }

// const comUrl = urlGenerator('com');
// console.log(comUrl('bustools'));

// const person1 = {
//     name: 'Michal',
//     age: 22,
//     job: 'Frontend',
//     }
// const person2 = {
//     name: 'Elena',
//     age: 19,
//     job: 'SMM'
// }

// function bind(context, fn) {
//     return function (...args) {
//         fn.apply(context, args);
//     }
// }
// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// bind(person1, logPerson)();

// console.log('Start');
// window.setTimeout(function () {
//     console.log('Inside timeout, after 2000 seconds')
// }, 2000)

// console.log('End');

// console.log('Request data ...')

// setTimeout(() => {
//     console.log('Preparing data...')

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 2000);
// }, 2000)

// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000);
// })

// p.then(data => {
//     return p2 = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000);
//     })

// })
//     .then(clientData => {
//     clientData.fromPromise = true
//     console.log('Data received', clientData)
//     return clientData
// }).then(newData => {
//     console.log('New data test', newData)
// })
//     .catch(err => console.error('Error: ', err))
//     .finally(() => console.log('Finaly'))

// const sleep = ms => {
//     return new Promise(resolve => {
//     setTimeout(() => resolve(), ms);
//     })
// }
// sleep(2000).then(() => console.log('After 2 seconds'));
// sleep(3000).then(() => console.log('After 3 seconds'))
// Promise.all([sleep(2000), sleep(5000)]).then(() => console.log('All promises'))
// Promise.race([sleep(2000), sleep(5000)]).then(() => console.log('Race promises'))

// function* generateFunction() {
//     return 'Hello, I am a generator'
// }
// const generator = generateFunction();
// console.log(generator.next())

// const markObj = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = Math.floor(this.mass / this.height ** 2)
//         return this.bmi;
//     }
// };

// const johnObj = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = Math.floor(this.mass / this.height ** 2)
//         return this.bmi;
//     }
// };

// markObj.calcBMI();
// johnObj.calcBMI();

// if (markObj.bmi < johnObj.bmi) {
//     console.log(`${johnObj.fullName}'s BMI(${johnObj.bmi}) is higher than ${markObj.fullName}'s (${markObj.bmi})`)
// } else {
//     console.log(`${markObj.fullName}'s BMI(${markObj.bmi}) is higher than ${johnObj.fullName}'s (${johnObj.bmi})`)
// }

// for (let rep = 1; rep <= 10; rep++){
//     console.log(`I need to count the 🐑 ${rep} times`)
// }

const temperatures = [3, "a"];
const newArr = [2, 8, -2, 12, 11, 8, -3, 99];

// const calcTemperatures = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const indxTemp = temps[i];
//     if (typeof indxTemp !== "number") continue;
//     if (indxTemp > max) max = indxTemp;
//     if (indxTemp < min) min = indxTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTemperatures(temperatures, newArr);
// console.log(amplitude);

// // const add = function (a, b) {
// //   return a + b;
// // };

// // console.log(add(1, 3));
// const a = "Hello";

// if (a < 1) {
//   console.log("A is greater then 1");
// } else if (typeof a !== "number") {
//   console.log("it is a string");
// } else {
//   console.log("A is smaller than 1");
// }
// const max = Math.max.apply(null, newArr);
// const min = Math.min.apply(null, newArr);
// const amplitude = max - min;
// console.log(
//   `The maximum temperature is ${max} the minimum temperature is ${min}, the amplitude is ${amplitude}`
// );

// const measureKelvin = function () {
//   const measurment = {
//     type: "temp",
//     units: "celsius",
//     //FIX
//     value: Number(prompt("Degrees celsius")),
//   };
//   //FIND
//   console.table(measurment);
//   console.log(measurment);
//   console.log(measurment.value);
//   console.warn(measurment.value);
//   console.error(measurment.value);
//   const kelvin = measurment.value + 273;
//   return kelvin;
// };
//A) INDETIFY
// console.log(measureKelvin());

// const upperCase = function (arg) {
//   return arg.toUpperCase();
// };

// console.log(upperCase("hello"));

// const tripleExclaim = function (arg) {
//   return arg + "!!!";
// };
// const split =
// const join =
// const copy =

// const createComposition = (f1, f2) => (value) => f2(f1(value));
// console.log(createComposition(upperCase("hello"), tripleExclaim()));

// const result = createComposition( // 5 function-arguments )

// let createComposition = function (f, g) {
//   return function (x) {
//     return f(g(x));
//   };
// };
// let upperCase = function (string) {
//   return string.toUpperCase();
// };
// let tripleExclaim = function (exclaim) {
//   return exclaim + "!!!";
// };
// let result = createComposition(tripleExclaim, upperCase);

// console.log(result("hello"));

// function multiply(a, b = 1) {
//   return a * b;
// }

// const createComposition = (a, b, c, d, e) => (data) => a(b(c(d(e(data)))));
// const upperCase = function (string) {
//   return string.toUpperCase();
// };
// const tripleExclaim = function (exclaim) {
//   return exclaim + "!!!";
// };
// const split = function (string) {
//   return string.split("_");
// };
// const join = function (string) {
//   return string.join(" ");
// };
// const copy = function (string) {
//   return string + " " + string;
// };

// let result = createComposition(copy, join, split, tripleExclaim, upperCase);
// console.log(result("total sale"));
// console.log(copy("by_ticket_now"));

// function say(message) {
//   message = typeof message !== "undefined" ? message : "hilter";
//   console.log(message);
// }

// say();
// say("hay");

// function overloadedFunc(arg1 = [1, 2, 3], arg2 = 2, func.sum) {
//   if (typeof arg1 === "number") {
//     return arg1 * arg2;
//   } else {
//     arg = arg1.map((el) => el * arg2);
//     return arg;
//   }

//   // your code
// }

// function overloadedFunc(arg1 = [1, 2, 3], arg2 = 2) {
//   if (typeof arg1 === "number") {
//     return arg1 * arg2;
//   } else if (typeof arg3 === "object") {
//     return overloadedFunc(arg3.func.sum);
//   } else {
//     let test = arg1.map((el) => el * arg2);
//     return test;
//   }

//   // your code
// }
// console.log(overloadedFunc(undefined, undefined, 2));

// function overloadedFunc(
//   arg1 = [1, 2, 3],
//   arg2 = 2,
//   arg3 = (x, y) => {
//     if (!Array.isArray(x)) {
//       return x * y;
//     }
//     return x.map((el) => el * y);
//   }
// ) {
//   return arg3(arg1, arg2);
// }

// const calcTemperature = function (temps1, temps2) {
//   const temps = temps1.concat(temps2);
//   let max = temps[0];
//   let min = temps[0];
//   for (i = 0; i < temps.length; i++) {
//     const indxTemp = temps[i];
//     if (indxTemp > max) max = indxTemp;
//     if (indxTemp < min) min = indxTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const result = calcTemperature(temperatures, newArr);
// console.log(result);

// const arrg1 = [17, 21, 23];
// const arrg2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let info = "";
//   for (let i = 0; i < arr.length; i++) {
//     info = info + ` ${arr[i]}°C in ${i + 1} days ...`;
//   }
//   return "... " + info;
// };

// const printForecast2 = (arr) => {
//   let info = "";
//   for (let i = 0; i < arr.length; i++) {
//     info = info + ` ${arr[i]}°C in ${i + 1} days ...`;
//   }
//   return "... " + info;
// };

// console.log(printForecast(arrg1));
// console.log(printForecast2(arrg2));

const arr = [1, 2, 3];

const transformArrayToString = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + " " + arr[i];
  }
  return str;
};

console.log(transformArrayToString(arr));
