'use strict'
const numbers = [];

let num = parseInt(prompt("Give numbers to a list. By pressing zero you print them"));

while (num !== 0) {
  numbers.push(num);
  num = parseInt(prompt("Give numbers to a list. By pressing zero you print them"));3
}
numbers.sort((a, b) => b - a); //sorting from highest to lowest
console.log(numbers)
