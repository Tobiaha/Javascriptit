'use strict'
let numbers = []

while (true) {
  const number = parseInt(prompt("Enter a number, same number will cancel the program"));
  if (numbers.includes(number)) {
      alert("Number you tried to add already exists. Printing current numbers to console...")
      break;
  }
  numbers.push(number);
}
numbers.sort((a, b) => a - b);
console.log("Here are the numbers:");
numbers.forEach(number => console.log(number)); //ascending numbers
