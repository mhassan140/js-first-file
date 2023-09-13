// // ****************(objects)***************object litrels
// const fullName = "HASSAN"
// const juser = {
//     name : "mohsin",
//     fullName : ["hassan"],
//     age : 30,
//     email : "mohsinhassan@google.com",
//     city : "karachi",
//     isLoggedIn : false,
//     lastLoggedIn : ["monday", "saturday"]
// }
// console.log (juser.email);
// console.log (juser["email"]);
// console.log (juser["fullName"]);
// console.log (juser);


// juser.email = "mohsinhassan@chatgpt.com"
// // Object.freeze(juser)
// juser.email = "hassan123@google.com"
// console.log (juser);

// juser.greeting = function(){
//     console.log ("hello js user");
// }
//     juser.greetingTwo = function(){
//         console.log (`hello js user${this.name}`);
// }
// console.log(juser.greetingTwo());
// console.log(juser.greeting());

// const tinderUser ={}

// tinderUser.id ="abc123"
// tinderUser.name = "mohsin"
// tinderUser.isLoggedIn = false
// // console.log (tinderUser);

// const regularUser = {
//     emial: "some@gmail.com",
//     fullName: {
//         userFullName:{
//             firstName: "mohsin",
//             lastName: "hassan",
//         }
//     }
// }
// console.log (regularUser.fullName.userFullName.firstName);

// const obj1 = {1 : "a" , 2: "b"}    first object
// const obj2 = {3 : "a" , 4: "b" }    second object
// const obj3 = { obj1,obj2 }      third object
// const obj3 = Object.assign({}, obj1,obj2) merge them together 
// const obj3 = {...obj1,...obj2} (spread meathod) this is second method to merge the object
// console.log (obj3)                       then console

// de structures objects
const course= {
    coursename : "js in urdu",
    coursefee : "999",
    courseInstructor: "hitesh"
}
const {courseInstructor} = course
console.log(courseInstructor);


// json   stands for "java script objects notation"
// some api in array and objects/
// {
// "name" : "mohsin"
// "courseName": "js in hindi"
// "courseFee": "free"
// }



