let updated_list = ["Hira", "Sana", "Komal"]; // array declaration and initialization
console.log("\tGuest invited\t");
console.log("\t-----------------------------------\t");
for (let i = 0; i < updated_list.length; i++) {
    console.log(updated_list[i] +
        " you are warmly invited to a dinner at my place tomorrow."); //printing array using loop
}
console.log("\t-----------------------------------\t");
console.log("Guest who can't make it: " + updated_list[1]);
console.log("\t-----------------------------------\t");
updated_list[1] = "Aisha"; // updating guest in the list
console.log("\t-----------------------------------\t");
console.log("\tUpdated guest list\t");
for (let i = 0; i < updated_list.length; i++) {
    console.log(updated_list[i] +
        " you are warmly invited to a dinner at my place tomorrow."); //printing array using loop
}
export {};
