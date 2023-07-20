/* 

DESCRIPTION:

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

Kata Link:

https://www.codewars.com/kata/583710ccaa6717322c000105

*/

export function simpleMultiplication(num: number): number {
  return num % 2 === 0 ? num * 8 : num * 9;
}
