export let new_list1 = ["Hira", "Sana", "Komal"]; // array declaration and initialization
console.log("\tGuest invited\t");
console.log("\t-----------------------------------\t");
for (let i = 0; i < new_list1.length; i++) {
    console.log(new_list1[i] + " you are warmly invited to a dinner at my place tomorrow."); //printing array using loop
}
console.log("\t-----------------------------------\t");
console.log("Guest who can't make it: " + new_list1[1]);
new_list1[1] = "Aisha"; // updating guest in the list
console.log("\t-----------------------------------\t");
console.log("\tUpdated guest list\t");
for (let i = 0; i < new_list1.length; i++) {
    console.log(new_list1[i] + " you are warmly invited to a dinner at my place tomorrow."); //printing array using loop
}
console.log("\t-----------------------------------\t");
console.log("I found a bigger table to host more guest");
console.log("\t-----------------------------------\t");
new_list1.unshift("Afra");
new_list1.splice(3, 0, "Hafsa"); //splice add the element at specified location splice(insertlocation,elementsdelete,valuetobeinsert)
new_list1.push("fareeha"); // add element at the end of an array
for (let i = 0; i < new_list1.length; i++) {
    console.log(new_list1[i] + " you are warmly invited to a dinner at my place tomorrow."); //printing array using loop
}
console.log("\t-----------------------------------\t");
console.log("I can only invite 2 people");
console.log("Sorry " + new_list1[5] + " for not inviting you.");
new_list1.pop();
console.log("Sorry " + new_list1[4] + " for not inviting you.");
new_list1.pop();
console.log("Sorry " + new_list1[3] + " for not inviting you.");
new_list1.pop();
console.log("Sorry " + new_list1[2] + " for not inviting you.");
new_list1.pop();
console.log("\t-----------------------------------\t");
console.log("Guest still invited");
for (let i = 0; i < new_list1.length; i++) {
    console.log(new_list1[i] + " you are invited for the dinner.");
}
console.log("\t-----------------------------------\t");
console.log("printing empty list");
new_list1.pop();
new_list1.pop();
for (let i = 0; i < new_list1.length; i++) {
    console.log(new_list1[i]);
}
