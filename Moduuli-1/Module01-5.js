'use strict'
let vuosiluku = parseInt(prompt("Kirjoita vuosiluku"));
let kv = parseInt(vuosiluku) % 4;
let kvs = parseInt(vuosiluku) % 100;
let kvns = parseInt(vuosiluku) % 400;

if (kvs === 0 && kvns === 0) {
  document.querySelector('#vuosi').innerHTML = vuosiluku + ' vuosiluku on karkausvuosi';
} else if (kv === 0 && kvs !== 0) {
  document.querySelector('#vuosi').innerHTML = vuosiluku + ' vuosiluku on karkausvuosi';
} else {
  document.querySelector('#vuosi').innerHTML = vuosiluku + ' vuosiluku ei ole karkausvuosi';
}
