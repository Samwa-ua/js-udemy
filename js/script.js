

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

const andy = {
    firstName: 'Andrii',
    lastName: 'Skokovskyi',
    birthYear: 1984,
    job: 'freelancer',
    friends: ['Mika', 'Setsuna', 'Lightning'],
    hasDriverLicens: true,
    // calcAge: function (birthYear) {
    //     return 2021 - birthYear;
    // }
    // calcAge: function () {
    //     return 2021 - this.birthYear;
    // }
    getSummary: function () {
        return `${this.firstName} is ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicens ? 'a' : 'no'} driver's license.`
    },
    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    }
};
// console.log(andy.calcAge());
// console.log(andy.age);
// console.log(andy.age);
// console.log(andy.age);
// console.log(andy['calcAge'](1984));
// console.log(andy['calcAge'](andy.birthYear));
// console.log(andy.calcAge(1984));

console.log(andy.getSummary());