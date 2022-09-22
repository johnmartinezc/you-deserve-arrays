const prompt = require('prompt-sync')({sigint: true});


let array =  JSON.parse(prompt("Enter an array: ")) 


console.log(array[2][1] )



// [1, "John", "David", "Mike"]