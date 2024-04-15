'use strict'
let dogs = []
    for (let i = 1; i < 7; i++) {
    const dogname = prompt("Names of six dogs please, " + i);
    dogs.push(dogname);

}
     dogs.sort().reverse();

    let reversedogs = document.getElementById("reversedogs");
    reversedogs.innerHTML = "<ul>";
    for (let d = 0; d < dogs.length; d++) {
    reversedogs.innerHTML += "<li>"+ dogs[d] + "</li>";
     }
    reversedogs.innerHTML += "</ul>"
