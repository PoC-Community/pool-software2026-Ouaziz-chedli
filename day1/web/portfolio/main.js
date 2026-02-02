var _a;
// Explicitly saying this variable MUST be a string
var username = "DevUser";
// Explicitly saying this variable MUST be a number
var age = 25;
// Try to uncomment the line below, VS Code will scream at you immediately!
// age = "twenty-five"; 
function greet(name) {
    return "Hello, " + name;
}
console.log(greet(username));
var isDone = false;
var total = 0;
var city = "Paris";
var numbers = [1, 2, 3]; // Can ONLY contain numbers
var names = ["Alice", "Bob"];
var data = 42;
data = "Hello"; // No error, acts like normal JS    
// Create an object using that structure
var player = {
    id: 1,
    username: "Neo"
    // isAdmin is missing, but that's okay because of the '?'
};
console.log("User: ".concat(player.username, ", Admin: ").concat((_a = player.isAdmin) !== null && _a !== void 0 ? _a : false));
