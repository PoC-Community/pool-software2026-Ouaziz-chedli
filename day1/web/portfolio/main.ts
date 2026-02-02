// Explicitly saying this variable MUST be a string
let username: string = "DevUser";

// Explicitly saying this variable MUST be a number
let age: number = 25;

// Try to uncomment the line below, VS Code will scream at you immediately!
// age = "twenty-five"; 

function greet(name: string): string {
    return "Hello, " + name;
}

console.log(greet(username));