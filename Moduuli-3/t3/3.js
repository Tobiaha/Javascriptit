'use strict';
const names = ['John', 'Paul', 'Jones'];

const into_target = document.getElementById("target");

for (let n of names) {
    const uli = `<li>${n}</li>`;

    into_target.innerHTML += uli;
}
