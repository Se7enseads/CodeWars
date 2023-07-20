/* 

DESCRIPTION:
When provided with a letter, return its position in the alphabet.

Input :: "a"

Output :: "Position of alphabet: 1"


Kata Link: 

https://www.codewars.com/kata/5808e2006b65bff35500008f

*/

export function position(alphabet: string): string {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  return "Position of alphabet: " + (alphabets.indexOf(alphabet) + 1);
}
