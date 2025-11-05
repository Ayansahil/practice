//if-else Questions:-

// a. Take input using prompt for age.
// If age > 18 → log “Adult”
//Else → log “Minor”

// let age = Number(prompt("Enter the Age"));
//if (age > 18) {
//   console.log("adult");
// } else {
//   console.log("minor");
// }

// b. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”

// let marks = Number(prompt("Enter the marks"));
// if (marks < 0 || marks > 100) {
//   console.log("wrong number");
// } else if (marks >= 90) {
//   console.log("A grade");
// } else if (marks >= 75) {
//   console.log("B grade");
// } else if (marks >= 50) {
//   console.log("C grade");
// } else {
//   console.log("Fail");
// }

// c. Create a variable city = “Bhopal”
// .
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”

// let city = "Bhopal";
// if (city === "Bhopal") {
//   console.log("Mp");
// } else if (city === "Delhi") {
//   console.log("capital");
// } else {
//   console.log("unknown city");
// }

// d. Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.

// let score =35;
// let result = score > 35 ? "pass" : "fail";
// console.log(result);

// e. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }

// let temperature = 30;
// let result = temperature > 30 ? "Hot" : "Pleasant";
// console.log(result);

// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”

// switch (8) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//default:
//     console.log("Invalid Day");
// }

// g. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”

// let age = Number(prompt("Enter your Age"));
// let country = prompt("Enter your Country");

// if (age > 18 && country === "India") {
//   console.log("Eligible for Vote");
// } else {
//   console.log("Not Eligible");
// }

// loops Questions:-

// 1. Print Numbers from 1-10
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// 2.Print  only even Numbers from 1-20
// for (let i = 1; i < 21; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 3.Print Numbers from 10-1 Reverse loop with the decrement

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// 4. Print the word "Yes" 5 times ?
// for (let i = 1; i <= 5; i++) {
//   console.log("Yes");
// }

// 5. Print number form 1-10 are even or odd

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is Even`);
//   } else {
//     console.log(`${i} is Odd`);
//   }
// }

// 6. Ask user for a number and say if it is positive or negative

// let num = +prompt("Enter a number");
// if (num >= 0) {
//   console.log("Positive");
// } else {
//   console.log("Negative");
// }

// 7.(i)Ask user’s age and check if eligible to vote
// // If age >= 18 → “Eligible”, else → “Not eligible”

// let age = prompt("Enter your age");
// if (age === null) {
//   console.error("Cancel daba diya");
// }
// else if (age.trim() === "") {
//   console.error("Bhai dhang se likhle");
// }
// else {
//   age = Number(age.trim());
//   if (isNaN(age)) {
//     console.error("Bhai pls number dede");
//   }
//    else if (age < 0) {
//     console.error("Voting age minus me nhi hoti");
//   }
//   else if (age >= 18) {
//     console.log(`Confirm voting age hai ${age}`);
//   }
//   else {
//     console.log(`Voting ke liye chhota hai ${age}`);
//   }
// }

// 7.(ii) Ask user’s age and check if eligible to vote
// // If age >= 18 → “Eligible”, else → “Not eligible”

// let age = +prompt("Enter your age");
// if (age >= 18) {
//   console.log("Eligible");
// } else {
//   console.log("Not Eligible");
// }

// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// for (let i = 1; i <= 10; i++) {
//   console.log(`5*${i}=${5 * i}`);
// }

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

// let count = 0;
// for (let i = 1; i <= 15; i++) {
//   if (i > 8) {
//     count++;
//   }
// }
// console.log("Numbers greater than 8 is:", count);

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

// let userPassword = prompt("Enter your password");
// let correctPassword = "password";

// if (userPassword === null) {
//   console.error("Cancelled");
// } else if (userPassword.trim() === correctPassword) {
//   console.log("Access Granted");
// } else {
//   console.log("Access Denied");
// // }

// Level 2 – Slightly Tougher but Logical:-

// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// let correctPassword = "password";
// let attempts = 3;
// for (i = 1; i <= attempts; i++) {
//   let userPassword = prompt("Enter your password");
//   if (userPassword === null || userPassword.trim() === "") {
//     console.error("cancelled");
//     break;
//   }
//   if (userPassword.trim() === correctPassword) {
//     console.log("Access Granted✅");
//     break;
//   } else if (i < attempts) {
//     console.warn(`you have ${attempts - i} attemps left:`);
//   } else {
//     console.error("Account locked ❌");
//   }
// }

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// let userWord;
// let yesCount = 0;
// while (true) {
//   userWord = prompt("Enter a word");

//   if (userWord === null) {
//     console.log("cancelled");
//     break;
//   }
//   if (userWord.toLowerCase() === "stop") {
//     break;
//   }
//   if (userWord.toLowerCase() === "yes") {
//     yesCount++;
//     console.log(`you type ${yesCount}:times`);
//   }
// }

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// for (let i = 1; i <= 50; i++) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
// }

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
// let sum = 0;
// for (i = 1; i <= 30; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//     sum += i;
//   }
// }
// console.log(`final sum from only odd numbers is:${sum}`);

// // 15. Keep asking number until user enters an even number
// // Use while loop. Stop only if input is even.

// let userNumber;

// while (true) {
//   userNumber = prompt("Enter a number");
//   if (userNumber === null) {
//     console.log("cancelled");
//     break;
//   }
//   let num = Number(userNumber);

//   if (isNaN(num)) {
//     console.log("Enter a valid number not words");
//     continue;
//   }

//   if (userNumber % 2 === 0) {
//     console.log(userNumber);
//     break;
//   }
// }

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// let start = +prompt("enter first number:");
// let end = +prompt("enter second number:");

// if (start > end) {
//   console.error("start cannot be bigger than end");
// }

// for (let i = start; i <= end; i++) {
//   console.log(i);
// }
