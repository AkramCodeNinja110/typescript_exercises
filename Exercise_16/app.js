"use strict";
/*16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["Ali", "Omar", "Youssef"];
// Print the original guest list
console.log("original guest list ");
for (let i = 0; i < guests.length; i++) {
    console.log(guests[i]);
}
// Remove the guest who can't make it
let cantMakeIt = "omer";
let indexOfCantMakeIt = guests.indexOf(cantMakeIt);
if (indexOfCantMakeIt !== -1) {
    guests.splice(indexOfCantMakeIt, 1);
}
// Add a new guest
let newGuest = "Ibrahim";
guests.push(newGuest);
// Print the updated guest list
console.log("\n updated guest list");
for (let i = 0; i < guests.length; i++) {
    console.log(guests[i]);
}
// Print the name of the guest who can't make it
console.log(`\n ${cantMakeIt} can't make it to the dinner.`);
// Print invitation messages for each guest
console.log(`\n Invitation message`);
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests}, you are cordially invited to dinner. Please join us for an evening of great food and conversation.`);
}
// Inform that a bigger table is available
console.log("\nGood news! We found a bigger dinner table!");
// Add new guests
let newGuests = ["Khaled", "Hassan", "Karim"];
guests.unshift(newGuests[0]);
guests.splice(Math.floor(guests.length / 2), 0, newGuests[1]);
guests.push(newGuests[2]);
// Print the final guest list
console.log(`\n final guest list`);
for (let i = 0; i < guests.length; i++) {
    console.log(guests[i]);
}
// Print new invitation messages for each guest
console.log(`\n new invitation message \n `);
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you are cordially invited to dinner. Please join us for an evening of great food and conversation.`);
}
