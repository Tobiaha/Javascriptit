'use strict'
const box = document.getElementById("target");
const list = ["First item", "Second item", "Third item"];

for (let i = 0; i < list.length; i++) {
  let item = document.createElement("li");
  item.textContent = list[i];

  box.appendChild(item);
}