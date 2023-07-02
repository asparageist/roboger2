window.onload = function() {
  // document.querySelector("form#input").addEventListener("submit", count);
};

const numbo = 13;
const numArray = [];
const beepArray = [];

function count() {
  if (numbo >= 0) {
    for (i = 0; i <= numbo; i++) {
      numArray.push(i);
    }
  }
  console.log(numArray);
  digits();
}

function isBeepBoop(num) {
  for (i = 0; i <= num; i++) {
    if (numArray[i] === 1) {
      beepArray.push("BEEP!");
    } else if (numArray[i] === 2) { 
      beepArray.push("BOOP!");
    } else if (numArray[i] === 3) {
      beepArray.push("WONT YOU BE MY NEIGHBOR");
    } else {
      beepArray.push(numArray[i]);
    }
  }
}

function digits() {
  for (i = 0; i <= numbo; i++) {
    let numDigit = String(i);
    for (ii = 0; ii <= numDigit.length; ii++) {
      isBeepBoop(ii);
    }
  }
}