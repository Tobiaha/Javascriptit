'use strict';
const button = document.getElementById('get-joke');
button.addEventListener('click', () => {
  fetch('https://api.chucknorris.io/jokes/random').
      then(response => response.json()).
      then(data => {
        console.log(data.value); //tehtävä 5 chuck vitsi konsolissa
      }).
      catch(error => {
        console.error('Error fetching joke:', error);
      });
});