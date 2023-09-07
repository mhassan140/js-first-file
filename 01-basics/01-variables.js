// const accountId = 144553
// let accountEmail = "mohsin@google.com"
// var accountPassword ="12345"
// accountCity = "karachi"
// let accountState;

// accountId = 2 not allowed
/*
now modern day programing is use let and const not var bcz of
block scope and functional scope
*/
// console.log(accountId);
// accountEmail = "hassan@goole.com"
// accountPassword = "1222122"
// accountCity = "lahore"
// console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// let name = "mohsin"
// let age = 18

// let isLoggedIn = false
// (types of datatypes )
// number => 2 power 53
// bigint when you have bigger website
// string => ""
// boolean true/false
// null => standalone value
// undefined => 
// symbol => unique
// object => 
// console.log(typeof age);
// console.log (typeof null); objec
// console.log (typeof undefined); undifined

// conversion of datatypes
// let score = 33
// console.log (typeof score); 1 method
// console.log(typeof(score))  2method

//  let valueinNumber =(Number(score))
//  console.log(typeof valueinNumber)
// console.log (valueinNumber);
// "33" => 33
// *"33abc" => Nan
// true => 1
// false => 0
// let isLoggedin =1
// let booleanisLoggedin = Boolean(isLoggedin)
// console.log (booleanisLoggedin);
// 1 => true; false =>0
// "" => false
// "mohsin" => 
// *
// let someNumber = 33 
// let stringNumber = String(someNumber)
// console.log (stringNumber);
// console.log (typeof stringNumber);
// *******************opperation***************************
// let value =3
// let negValue = -value
// console.log (negValue);
// console.log (2+2);
// console.log (2-2);
// console.log (2*2);
// console.log (2**2);
// console.log (2/2);
// console.log (2%2);

// how to merge two values
// let str1 ="mohsin"
// let str2 =" hassan"
// let str3 =str1 + str2
// console.log (str3);

//  let gameCounter = 100
//  ++gameCounter; prefix
//  gameCounter++  postfix
//  console.log (gameCounter);

// *****************comparisons************
// console.log (2>1);
// console.log (2>=1)
// console.log (2<1);
// console.log (2!=1);
// console.log (2==1);
// console.log (2===2); this is strict equal this datatype is check your value strictly

// primitive datatype 7types
// String,number,boolean,null,undefined,symbol,bigInt

// refrence type (non primitive)
// Array,object,functions

// const score = 100   this is number
// const scoreValue = 100.3 this is also a number bata type 
// const isLoggedIn = false this is boolean
// const outsideTemp= null  this is empty
// let userEmail; this is simply undefined
//  const id = Symbol("123")
//  const anotherId = Symbol("123")
//  console.log (id === anotherId);

//  const bigNumber = 3445676556557n this is bigInt

// refrence (non-primitive)
// array, function, object  

// const cities = ["lahire","karachi","islamabd"]; this is Array
// let myObj = {
//    name: "mohsin",
//    age: "30",
// }                 this is Object
// const myFunction = function (){
    // console.log ("hello world");
// }

// memory in java script there is two types of memory in js
// 1 stack(primitive) 2 heap(non primitive) 

// *let myYoutubename = "mohsinhassandotcom"
// let anothername = myYoutubename
// anothername = "abcdotcom"

// console.log (myYoutubename);
// console.log (anothername);

// let userOne = {
    // email:"user@gogle.com",
    // upi:"user@ybl"
// }
// let userTwo = userOne
// userTwo.email ="mohsinhassandotcom"

// console.log(userOne.email);
// console.log(userTwo.email);
 
// strings***********************
// const userName = "mohsin"
// const repoCount = 50
// console.log(userName + repoCount); old prctice
// console.log(`hello my name is ${userName} and my repo count is ${50}`);new practice
// ******************nums and maths****************
 
const min =10
const max =20
console.log(Math.floor(Math.random()*(max - min + 1)) + min)


