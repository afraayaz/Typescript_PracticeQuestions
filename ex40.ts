function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    }
    if (tracks !== undefined) 
    {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("xyz", "generic",5))
console.log(make_album("wxxy", "geno", 12))
console.log(make_album("roy", "track"))
