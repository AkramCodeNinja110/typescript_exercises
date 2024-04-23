/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
function make_great(magicians:string[]):string[]{
    let greatMagicians:string[]=[];
    for (let i=0;i<magicians.length;i++){
        greatMagicians.push("the great"+ magicians[i])

    }
    return  greatMagicians;
}
let magicians: string[] = ["Magician 1", "Magician 2", "Magician 3"];
let greatMagicians: string[] = make_great([...magicians]);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);

function show_magicians(magicians: string[]): void {
    for(let i=0;i<magicians.length;i++){
        console.log(magicians[i]);
        
    }
}

