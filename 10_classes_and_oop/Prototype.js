// let myName = "priyanshi     "
// let myChannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPowe: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.priyanshi = function(){
    console.log(`priyanshi is present in all objects`);
}

Array.prototype.heypriyanshi = function(){
    console.log(`Priyanshi says hello`);
}

// heroPower.priyanshi()
// myHeros.priyanshi()
// myHeros.heypriyanshi()
// heroPower.heypriyanshi()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"priyanshi".trueLength()
"iceTea".trueLength()