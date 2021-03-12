
// /* D1 -Request a three-digit number from a user and check whether it has identical digits in it. */
// let number = parseInt(prompt("Write 3 digit number:"));
// //Example 122
// // find the digits
// let digit1 = parseInt(number / 100); // 1
// let digit = parseInt(number % 100); // 22
// let digit2 = parseInt(digit / 10); // 2
// let digit3 = parseInt(number % 10); //2
// // compare the digits
// let c = Boolean(digit1 == digit2 || digit1 == digit3 || digit2 == digit3);
// console.log(c);

// /* D2 - Request a five-unit number from a user and check whether it is a palindrome.*/
// let number = parseInt(prompt("Write five digit number:"));
// //example 12321
// let digit1 = parseInt(number / 10000); // 1
// let digit = parseInt(number % 10000); // 2321
// let digit2 = parseInt(digit / 1000); // 2
// let digit3 = parseInt(digit % 1000); //321
// let digit4 = parseInt(digit3 / 100); //3
// let digit5 = parseInt(digit3 % 100); //21
// let digit6 = parseInt(digit5 / 10); //2
// let digit7 = parseInt(digit5 % 10); //1

// // compare the digits
// let c = Boolean(digit1 == digit7 && digit2 == digit6);
// console.log(c);

/* D3- Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result. */
// "use strict";
// let amount = Number(prompt("How much money do you have?."));
// let currentCurrency = prompt("What currency are you using?");
// let desiredCurrency = prompt(
//   "What currency do you want to convert it to? EUR, JPY, GBP, USD, or  BRL"
// );
// var currencyRates = {
//   USD: 1,
//   EUR: 0.8,
//   JPY: 0.7,
//   XXX: 5,
// };
// function convertCurrency(currentCurrency, desiredCurrency, amount) {
//   var currentRate = currencyRates[currentCurrency];
//   var desiredRate = currencyRates[desiredCurrency];
//   var USDAmount = amount / currentRate;
//   var convertedAmount = USDAmount * desiredRate;
//   return convertedAmount; // I think this is the right algorithm :/
// }
// var convertedCurrencyAmount = convertCurrency(
//   currentCurrency,
//   desiredCurrency,
//   amount
// );

// alert("Converted: " + convertedCurrencyAmount);

// /*D4 -Request a length of a circumference and a perimeter of a square from a user.
//  Defined whether that circumference can fit in that square.*/
// let a = parseInt(prompt("Length of circumference:")); // example p=20
// let b = parseInt(prompt("Perimeter of a square:")); // formula: p= 4a => 40=4a => a=10

// //Spo e kuptoj kerkesen!//
// let c = parseInt(a / 4);

// let d = Boolean(b == c);
// console.log(d);


