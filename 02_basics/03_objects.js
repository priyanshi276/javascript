// singleton
// object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Priyanshi",
    "full name": "Priyanshi Gupta",
    [mySym]: "mykey1",
    age: 17,
    location: "Barnala",
    email: "priyanshi@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Staurday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "priyanshi@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "priyanshi@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());