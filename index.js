// Task 1: Getting Started

console.log('Hello, ES6!!!!')

// Task 2: Variables (let) and Scoping

console.log(dogo)
var dogo = 'Akita'
console.log(dogo)
var dogo = 'Shibe'
console.log(dogo)
dogo = 'Chow CHow'
console.log(dogo)

let cate = 'British Shorthair'
console.log(cate)
cate = 'Turkish Angora'
console.log(cate)

var dogo = 'Akita';
function printBreed() {
    var dogo = 'Cocker Spaniel'
    console.log('inside: ' + dogo)
}

printBreed()
console.log('outside: ' + dogo)

for (let i = 0; i < 2; i++) {
    let parrot = 'Hey!'
}

// Task 2: Exercise 1: Fix the code to print 15

let age = 15

for (let age = 1; age <= 10; age++) {
    console.log(age)
}

console.log(age)

// Task 2: Exercise 2: Fix the code to print Jack Russell Terrier

let myDog = "Jack Russell Terrier"
let shortLeggies = true

if (shortLeggies) {
    let myDog = "Welsh Corgie"
    console.log(myDog)
} else {
    let myDog = "Border Collie"
    console.log(myDog)
}

console.log(myDog)
