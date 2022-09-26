const prompt = require('prompt-sync')({ sigint: true });

let array = JSON.parse(prompt("Enter an array: "))

// ["John", "David", "Kate"]

console.log(array[array.length - 1])