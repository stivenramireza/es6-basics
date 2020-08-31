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

// Task 3: Variables (const) and Inmutability

const paintingInformation = {
    name: "Starry Night",
    painter: "Van Gogh",
    location: {
        museum: "MoMA",
        city: "New York City"
    }
}

Object.freeze(paintingInformation)
Object.freeze(paintingInformation.location)

paintingInformation.year = 1889
paintingInformation.name = "The " + paintingInformation.name
paintingInformation.location.country = "USA"

console.log(paintingInformation)

// Task 3: Exercise: Refactor the code to use let/const

let painter = {
    name: 'Van Gogh',
    nationality: "Dutch",
    paintings: ["The Starry Night", "Irises", "Almond Blossoms"]
}

Object.freeze(painter)


painter.birthDate = "March 30, 1853"
painter.paintings.push("Something")

console.log(painter)

// Task 4: Destructuring

const recipe = {
    name: 'Red Lentil Dahl',
    timeInMinutes: 30,
    ingredients: ['red lentils', 'cumin', 'turmeric']
}

const { name: myName, ingredients: myIngredients } = recipe

console.log(myName, myIngredients)

const spices = ["cardomom", "turmeric", "cumin"]
const [first, second] = spices

console.log(first, second)

function cook({ name, ingredients }) {
    console.log(name)
    console.log(ingredients)
}

cook(recipe)

// Task 4: Exercise: Extract data with destructuring

const ingredients = {
    //tea: 'black',
    //milk: 'soy',
    //sweetener: 'honey',
    //spices: ['ginger', 'cardamon', 'cinnamon', 'nutmeg']
}

// Destructure the parameters

function prepareChai({ tea = "regular", spices = ["lettuce", "tomatoes"], milk = "coolant", sweetener = 'strawberry' }) {
    console.log("Mix the " + tea + " tea " +
        "with the " + spices + " in a small pot. " + 
        "Add a cup of water and bring to boil. Boil for 2-3 min. " +
        "Add " + milk + " milk and " + sweetener + ". " +
        "Simmer for 3 min. Serve masla chai hot or warm!")
}

prepareChai(ingredients)

// const spices = ["cardomom", "turmeric", "cumin"]

const [ spice1, ...restOfTheSpices ] = spices
console.log(spice1, restOfTheSpices)

const [ ,, thirdSpice ] = spices
console.log(thirdSpice)

// Task 5: Strings and Interpolation

const language = "English"
console.log(language.includes("g"))
console.log(language.startsWith("Eng"))
console.log(language.endsWith("sh"))
console.log(language.repeat(3))

console.log(`I speak 
some languages such as
${language === "English" ? "British English" : "none"}`)

// Task 5: Exercise: Refactor the code to use the ES6 String utility methods

const country = "Bulgaria"
const city = "Sofia"

if (country.includes("Bulg")) {
    console.log("The country starts with Bulg")
}

if (city.startsWith("So")) {
    console.log("The name starts with So")
}

if (city.endsWith("a")) {
    console.log("The name ends with a")
}

console.log(`The capital of ${country} is the city of ${city}`)

// Task 6: Arrow functions

const numbers = [1, 2, 3, 4, 5, 6]
const calculateDouble = number => number * 2
let doubledNumbers = numbers.map(calculateDouble)

console.log(doubledNumbers)

// Task 6: Exercise: Filter out only the prime number from the array

const isPrime = number => number % 2 === 0
const primeNumbers = [1, 2, 3, 4, 5, 6].filter(isPrime)

console.log(primeNumbers)

// Task 7: Arrow functions and this

function Dog() {
    this.age = 0

    setInterval(() => {
        this.age += 1
        console.log(this.age)
    }, 1000);
}

// const puppy = new Dog()

const isOdd = (...args) => {
    console.log(args)
    return args[0] % 2 === 1
}
console.log(isOdd(1))

// Task 7: Exercise

function Translator() {
   this.phrase = "good day"
   this.englishBulgarianDictionary = {
       good: "ÃÂ´ÃÂ¾ÃÂ±ÃÂÃÂ",
       day: "ÃÂ´ÃÂµÃÂ½"
   }
}

Translator.prototype.getBulgarianPhrase = function() {
   return this.phrase
       .split(" ")
       .map(word => this.englishBulgarianDictionary[word])
       .join(" ")
}
 
const translator = new Translator()
console.log(translator.getBulgarianPhrase())
