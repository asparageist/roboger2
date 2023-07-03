# _ROBOGER_

# _Project 3_

# https://github.com/asparageist/roboger2

#### By Joseph Murray

#### My second attempt at strange number translation program featuring Mr. Rogers.

## Technologies Used

- HTML
- CSS
- JavaScript
- Markdown
- Bootstrap

## Description

Create a web application that takes a number from the user and returns a list of values from 0 to the user's inputted number, replacing all numbers containing a 1 with "Beep!", all numbers containg a 2 with "Boop!", and all numbers containing a 3 with "Won't you be my neighbor?"

## Setup/Installation Requirements

- Download my repository to your Desktop
- Open `index.html`

## Known Bugs

- We shall see.

## License

- Any questions, comments, concerns or contributions, contact the author at josephwmurray@gmail.com

Copyright (c) 6/30/2023 Joseph Murray

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Test: "It should count from 0 up to the user's input."
Code:
const numbo = "3";
function (count);
Expected Output: "0, 1, 2, 3"

Test: "It should change 1 to 'BEEP!' in the array"
Code:
const numbo = "3";
function (isBeepBoop);
Expected Output: "0, BEEP!, 2, 3"

Test: "It should change 2 and 3 to 'BEEP!' and 'WONT YOU BE MY NEIGHBOR' respectively"
Code:
const numbo = "3";
function (isBeepBoop);
Expected Output: "0, BEEP!, BOOP!, WONT YOU BE MY NEIGHBOR"

Test: "It should detect whether a targeted integer is in a multiple digit number and react accordingly"
Code:
const numbo = "13";
function (isBeepBoop);
Expected Output: "0 ... 9, BEEP!, BEEP!, BOOP!, WONT YOU BE MY NEIGHBOR"

Test: "It should output the results to the DOM"
Code:
const numbo = "13";
function (output);
Expected Output: label#output is set to "0 ... 9, BEEP!, BEEP!, BOOP!, WONT YOU BE MY NEIGHBOR"

Test: "It should reset the form upon completion for repeat uses"
Code:
more.addEventListener("submit", function(event) {});
function (reset);
Expected Output: form#input is reset to original settings

Test: "It should respond accordingly to incorrect input"
Code:
const numbo = "hello";
function (error);
Expected Output: "Obey me!"
