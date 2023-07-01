window.onload = function() {
  // document.querySelector("---------").addEventListener("submit", isInt);
};

const numbo = 3;
const numArray = [];

function isInt() {
  if (numbo >= 0) {
    for (i = 0; i <= numbo; i++) {
      numArray.push(i);
    }
  }
  console.log(numArray);
}