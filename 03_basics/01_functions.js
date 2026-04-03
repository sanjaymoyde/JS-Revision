

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
//console.log(justLoggedIn("Sam")) //after condition: Please enter username 


function calculateCartPrice (val1,val2, ...num1){ //if we don't know how may parameter we'll need
// we you rest operator ...num1
// if we have val1, val2 before the resto operator so the first two values will
// be in val1,val2 and the rest will go in num1

    return num1
}
//console.log(calculateCartPrice(20,30,40,50))

//after val1, val2
console.log(calculateCartPrice(20,30,40,50)) // [40,50]


//Objects in Function

const user = {
    username : "Sanjay",
    price : 999
}

function handleObject(anyobject){

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}


//handleObject(user)
// we can also directly pass any object

handleObject({
    username:"Sam",
    price:399
})


//Array in function

const mynewarray = [200,400,600]

function returnSecondValue (anyArray){
    console.log(anyArray[1]);
}

//returnSecondValue(mynewarray) 400

//can also give the array directly

returnSecondValue([1,3,4,5])
