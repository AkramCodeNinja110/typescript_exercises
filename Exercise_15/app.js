"use strict";
/* 15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.*/
let guests = ["Ali", "Omar", "Youssef"];
// Print the original guest list
console.log("Original Guest List:");
for (let i = 0; i < guests.length; i++) {
    console.log(guests[i]);
}
// Remove a guest who can't make it
let guestWhoCantMakeIt = "Omar";
let indexToRemove = guests.indexOf(guestWhoCantMakeIt);
if (indexToRemove !== -1) {
    guests.splice(indexToRemove, 1);
}
// Add a new guest
let newGuest = "Ibrahim";
guests.push(newGuest);
// Print the updated guest list
console.log("\nUpdated Guest List:\n");
for (let i = 0; i < guests.length; i++) {
    console.log(guests[i]);
}
//Print the name of the guest who can't make it
console.log(`\n${guestWhoCantMakeIt}can't make it to the dinner.`);
// Print invitation messages for each guest
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear${guests[i]}, you are cordially invited to dinner. Please join us for an evening of great food and conversation.`);
}
