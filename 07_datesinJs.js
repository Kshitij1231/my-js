// Dates
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
 
// let myCreatedDate = new Date(2023,0,24)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date (2024,1,9,12,15)
// let myCreatedDate = new Date ("2024-01-6")
let myCreatedDate = new Date ("01-14-2025")
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getUTCDay());

// '${newDate.getMonth()} and the time'

newDate.toLocaleString('default',{
    weekday: "long"
})

