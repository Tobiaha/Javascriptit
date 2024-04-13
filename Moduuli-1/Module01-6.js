'use strict'

function squared() {
  let text = "Press button to get square root of a number or cancel";

  if (confirm(text) === true) {
    const number = parseInt(prompt("Enter a number to get square root"));
    if (number < 0) {
      alert("Error: negative number");
      return false;
    }

    const result = Math.sqrt(number);
    alert("Square root of " + number + " is " + result);
  } else {
    alert("You canceled")
  }

}


