function magicians_name(name) {
    for (let i = 0; i < name.length; i++) {
        console.log(name[i]);
    }
}
function make_great(magician) {
    return magician.map(magi => "The great " + magi);
}
let magincians = ["Shameex", "Alex", "Cambry", "Flery"];
magicians_name(magincians);
magincians = make_great(magincians);
magicians_name(magincians);
export {};
