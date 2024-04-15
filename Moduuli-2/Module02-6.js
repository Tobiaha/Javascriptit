'use strict'
let rolls = []
let num = Math.floor(Math.random() * 6) + 1;
while (num !== 6) {
  rolls.push(num)
  num = Math.floor(Math.random() * 6) + 1;
}
//Math.floor(Math.random() * 6) + 1; to cast a die between 1 and 6
let dicerolls = document.getElementById("dicerolls");
    dicerolls.innerHTML = "<ul>";
    for (let r = 0; r < rolls.length; r++) {
    dicerolls.innerHTML += "<li>"+ rolls[r] + "</li>";
     }
    dicerolls.innerHTML += "<li>6</li>"
    dicerolls.innerHTML += "</ul>"
dicerolls.innerHTML += "<p>Here are the dicerolls until you hit 6.</p>"