'use strict';
const user = (prompt('Type your name'));
console.log('Noice to meet you, ' + user);
document.querySelector('#user').innerHTML = 'Hello ' + user;