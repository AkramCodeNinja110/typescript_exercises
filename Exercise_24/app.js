"use strict";
/* 24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
let str1 = 'hello';
let str2 = 'world';
let num1 = 5;
let num2 = 10;
let arr = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strings
console.log("Equality test with strings: 'hello' == 'hello'? Prediction: True");
console.log(str1 == 'hello'); // True
console.log("Inequality test with strings: 'hello' != 'world'? Prediction: True");
console.log(str1 != str2); // True
// Tests using the lower case function
console.log("Lower case test: 'HELLO' === 'hello'? Prediction: True");
console.log(str1.toLowerCase() === 'hello'); // True
// Numerical tests
console.log("Numerical equality test: 5 == 5? Prediction: True");
console.log(num1 == num1); // True
console.log("Numerical inequality test: 5 != 10? Prediction: True");
console.log(num1 != num2); // True
console.log("Greater than test: 10 > 5? Prediction: True");
console.log(num2 > num1); // True
console.log("Less than test: 5 < 10? Prediction: True");
console.log(num1 < num2); // True
console.log("Greater than or equal to test: 5 >= 5? Prediction: True");
console.log(num1 >= num1); // True
console.log("Less than or equal to test: 5 <= 10? Prediction: True");
console.log(num1 <= num2); // True
// Tests using "and" and "or" operators
console.log("And operator test: 5 == 5 && 10 == 10? Prediction: True");
console.log(num1 == num1 && num2 == num2); // True
console.log("Or operator test: 5 == 5 || 5 == 10? Prediction: True");
console.log(num1 == num1 || num1 == num2); // True
// Test whether an item is in an array
console.log("Array inclusion test: 3 in [1, 2, 3, 4, 5]? Prediction: True");
console.log(arr.includes(3)); // True
// Test whether an item is not in an array
console.log("Array exclusion test: 6 not in [1, 2, 3, 4, 5]? Prediction: True");
console.log(!arr.includes(6)); // True
