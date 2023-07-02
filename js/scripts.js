window.onload = function() {
  // document.querySelector("---------").addEventListener("submit", count);
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
    console.log("herebeep");
    if (numArray[i] === 1) {
      return "BEEP!";
      console.log(numArray[i])
    } else if (numArray[i] === 2) { 
      return "BOOP!";
    } else if (numArray[i] === 3) {
      return "WONT YOU BE MY NEIGHBOR";
    } else {
      return numArray[i];
    }
  }
  console.log(beepArray);
}

function digits() {
  for (i = 0; i <= numbo; i++) {
    let numDigit = String(i);
    console.log(numDigit);
    splitDigits(numDigit);
  }
}

function splitDigits() {
  for (i = 0; i <= numDigit.length; i++) {
    isBeepBoop(i);
  }

}