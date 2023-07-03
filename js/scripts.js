window.onload = function() {
  document.getElementById("nom").removeAttribute("class");
  document.getElementById("more").setAttribute("class", "hidden");
  document.getElementById("oops").setAttribute("class", "hidden");
  const nom = document.querySelector("button#nom");
  const more = document.querySelector("button#more");
  nom.addEventListener("click", function() {
    event.preventDefault();
      const numbo = parseInt(document.querySelector("textarea#input").value);
      console.log(numbo);
      makeArray(numbo);
  });
  more.addEventListener("click", reset);
  oops.addEventListener("click", reset);
};

const numArray = [];
const beepArray = [];

function makeArray(numbo) {
  if (isNaN(numbo) || numbo <= 0) {
    console.log("here");
    error();
  } else if (numbo >= 0) {
    for (let i = 0; i <= numbo; i++) {
      numArray.push(i);
    }
  console.log(numArray);
  isBeepBoop();
  }
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
  document.getElementById("more").removeAttribute("class");
  document.getElementById("nom").setAttribute("class", "hidden");
  document.getElementById("oops").setAttribute("class", "hidden");
}

function reset() {
  document.getElementById("output").innerHTML="any number greater than zero";
  document.getElementById("nom").removeAttribute("class");
  document.getElementById("more").setAttribute("class", "hidden");
  document.getElementById("oops").setAttribute("class", "hidden");
}

function error() {
  document.getElementById("output").innerHTML="OBEY ME!";
  document.getElementById("oops").removeAttribute("class");
  document.getElementById("more").setAttribute("class", "hidden");
  document.getElementById("nom").setAttribute("class", "hidden");
}