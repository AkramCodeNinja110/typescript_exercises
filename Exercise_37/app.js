"use strict";
/* 37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

*/
function make_shirt(size = "large", message = "I love typescript") {
    console.log(`shirt size is ${size} and the message is : ${message}`);
}
// Large shirt with default message
make_shirt();
// Medium shirt with default message
make_shirt("Medium");
// Custom size and message
make_shirt("small", "hello-world");
