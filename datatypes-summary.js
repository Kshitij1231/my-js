// Primitive Datatypes
// 7 types: String,Number,Boolean,Null,Undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.9

const isLoggedIn = false
const outsideTemp = null

let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
// console.table([score,scoreValue,isLoggedIn,outsideTemp,userEmail,id,anotherId]);
console.log(id===anotherId);

//  const BigNumber = 3556788978n

// Reference(Non Primitive) Datatypes
// Array,Object,Functions

const heroes =["shaktiman","nagraj","doga"]
let myObj ={
name: "Kshitij",
age:35,
}
const myfunction =function(){
    console.log("Hello World");   
}
console.log(typeof myfunction);
