"use strict";
/* 40.Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
*/
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title,
        tracks: tracks
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
let Album1 = make_album("artist1", "album1");
let Album2 = make_album("artist2", "album2", 12);
let Album3 = make_album("artist3", "album3");
console.log(Album1);
console.log(Album2);
console.log(Album3);
