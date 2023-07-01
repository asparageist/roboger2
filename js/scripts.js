window.onload = function() {
  // document.querySelector("---------").addEventListener("submit", count);
};

const numbo = 3;
const numArray = [];
const beepArray = [];

function count() {
  if (numbo >= 0) {
    for (i = 0; i <= numbo; i++) {
      numArray.push(i);
    }
  }
  console.log(numArray);
  isBeepBoop();
}

function isBeepBoop() {
  for (i = 0; i <= numbo; i++) {
    if (numArray[i] === 1) {
      beepArray.push("BEEP!");
      console.log(numArray[i])
    } else if (numArray[i] === 2) { 
      beepArray.push("BOOP!");
    } else if (numArray[i] === 3) {
      beepArray.push("WONT YOU BE MY NEIGHBOR");
    } else {
      beepArray.push(numArray[i]);
    }
  }
  console.log(beepArray);
}