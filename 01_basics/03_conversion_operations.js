//Data Type Conversions

let score =  false//true//"sanjay"//null //"22abc"

//console.log(typeof score) // 33 -> number
//console.log(typeof score);

let valueInNumber = Number(score)

//console.log(typeof valueInNumber); //number
//console.log(valueInNumber)


// "33" => 33
//"33abc" => NaN
//true => 1 ; false => 0

//Boolean conversion

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(booleanIsLoggedIn);
// 1 => true
// 0 => false
// "" => false
//"sanjay" => true

let somenumber = 23

let stringNumber = String(somenumber)

//console.log(typeof stringNumber)

//console.log(stringNumber);


//*************  Comparison *************/

//console.log("2" > 1); //true
//console.log(1 < "2"); // true

// console.log(null > 0) // false
// console.log(null == 0) // false
// console.log(null >= 0) //true

/* THE REASON is that an equality check == and comparisons > < >= <= works 
differently.

Comparison covert null to a number and treat it as 0.
that's why the 3rd null >= 0 is true,
and 1st null > 0 is false
*/

// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); //false

// === checks value and datatypes 

// console.log("2" == 2) // true because of type conversion
// console.log("2" === 2) // false because there's no type conversion

