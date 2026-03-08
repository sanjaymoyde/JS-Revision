//Numbers

const score = 400
//console.log(score); //400

const balance = new Number(100); 

//console.log(balance);//[Number: 100]

//toString convert it into string so we can use string attributes and methods
//console.log((balance.toString()).length) //3 

//console.log(balance.toFixed(1)); //100.0

const anotherNumber = 123.897435

//console.log(anotherNumber.toPrecision(5)); 123.90

const hundreds = 1000000

//console.log(hundreds.toLocaleString()); //1,000,000 (default US)

//console.log(hundreds.toLocaleString('en-IN')); //10,00,000 (Indian way)


//MATHS

console.log(Math)  //Object [Math] {}

//abs => absolute value means positive value 

//console.log(Math.abs(-34)) // 34 it will covert the negative value into positive

//round
//console.log(Math.round(4.8))// 5 It will round figure the value 
//console.log(Math.round(4.3))// 4 It will round figure the value 

// ceil => it will take the higher value suppose we have 4.1 then it is convert it into 5
//console.log(Math.ceil(4.2)); //5
//console.log(Math.ceil(4)); //4

//floor => it will take the minimum value or we can say that just took the value before the decimal 

//console.log(Math.floor(4.9)); //4

//min
//console.log(Math.min(3,4,7,4,29,7)) //3

//max
//console.log(Math.max(3,4,7,4,29,7)) //29

//random

//console.log(Math.random()); // it will randomly give value b/t 0-1
//console.log(Math.random()*10); // it will randomly give value b/t 0-9

//console.log((Math.random()*10)+1); // it will randomly give value b/t 1-10

//console.log(Math.floor((Math.random()*10)+1)); // it will randomly give value b/t 1-10 without decimal values

// suppose we want values between these two
const min = 10;
const max = 20;

value = Math.floor((Math.random()*(max-min)) + min)
console.log(value)














