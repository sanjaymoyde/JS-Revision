




// const tinderUser = new Object();

const tinderUser = {
    id: "123abc",
    name: "Sanjay",
    isLoggedIn: false
}
//console.log(tinderUser);

const regularUser = {
    email:"Sanjay@gmail.com",
    fullName: {
        userFullName:{
            firstName:"Sanjay",
            lastName:"Moyde"
        }
    }
}

//console.log(regularUser.fullName.userFullName.firstName)


const obj1 = { 1: "a", 2: "b"};
const obj2 = { 3: "c", 4: "d"};

// const obj3 = { obj1, obj2};
// console.log(obj3)  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign(obj1,obj2);  // first arg is target, second and other args are source so they all merge in target
// const obj3 = Object.assign({},obj1,obj2); // better syntax that we took a emty target and put all are sources into it


// what we will use mostly is spread operator 

const obj3 = {...obj1,...obj2} // easiest to use 

//console.log(obj3)

const User = [
    {
        name:"sanjay",
        email:"sanjay@gmail.com"
    },
    {
        name:"raj",
        email:"raj@gmail.com"
    },
]

//console.log(User[1].email) // raj@gmail.com

//console.log(tinderUser)

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name')) // checks if it contains this property or not return boolean 

