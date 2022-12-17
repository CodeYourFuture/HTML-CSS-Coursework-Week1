// const getTruthiness = (value) => (value ? "Truthy!" : "Falsy");
// getTruthiness(null);
// getTruthiness('0');
// getTruthiness(null == undefined);
// getTruthiness(null === undefined);
// null == undefined;
// null === undefined;
// let thisUndefinedVariable;
// let thisNullVariable = null;
// console.log("0" && "Mark");
// console.log("0" || "Mark");

// console.log(0 && "Mark");
// console.log("0" && "Mark");

// let s ="";
// console.log(s.length || "s is not a string!")

// const mentor1 = "Daniel";
// const mentor2 = "Irina";
// const mentor3 = "Rares";

// function isMentor(name) {

//     if (mentor1 === name || mentor2 === name || mentor3 === name  ){
//        console.log("Yes" + name + "is a mentor");
//     }
//     else{
//         console.log("No" + name + "is not a mentor!")

//     }
// }

// const listOfMentor = ["Daniel", "Rares", "Irina"];

// const listOfMentor = [
//     "Daniel",
//     "Rares",
//     "Irina"
// ];

// console.log(listOfMentor[0]);
// console.log(listOfMentor[2]);
// console.log(listOfMentor[1]);

// listOfMentor[1] = "Tony";

// console.log(listOfMentor[1]);

//  const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];
 
//  console.log(fruits[2]);
//  console.log(fruits[3]);
//  console.log(fruits[5]);
//  console.log(fruits[0]);

//  fruits[1] = "raspberry";
//  fruits[4] = "pineapple";

//  console.log(fruits);

// const listOfNames = [
//     "Daniel",
//     "Amy",
//     "Rares"
// ];

// function secondMatchesAmy(array) {
//   if (array[1] === "Amy") {
//     return "Second element matched!";
//   }
//   return "Second element not matched";
// }

// console.log(secondMatchesAmy(listOfNames));
// console.log(secondMatchesAmy(["a", "Tony", "c"]));
 

// const daysOfWeek = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// for (let i = 0; i < daysOfWeek.length; i++) {
//   const dayMessage = "day is: " + daysOfWeek[i];
//   const indexMessage = "index is: " + i;
//   console.log(indexMessage, dayMessage);
// }
 
// const listOfMentors = [
//     "Daniel",
//     "Rares",
//     "Irina",
//     "Tony",
//     "John",
//     "Adam"
// ];

// function printAllMentors(){
//     for (let index = 0; index < listOfMentors.length; index++) {
//         console.log(listOfMentors[index]);
//     }
// }
// printAllMentors();

// function isMentor(name) {

//     if (listOfMentors[0] === name || listOfMentors[1] === name || listOfMentors[2] === name || listOfMentors[3] ===name ){
//        console.log("Yes" + name + "is a mentor");
//     }
//     else{
//         console.log("No" + name + "is not a mentor!")

//     }
// }

// const listOfTrainees = [
//     "Liz",
//     "Alice",
//     "Mary",
//     "Tony",
//     "John",
//     "Adam"
// ];

// function printAllTrainees(array) {
//     for (let index = 0; index < array.length; index++) {
//         console.log(array[index]);
//     }
//     // for (const trainee of ) {
        
//     // }
// }
// printAllTrainees(listOfTrainees);

// const daysOfWeek = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// function workingDay(day) {
//   return day + " is a working day";
// }

// function weekendDay(day) {
//   return day + " is at the weekend!";
// }

// for (let i = 0; i < daysOfWeek.length; i++) {
//   if (i < 5) {
//     let day = workingDay(daysOfWeek[i]);
//     console.log(day);
//   } else {
//     let day = weekendDay(daysOfWeek[i]);
//     console.log(day);
//   }
// } 

// const monthsOfYear = [
  
//   "December",
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "Augst",
//   "September",
//   "October", 
//   "November"
// ];

// function winterSessions(month) {
//   return month + " is a Winter!";
// }

// function springSessions(month) {
//   return month + " is a Spring!";
// }

// function summerSessions(month) {
//   return month + " is a Summer!";
// }

// function autmnSessions(month) {
//   return month + " is a Autmn!";
// }

// for (let i = 0; i < monthsOfYear.length; i++) {
//   if (i < 3) {
//     let month = winterSessions(monthsOfYear[i]);
//     console.log(month);
//   } else if(i >= 3 && i < 6) {
//     let month = springSessions(monthsOfYear[i]);
//     console.log(month);
//   }
//   else if(i >= 6 && i < 9 ) {
//     let month = summerSessions(monthsOfYear[i]);
//     console.log(month);
//   }
//   else{
//     let month = autmnSessions(monthsOfYear[i]);
//     console.log(month);
//   }
// }
