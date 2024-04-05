'use strict';
let x = parseInt(prompt('Anna eka luku'));
let y = parseInt(prompt('Anna toka luku'));
let z = parseInt(prompt('Anna kolmas luku'));

let summa = x + y + z
let tulo = x * y * z
let ka = summa / 3

document.querySelector('#summa').innerHTML = summa;
document.querySelector('#tulo').innerHTML = tulo;
document.querySelector('#ka').innerHTML = ka;
