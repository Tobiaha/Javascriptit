'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const target = document.getElementById("target");

for (let s of students) {
  const option = document.createElement("option");

  option.text = s.name;
  option.value = s.id;

  target.appendChild(option);
};
