const prompt = require('prompt-sync')({ sigint: true });


let index = JSON.parse(prompt("Enter an array: "))
console.log(index)

if (index.length >= 3) {
    console.log(index[3])
} else {
    console.log(index.length - 1)
}


// ["Fork", "Butter knife", "spoon", "latter"]