import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter your age: ",
        type: "number",
        name: "age"
    }
]);
if (answer.age < 2) {
    console.log("You are a baby.");
}
else if (answer.age >= 2 && answer.age < 4) {
    console.log("You are a toddler.");
}
else if (answer.age >= 4 && answer.age < 13) {
    console.log("You are a kid.");
}
else if (answer.age >= 13 && answer.age < 20) {
    console.log("You are a teenager.");
}
else if (answer.age >= 20 && answer.age < 65) {
    console.log("You are an adult.");
}
else if (answer.age >= 60) {
    console.log("You are an elder.");
}
