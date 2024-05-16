'use strict';

const getal = Number(prompt("Geef een getal:"));

let som = 0;

for (let i = 1; i <= getal; i++) {
    console.log(i);
    if (i%3 == 0) {
        som += i;
        console.log(`${i} is deelbaar door 3`);
        console.log(`Som is nu ${som}`);
    }
    if (i%5 == 0) {
        som += i;
        console.log(`${i} is deelbaar door 5`);
        console.log(`Som is nu ${som}`);
    }
}

console.log(som);