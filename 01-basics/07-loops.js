// for (let index = 0; index <=10; index++) {
//     const element =index;
//     console.log (element);
// }


// for (let index = 0; index <=10; index++) {
//     const element =index;
//     if (element  == 5) {
        // console.log ("5 is best number");
        
    // }
    // console.log (element);
// }

// for (let i = 0; i <=10 ; i++) {
//     console.log(`outer loop value :${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`inner loop value:${j} and inner loop ${i}`);
//         console.log (i + '*' + j + ' = ' + i*j);
        
//     }
    
// }

// let myArray = ["mohsin", "azeem", "waleed"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log('detected 5');
//         break
//     }
// console.log(`value of i is ${index}`);
    
// }


// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log('detected 5');
//         continue
//     }
// console.log(`value of i is ${index}`);
    
// }

// while loop
// let index = 0 
// while (index <= 10) {
//     console.log (`value of index is ${index}`);
//     index = index + 2
    
// }

// let myArray = ["salah", "fatima", "mohsin"]

// let arr = 0
// while (arr < myArray.length) {
//     console.log(`value is ${myArray[arr]}`);
//     arr = arr + 1
    
// }


// do while loop

// let score = 10 
// do {
//     console.log(`score is ${score}`);
//     score++
// } while (score <= 10);


// for of loop

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
    
// // }


// const greeting = "hello how are you"
// for (const greet of greeting) {
//     console.log(`each char is ${greet}`)
    
// }


// maps

// const map = new Map()
// map.set ('PAK', "pakistan")
// map.set ('USA', "united cstates of america")
// map.set ('FR', "france")
// // console.log(map);
// for (const [key, value] of map) {
//     console.log(key, ':-', value);
    
// }
// for in loop
// const myObject = {
// js: "java script",
// cpp: "c++",
// rb: "ruby",
// swift: "swift by apple"
// }
// for (const key in myObject) {
// //    console.log(key);
// //     console.log(myObject[key]);  
//     console.log(`${key} shortcut is for ${myObject[key]}`);  
//     }

// const programing = ['js', 'java', 'ruby', 'py', 'swift']
// for (const key in programing) {
//    console.log(programing[key]);
    
// }

// for each loop


// const coding = ['js', 'java', 'ruby', 'swift',]
// coding.forEach( function(item,index,arr){     this is call back function
// // coding.forEach ( (item)=>{}) this is arrow function

// // } )
// console.log(item,index,arr);
// })

// const myCodding = [
//     {
//         languageName: "javaScript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
// ]
// myCodding.forEach(function (item){
//     console.log(item.languageName);

// })

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num)=>num >5)
// console.log(newNums);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = []
// myNums.forEach( (num)=>{
//     if (num >4) {
//         newNums.push(num)
//     }

// })
// console.log(newNums);

// const myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.map( (num)=> num  + 10)
// console.log(newNums);


// chaining
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums
//                  .map( (num)=> num * 10)
//                  .map( (num)=> num + 1)
//                  .filter( (num) => num >= 40) .filter condition depends on true /false 
//                  console.log(newNums);

// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function(acc , currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
// return acc + currval
// }, 0)
// console.log(myTotal);

// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce( (acc,currval)=>acc+currval,0)
// console.log(myTotal);
