function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("xyz", "generic", 5));
console.log(make_album("wxxy", "geno", 12));
console.log(make_album("roy", "track"));
export {};
