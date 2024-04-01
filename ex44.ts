function make_sandwich(...items:string[]): void{
    console.log("\t******************\t")
    console.log("Sandwich made with these items")
    console.log("\t******************\t")
    for(let i=0; i<items.length;i++){
        console.log((i+1)+"- Item: "+items[i])
    }
}

make_sandwich("Cheese", "egg")
make_sandwich("cucumber", "Suasage","carrot")
make_sandwich("Peanut Butter")