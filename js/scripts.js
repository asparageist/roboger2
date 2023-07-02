window.onload = function() {
  // document.querySelector("form#input").addEventListener("submit", makeArray());
};

const numbo = 13;
const numArray = [];
const beepArray = [];

function makeArray() {
  if (numbo >= 0) {
    for (i = 0; i <= numbo; i++) {
      numArray.push(i);
    }
  }
  console.log(numArray);
  isBeepBoop();
}

function isBeepBoop() {
  for (i = 0; i < numArray.length; i++) {
    let digit = numArray[i].toString();
    if (digit.includes("1")){
      beepArray.push("BEEP!");
    } else if (digit.includes("2")) { 
      beepArray.push("BOOP!");
    } else if (digit.includes("3")) {
      beepArray.push("WONT YOU BE MY NEIGHBOR");
    } else {
      beepArray.push(digit);
    }
  }
  console.log(beepArray);
}
