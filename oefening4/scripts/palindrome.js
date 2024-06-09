'use strict';

const woord = String(prompt("Geef een woord: "));

if (woord === woord.split("").reverse().join("")) {
    console.log(`${woord} is a palindrome.`);
} else {
    console.log(`${woord} is not a palindrome.`);
}