/* 3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/


let personName:string="Akram"
// Print in lowercase
console.log(personName.toLowerCase());
// Print in uppercase
console.log(personName.toLocaleUpperCase());
// Print in titlecase
console.log(toTitleCase(personName));
function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}



