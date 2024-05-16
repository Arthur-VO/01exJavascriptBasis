"use strict";

const getal = Number(prompt("Enter a number"));

if (isNaN(getal)) {
    console.log("Not a number");
} else if (getal % 3 === 0 && getal % 5 === 0) {
    console.log("FizzBuzz");
} else if (getal % 3 === 0) {
    console.log("Fizz");
} else if (getal % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(getal);
}