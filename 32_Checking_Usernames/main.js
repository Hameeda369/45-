//Question# 32
var current_users = ["adMin", "AlI", "FareEda", "Faizan", "Babar"];
var new_users = ["adMin", "babar", "Naheed", "Razia", "Hasnain"];
new_users.forEach(function (newUsername) {
    var lowercase = newUsername.toLowerCase();
    if (current_users.map(function (c_user) { return c_user.toLowerCase(); }).includes(lowercase)) {
        console.log("The username ".concat(newUsername, " is not available.Please write a different username"));
    }
    else {
        console.log("The username ".concat(newUsername, " is available."));
    }
});
