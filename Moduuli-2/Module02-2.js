'use strict'
const numparticipants = parseInt(prompt("Number of participants"));
let participantNames = [];

for (let i = 1; i <= numparticipants; i++) {
  const name = prompt("Give participant" + i + " name:" );
  participantNames.push(name);
}

participantNames.sort();

let participants = document.getElementById("participants");
participants.innerHTML = "<ol>";
  for (let n = 0; n < participantNames.length; n++) {
    participants.innerHTML += "<li>" + participantNames[n] + "</li>";
  }
participants.innerHTML += "</ol>";


//document.getElementById("")