/*
 * Hw 1 - Write a program that requests a number from a user and finds the summation of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10.
 */

/* let number = parseInt(prompt('Write number'));
let result = 0;
for(let i = 1; i <= number; i++) {
  result += i;
}
console.log(result); */

/* 
let i = 0;
let number = 3423436;
while(number != 0) {
  number = Math.floor(number / 10);
  i++;
}
console.log(i); */

// ---------------------------My homework------------------------------------

/* Hw 4 - Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.


let number = parseInt(prompt("Write number"));
let result = 0;
while (number > 0) {
  number = Math.floor(number / 10);
  result++;
}
console.log(result);

*/

/* hw 5 -Request 10 numbers from a user and count, how many are positive, negative, or zero. 
Also, count odd and even. Display the statistics.
 There’s only one variable (not 10) needed for input by a user. 
let zero = 0;
let pos = 0;
let neg = 0;
let odd = 0;
let even = 0;
for (let i = 0; i < 10; i++) {
  let number = parseInt(prompt("Enter a number"));
  if (number < 0) {
    neg++;
  } else if (number > 0) {
    pos++;
  } else {
    zero++;
  }
  if (number % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}
console.log(`Total zero numbers : ${zero}`);
console.log(`Total positive numbers :${pos} `);
console.log(` Total negative numbers : ${neg} `);
console.log(`Total even numbers : ${even}`);
console.log(`Total odd numbers : ${odd} `);
*/
/*
 HW 6- Loop a calculator. Request 2 numbers and a sign, solve the problem, 
 display the result and ask if the user wants one more. The loop continues until the user refuses. 




let nummberForTermination = 1;
for (let i = 0; i < nummberForTermination; i++) {
  const number1 = parseFloat(prompt("Enter first number: "));
  const operator = prompt("Enter operator ( either +, -, * or / ): ");

  const number2 = parseFloat(prompt("Enter second number: "));

  let result;

  if (operator == "+") {
    result = number1 + number2;
  } else if (operator == "-") {
    result = number1 - number2;
  } else if (operator == "*") {
    result = number1 * number2;
  } else {
    result = number1 / number2;
  }

  console.log(`${number1} ${operator} ${number2} = ${result}`);
}

let toContinue = confirm("One more?");
if (toContinue === true) {
  const number1 = parseFloat(prompt("Enter first number: "));
  const operator = prompt("Enter operator ( either +, -, * or / ): ");

  const number2 = parseFloat(prompt("Enter second number: "));

  let result;

  if (operator == "+") {
    result = number1 + number2;
  } else if (operator == "-") {
    result = number1 - number2;
  } else if (operator == "*") {
    result = number1 * number2;
  } else {
    result = number1 / number2;
  }

  console.log(`${number1} ${operator} ${number2} = ${result}`);
}

*/

// Hw 7 -Request a number from a user and ask by how many digits to move it. Move the digits and display the result (if the number 123456 needs to be moved by 2 digits, the result will be 345612).
// let number = prompt("Enter a number");
// let howdigits = parseInt(prompt("How many digits to move"));
// let result =
//   number.substring(howdigits, number.length) + number.substring(0, howdigits);
// console.log(result);

/*  Hw 8 - Loop day input like this: «Day of the week. Would you like to see the next one?
//  which continues as long as the user clicks OK.
let count = 1;
let day;
for (let i = 0; i < count; i++) {
  let date = new Date();
  date.setDate(date.getDate() + i);
  let days = date.getDay();

  switch (days) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }
  alert(day);
  let Yes = confirm("Would you like to see the next one?");
  if (Yes === true) {
    count++;
  }
}

*/
//Hw 9 -Display the multiplication table of all numbers from 2 to 9.
//Every number has to be multiplied by 1 to 10.

for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 11; j++) {
    console.log(`${i}*${j}=${i * j}`);
  }
}
