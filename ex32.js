let current_users = ["Khalid", "afra", "saba", "sara", "Ali"];
let new_users = ["Afra", "kanwal", "khalid", "sara", "Mohsin"];
for (let i = 0; i < new_users.length; i++) {
    const new_username_lower = new_users[i].toLowerCase();
    if (current_users.map(user => user.toLowerCase()).includes(new_username_lower)) {
        console.log("The username " + new_users[i] + " is already taken. Please enter a new username.");
    }
    else {
        console.log("The username " + new_users[i] + " is available.");
    }
}
export {};
