

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

function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1984);

//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const aga2 = calcAge2(1991);
console.log(age1, aga2);