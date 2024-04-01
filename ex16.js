let new_list = ["Hira", "Sana", "Komal"]; // array declaration and initialization
console.log("\tGuest invited\t");
console.log("\t-----------------------------------\t");
for (let i = 0; i < new_list.length; i++) {
    console.log(new_list[i] + " you are warmly invited to a dinner at my place tomorrow."); //printing array using loop
}
console.log("\t-----------------------------------\t");
console.log("Guest who can't make it: " + new_list[1]);
new_list[1] = "Aisha"; // updating guest in the list
console.log("\t-----------------------------------\t");
console.log("\tUpdated guest list\t");
for (let i = 0; i < new_list.length; i++) {
    console.log(new_list[i] + " you are warmly invited to a dinner at my place tomorrow."); //printing array using loop
}
console.log("\t-----------------------------------\t");
console.log("I found a bigger table to host more guest");
console.log("\t-----------------------------------\t");
new_list.unshift("Afra");
new_list.splice(3, 0, "Hafsa"); //splice add the element at specified location splice(insertlocation,elementsdelete,valuetobeinsert)
new_list.push("fareeha"); // add element at the end of an array
for (let i = 0; i < new_list.length; i++) {
    console.log(new_list[i] + " you are warmly invited to a dinner at my place tomorrow."); //printing array using loop
}
export {};
