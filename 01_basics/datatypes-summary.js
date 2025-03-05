// Primitive

// 7 types : String, NUmber, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 4365878468976736789587n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["a", "b", "c"]
let myObj = {
    name: "priyanshi",
    age: 17,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);