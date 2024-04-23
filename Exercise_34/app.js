"use strict";
/* 34.Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
*/
let pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
// Printing the names of each pizza
console.log("My favorite pizzas are:");
for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
// Printing sentences about each pizza
console.log("\nMore about my favorite pizzas:");
for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} pizza`);
}
// Additional statement
console.log("\nI really love pizza!");
