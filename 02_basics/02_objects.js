// Object Literals 

const mySym = Symbol("Key1");

const JsUser = {
    name : "Sanjay",
   // mySym: "Key1",
   [mySym] : "Key1",
    "full name": "Sanjay Moyde",
    age : 23,
    location: "Indore",
    email:"sanjay@gmail.com",
    isLoggedIn : false,
    lastLoginDays :["Monday", "Tuesday"],  
}

//console.log(JsUser.name);
//console.log(JsUser["full name"]);
//console.log(JsUser.lastLoginDays[0]);

//console.log(typeof JsUser.mySym); // string

//console.log(JsUser[mySym])

JsUser.email = "sanjaymoyde@gmail.com"
//console.log(JsUser.email);

//Object.freeze(JsUser);

JsUser.email = "sanjayji@gmail.com" // after freese there will be no change in the object

//console.log(JsUser.email);


JsUser.greeting = function(){
    console.log("Hello There");
}

JsUser.greetingTwo = function(){
    console.log(`Hello, ${JsUser.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())






