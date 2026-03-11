let myDate = new Date();

//console.log(typeof myDate); //Object

//console.log(myDate);  //2026-03-11T01:25:56.548Z
//not readable that much

//console.log(myDate.toString()); 
// Wed Mar 11 2026 01:26:51 GMT+0000 (Coordinated Universal Time)

//console.log(myDate.toLocaleString()) 
// 3/11/2026, 1:27:43 AM
// much more readable

//console.log(myDate.toDateString()); //Wed Mar 11 2026

//console.log(myDate.toISOString()) //2026-03-11T01:28:31.321Z

//console.log(myDate.toLocaleDateString()) // 3/11/2026

//let myCreatedDate = new Date(2026, 0, 24); // 1:Year, 2:Month(index start from 0),3: Day
//console.log(myCreatedDate.toLocaleString()); //1/24/2026, 12:00:00 AM

// let myCreatedDate = new Date(2026, 2, 24,3,30); 
// 1:Year, 2:Month(index start from 0),3: Day , 4: Hours, 5:Minutes
//console.log(myCreatedDate.toLocaleString()); // 3/24/2026, 3:30:00 AM

let myCreatedDate = new Date("01-14-2026"); 
//console.log(myCreatedDate.toLocaleString()); //1/14/2026, 12:00:00 AM

let myTimeStamp = Date.now();

//console.log(myTimeStamp); // we get the timestamp in miliseconds
//console.log(myCreatedDate.getTime()); // we get the timestamp in miliseconds

let newDate = new Date();

//console.log(newDate); //2026-03-11T01:41:47.994Z
//console.log(newDate.getMonth()); //2 (March:2 not 3 because index start from 0)
//console.log(newDate.getMonth()+1); //3 (can add +1 for user readability)

console.log(newDate.toLocaleString('default',{
    weekday:'narrow'
})) // long: Wednesday, short:Wed, narrow: W










