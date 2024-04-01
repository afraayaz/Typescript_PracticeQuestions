import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your name: ",
        type: "input",
        name: "name"
    },
    { message: "Select Aliencolor.",
        type: "list",
        name: "color",
        choices: ["green", "yellow", "red"] }
]);
if (answer.color === "green") {
    console.log(answer.name + " you earned 5 points");
}
else if (answer.color === "yellow") {
    console.log(answer.name + " you earned 10 points");
}
else if (answer.color === "red") {
    console.log(answer.name + " you earned 15 points");
}
