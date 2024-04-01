function magicians_name(name:string[]):void
{
for(let i=0;i<name.length;i++){
    console.log(name[i])
}
}

function make_great(magician:string[]):string[]{
    return magician.map(magi => "The great "+magi)
}

let magincians:string[]=["Shameex","Alex","Cambry","Flery"]
magicians_name(magincians)

magincians=make_great(magincians)
magicians_name(magincians)

