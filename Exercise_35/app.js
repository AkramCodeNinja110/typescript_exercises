"use strict";
/*35.Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet! */
let animals = ["Dog", "Cat", "Rabbit"];
// Printing the names of each animal
console.log("common animals");
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Printing statements about each animal
console.log("\n more about these animals");
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet `);
}
// Additional statement
console.log("\nAny of these animals would make a great pet!");
