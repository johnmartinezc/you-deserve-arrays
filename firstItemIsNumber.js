const prompt = require('prompt-sync')({sigint: true});

let array =  JSON.parse(prompt("Enter an array: ")) 
console.log(typeof array[0] === "number")



// [1, "John", "David", "Mike"]