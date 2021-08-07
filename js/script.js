// let age = prompt("How old are you?");
// age >= 18 ? alert("I like to drink 🍺") : alert("i like to drink 💧");

// const age = 36;
// alert(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

//Challenge #4

const bill = parseInt(prompt("Enter the sun you need to pay"));
const tip = bill <= 50 ? bill * 0.15 : bill * 0.2;
alert(`The bill was ${bill}, the tip was ${Math.round(tip)}, and the total value is ${Math.round(bill + tip)}`);