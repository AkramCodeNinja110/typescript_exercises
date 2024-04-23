/*17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */

import { log } from "console";

let guests: string[] = [
  "Ali",
  "Omar",
  "Youssef",
  "Ibrahim",
  "Khaled",
  "Hassan",
  "Karim",
];
// Print the original guest list
for (let i = 0; i < guests.length; i++) {
  console.log(guests[i]);
}
// Print a message indicating only two people can be invited
console.log(
  "\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner."
);
// Remove guests until only two names remain
while (guests.length > 2) {
  let removedGuests = guests.pop();
  console.log(`\nSorry ${removedGuests}, we can't invite you to dinner.`);
}
// Print invitation messages for the remaining two guests
console.log("\nInvitation Messages:");
for (let i = 0; i < guests.length; i++) {
  console.log(
    `Dear ${guests}, you are still invited to dinner. Please join us for an evening of great food and conversation.`
  );
}
// Remove the last two names from the list
guests.pop();
guests.pop();
// Print the final (empty) guest list
console.log("\nFinal Guest List:");
for (let i = 0; i < guests.length; i++) {
  console.log(guests[i]);
}
