let name = prompt('Anna nimesi:');
let house = Math.floor(Math.random() * 4) + 1;

if (house == 1) {
    document.querySelector('#hoghouse').innerHTML = name + ', olet Gryffindor!';
}
else if (house == 2)
    document.querySelector('#hoghouse').innerHTML = name + ', olet Slytherin!';
else if (house == 3) {
    document.querySelector('#hoghouse').innerHTML = name + ', olet Hufflepuff!';
  }
else if (house == 4) {
    document.querySelector('#hoghouse').innerHTML = name + ', olet Ravenclaw!';
  }


