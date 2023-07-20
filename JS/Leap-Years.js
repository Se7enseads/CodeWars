/* 

Description: 

In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

- years divisible by 4 are leap years
- but years divisible by 100 are not leap years
- but years divisible by 400 are leap years


Additional Notes:

- Only valid years (positive integers) will be tested, so you don't have to validate them


Kata Link: 

https://www.codewars.com/kata/526c7363236867513f0005ca

*/

function isLeapYear(year) {
  let byFour = year % 4;
  let byHundred = year % 100;
  let byFourHundred = year % 400;

  return (byFour === 0 && byHundred !== 0) || byFourHundred === 0
    ? true
    : false;
}
