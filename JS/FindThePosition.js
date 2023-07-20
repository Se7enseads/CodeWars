/* 

DESCRIPTION:
When provided with a letter, return its position in the alphabet.

Input :: "a"

Output :: "Position of alphabet: 1"


Kata Link: 

https://www.codewars.com/kata/5808e2006b65bff35500008f

*/

function position(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const formula = alphabet.indexOf(letter) + 1;

  return `Position of alphabet: ${formula}`;
}
