/* 40.Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
*/

function make_album(artist:string,title:string,tracks?:number):{artist:string,title:string,tracks?:number}{
    let album={
        artist:artist,
        title:title,
        tracks:tracks
    };
    if(tracks){
        album.tracks=tracks;
    }
    return album;
}
let Album1=make_album("artist1","album1");
let Album2=make_album("artist2","album2",12);
let Album3=make_album("artist3","album3");
console.log(Album1);
console.log(Album2);
console.log(Album3);

//execution reference
/*Function Definition: The make_album function is defined with three parameters: artist, title, and an optional parameter tracks which defaults to undefined.
Object Creation: Inside the function, an album object is created with the artist and title properties set based on the arguments passed to the function.
Conditional Check: The function checks if the tracks parameter has been provided (i.e., it's not undefined).
Adding Tracks: If the tracks parameter has been provided, the tracks property is added to the album object with the value of the tracks parameter.
Return: The function then returns the album object.
Function Calls: Three calls to make_album are made with different arguments:
album1 is created with artist "Artist1", title "Album1", and no tracks specified.
album2 is created with artist "Artist2", title "Album2", and 12 tracks specified.
album3 is created with artist "Artist3", title "Album3", and no tracks specified.
Output: Finally, the console.log statements print the album1, album2, and album3 objects to the console, showing the albums created by the function. */


