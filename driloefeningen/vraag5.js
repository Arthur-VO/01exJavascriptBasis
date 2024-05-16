/**
 * Vraag 5
 * Waarom wordt in onderstaand programma  console.log() niet uitgevoerd?
 * 
 * Antwoord: a is truthy en b is truthy, ze zijn dus gelijk aan elkaar
 */
'use strict';
const a = '5';
const b = 5;
if (a != b) {
  console.log(`De string '5' is verschillend van het getal 5.`);
}
