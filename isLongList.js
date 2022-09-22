const prompt = require('prompt-sync')({sigint: true});

let array = JSON.parse(prompt("Enter an array: "))

if(array.length <= 10){

console.log(true)}
