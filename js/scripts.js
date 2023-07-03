window.onload = function() {
  const nom = document.querySelector("form#input");
  nom.addEventListener("submit", function(event) {
    event.preventDefault();
      const numbo = parseInt(document.querySelector("textarea#input").value);
      makeArray(numbo);
  });
};

const numArray = [];
const beepArray = [];

function makeArray(numbo) {
  if (numbo >= 0) {
    for (let i = 0; i <= numbo; i++) {
      numArray.push(i);
    }
  }
  console.log(numArray);
  isBeepBoop();
}

function isBeepBoop() {
  for (i = 0; i < numArray.length; i++) {
    let digit = numArray[i].toString();
    if (digit.includes("3")){
      beepArray.push("WONT YOU BE MY NEIGHBOR!");
    } else if (digit.includes("2")) { 
      beepArray.push("BOOP!");
    } else if (digit.includes("1")) {
      beepArray.push("BEEP!");
    } else {
      beepArray.push(digit);
    }
  }
  output(beepArray);
}

function output(beepArray) {
  document.getElementById("output").innerHTML=beepArray.join(", ");
}