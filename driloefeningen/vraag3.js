/**
 * Vraag 3
 * Vraag een getal aan de gebruiker en beeld in de console een aantal regels af met hartjes (♥),
 * zoals in onderstaand voorbeeld.
 *
 * Voorbeeld:
 *
 * INPUT:
 *   Hoeveel regels met hartjes moeten er afgeprint worden? 4 regels
 *
 * OUTPUT:
 *    START PROGRAM
 *    ♥
 *    ♥♥
 *    ♥♥♥
 *    ♥♥♥♥
 *    END PROGRAM
 */

const aantalHartjes = prompt('Hoeveel regels met hartjes moeten er afgeprint worden?');

let output = '';
output = output + 'START PROGRAM \n'
for (let i = 1; i <= aantalHartjes; i++) {
    let lijn = '';
    for (let j = 0; j < i; j++) {
        lijn = lijn + '♥'
    }
    output = output + lijn + '\n'
}
output = output + 'END PROGRAM'

console.log(output);

/** 
 * Oplossing:
 * 
 * const numberOfLines = parseInt(
  prompt("Hoeveel regels met hartjes moeten er afgeprint worden?")
);
console.log("START PROGRAM");
for (let i = 0; i < numberOfLines; i++) {
  // Een hartje ♥ kan je ook als Unicode code point (UTF-16 code) opgeven. \u2665
  // let heart = "";
  // for (let j = 0; j <= i; j++) heart += "♥";
  // console.log(heart);
  console.log("♥".repeat(i + 1));
}
console.log("END PROGRAM");
 * 
 * */
