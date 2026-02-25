const accountId = "sm@website.com"
let accountEmail ="sanjay@gmail.com"
var accountPassword = "12345" 
accountCity = "Indore"

let accountState;


//accountId = "sanjay@moyde"  //not allowed


/*
prefer not to use var
because of the issue in block scope and functional scope
*/
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])