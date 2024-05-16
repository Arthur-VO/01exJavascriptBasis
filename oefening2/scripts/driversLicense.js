'use strict';

const speedLimit = 70;
const kmPerPoint = 5;

const snelheid = Number(prompt("Huidige snelheid:"));

if (snelheid <= speedLimit) {
    console.log("OK");
} else if (snelheid > speedLimit) {
    const verschil = snelheid-speedLimit
    const punten = verschil/5
    console.log(`Points: ${Math.floor(punten)}`);
    if (punten >= 12) {
        console.log("drivers license is suspended");
    }
}
