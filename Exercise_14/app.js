"use strict";
/* 14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
let guestList = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie"];
// Print a message inviting each person to dinner
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. Please join us for an evening of great food and conversation.`);
}
