let places: string[] = ["Paris", "Istanbul", "Newyork", "Dubai", "Maldives"];
console.log("\t******************\t");
console.log("Printing array in original order");
console.log(places);
console.log("\t******************\t");
console.log("Printing array in alphabetical order");
let placesSort: string[]=places.slice()
console.log(placesSort.sort());
console.log("\t******************\t");
console.log("Printing array in original order");
console.log(places);
console.log("\t******************\t");
console.log("Printing array in reverse order");
console.log(placesSort.reverse())
console.log("\t******************\t");
console.log("Printing array in original order");
console.log(places);