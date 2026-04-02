

function sayMyName () {
console.log("s");
console.log("a");
console.log("n");
console.log("j");
console.log("a");
console.log("y");

}

//console.log(sayMyName)

//sayMyName()

function AddTwoNumbers(num1,num2){

    return num1+num2
}

//console.log(AddTwoNumbers(3,5));


function justLoggedIn (username = "sanjay"){ //if we want a default value username = "sanjay"

 //   if(username === undefined){
    if(!username){    //js takes every emty value as false 
        return "Please enter username"
        }
    return `${username} just logged in `
}

//console.log(justLoggedIn("Sanjay"))    //Sanjay just logged in 
//console.log(justLoggedIn(""))   // just logged in 

//console.log(justLoggedIn()) //undefined just logged in 
console.log(justLoggedIn("Sam")) //after condition: Please enter username 
