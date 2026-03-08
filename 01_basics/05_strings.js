const name = "Sanjay"

const repoCount = 12

//console.log(name + repoCount + "Value");

//String Interpolation

//console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Sanjay-hc')

//console.log(gameName[0]) //S
//console.log(gameName.__proto__); //{} prototype
//console.log(gameName.toUpperCase()); //SANJAY-HC

//console.log(gameName.charAt(3)); //j
//console.log(gameName.indexOf('j')); //3

const newString = gameName.substring(0,4); // should not use negative values here
//console.log(newString);

const anotherString = gameName.slice(-8,4); //can you negative values 
//console.log(anotherString);

//trim : It will remove the white spaces and line terminators like /n
const newStringOne = "    Sanjay       "
//console.log(newStringOne)
//console.log(newStringOne.trim());

const url = "https://sanjay.com/sanjay%20moyde"

console.log(url.replace("%20","-")) //https://sanjay.com/sanjay-moyde

console.log(url.includes('sanjay.com'));//returns boolean value

const StringSplit = "Sanjay-Moyde-0001"

console.log(StringSplit.split('-'))




