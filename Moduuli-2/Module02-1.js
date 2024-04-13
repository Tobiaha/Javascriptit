'use strict'
let numbers = [];

//5 numbers from prompt
for (let i = 0; i < 5; i++) {
  let numb = parseInt(prompt(`Give five numbers, number ${i + 1}:`));
  numbers.push(numb);
}
//numbers.length
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log("numbers in reverse: ", numbers[i]); //result in reverse order
}

