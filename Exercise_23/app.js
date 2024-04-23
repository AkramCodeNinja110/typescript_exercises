"use strict";
/*23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */
let x = 5;
let y = 10;
let z = "5";
console.log("Test 1: Is x equal to 5? Prediction: True");
console.log(x == 5); // True
console.log("Test 2: Is y equal to 10? Prediction: True");
console.log(y == 10); // True
console.log("Test 3: Is x not equal to y? Prediction: True");
console.log(x != y); // True
console.log("Test 4: Is x less than y? Prediction: True");
console.log(x < y); // True
console.log("Test 5: Is x greater than or equal to y? Prediction: False");
console.log(x >= y); // False
console.log("Test 6: Is x equal to '5'? Prediction: False");
console.log(x == z); // False
console.log("Test 7: Is x strictly equal to '5'? Prediction: False");
console.log(x === z); // False
console.log("Test 8: Is x equal to '5'? Prediction: False");
console.log(x == '5'); // False
console.log("Test 9: Is x not equal to '5'? Prediction: True");
console.log(x != '5'); // True
console.log("Test 10: Is x strictly equal to '5'? Prediction: False");
console.log(x === '5'); // False
