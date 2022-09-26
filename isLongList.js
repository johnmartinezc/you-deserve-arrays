const prompt = require('prompt-sync')({ sigint: true });

let array = JSON.parse(prompt("Enter an array: "))

if (array.length <= 10) {

    console.log(true)
} else {
    console.log(false)
}

//[1,2,3,4,5,2,22,2,22,22,33,21]