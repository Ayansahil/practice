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

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// let count = 0;
// for (let i = 1; i <= 20; i++) {
//   if (count === 3) break;
//   if (i % 2 !== 0) {
//     console.log(i);
//     count++;
//   }
// }

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// let counter = 0;
// for (i = 1; i <= 5; i++) {
//   let askUser = +prompt("enter a number");
//   if (askUser >= 0) {
//     counter++;
//   }
// }
// console.log(counter);

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

// let balance = 1000;
// let flag = false;
// let counter = 0;

// while (balance > 0 && counter !== 3) {
//   let withdraw = +prompt("enter withdrawal amount");
//   counter++;
//   if (withdraw <= balance) balance -= withdraw;
//   else {
//     flag = true;
//     break;
//   }
// }

// if (flag === true) {
//   console.log("Insufficient balance");
// }

// console.log(`Balance: ${balance}`);

// 🟢 Level 1 – Basic Function, Array & Object Code
// Tasks (Easy)

// Q1.Create a function that prints "Hello Javascript".

// function hello() {
//   console.log("Hello Javascript");
// }
// hello();

//Q2. Create a function that takes two numbers as parameters and returns their sum.
// function add(a,b){
//     return a+b;
// }

// console.log(add(10,20));

//Q3.Make a function with a default parameter that prints "Hi" followed by the name passed to it. If no name is passed, it should print "Hi Guest".

// function greeting(a="Guest"){
//     console.log(`Hi ${a}`);
// }
// greeting();
// greeting("Ana");

//Q4. Use rest parameters to make a function that adds unlimited numbers.
//  (1)
// function Addunlimited(...nums) {
//     let sum=0;
//   nums.forEach(function (val) {
//     sum += val;
// });
// console.log(sum);
// }
// Addunlimited(1, 2, 3);

// (2)

// function Addunlimited(...nums) {
//   let ans = nums.reduce(function (acc, val) {
//     return acc + val;
// }, 0);
// console.log(ans);
// }
// Addunlimited(1, 2, 3,4);

// Q5.Create an IIFE that prints "I run instantly!".
// (function(){
//     console.log("I run instantly!");
// }())

// Q6.Make a nested function where the inner one prints a variable from the outer one.

// function parent() {
//   let a = 20;
//   function child() {
//     console.log(a);
//   }
//   child();
// }
// parent();

//Q7.Create an array of 5 fruits. Add a fruit to the end and another to the beginning.

// let fruits=["Apple","Mango","Banana","Orange","Grapes"]
// fruits.push("guava");
// fruits.unshift("Pineapple");
// console.log(fruits);

//Q8.Use a for loop to print all elements of an array.

// let arr=[1,2,3,4,5,6,7,8,9,10];
// for (i=0;i<arr.length;i++){
//     console.log(arr[i]);

// }

//Q9. Create an object person with keys name, age and city and print each key's value.

// let person = {
//   name: "Ayan",
//   age: 23,
//   city: "Bhopal",
// };

// // console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

//Q10. Use setTimeout to log "Time's up!" after 2 seconds.

// setTimeout(function () {
//   console.log("Time's up!");
// }, 2000);

// 🟡 Level 2 – Functional Thinking & Logic Tasks
// (Intermediate)

// 1. Write a higher-order function`runTwice(fn)` that takes another function and executes it two times.

// function runTwice(fn) {
//   fn();
//   fn();
// }
// runTwice(function () {
//   console.log("Hello");
// });

// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.

// function pureFunction(x, y) {
//   return x + y;
// }

// let ans = pureFunction(2, 3); // always returns 5 for same inputs
// console.log(ans);

// let globalVar = 10;

// function impureFunction() {
//   return globalVar + Math.random();
// }

// console.log(impureFunction());
// console.log(impureFunction());

// 3. Write a function that uses object destructuring inside parameters to extract and print `name` `age`.

// function info({ name, age }) {
//   console.log(`Name: ${name}`);
//   console.log(`Age: ${age}`);
// }

// let person = {
//   name: "Ayan",
//   age: 23,
// };

// info(person);

// 4. Demonstrate the difference between normal function and arrow function when used as object methods (the`this` issue).

// function normal() {
//   person1 = {
//     name: "Ayan Sahil",
//     talk: function () {
//       console.log(`Mera naam ${this.name} hai`);
//     },
//   };
//   person1.talk();
// }

// let arrow = () => {
//   person2 = {
//     name: "Ayan Sahil",
//     talk: () => {
//       console.log(`Mera naam ${this.name} hai`);
//     },
//   };
//   person2.talk();
// };

// normal();
// arrow();

//Ans:
//(i)Object methods par Normal function use karte hai to this ki value aati hai object ke barabar
//(ii)Object methods par Arrow function use karte hai to this ki value aati hai window ke barabar
// “Arrow functions don’t have their own this, they inherit it from their outer scope.”

// 5. Given an array of numbers, use`map()` to create a new array where each number is squared.

// let arr = [1, 2, 3, 4, 5];
// let newArray = arr.map(function (val) {
//   return(val * val);
// });
// console.log(newArray);

// 6. Us`filter()` to get only even numbers from an array.

// let arr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// let evenNumbers = arr.filter(function (val) {
//   return val % 2 === 0;
// });

// console.log(evenNumbers);

// 7. Use`reduce()` to find the total salary from an array of numbers`[1000, 2000, 3000].

// let arr = [1000, 2000, 3000];

// let totalSalary = arr.reduce(function (acc, val) {
//   return acc + val;
// },0);
// console.log(totalSalary);

// 8. Create an array of names and use `some()`and `every()` to test a condition (e.g., all names longer than
// 3 chars).

// let names=["Ana","Ayan","Aman","Rehan","Anas"];

// let some=names.some(function(val){
// return val.length>3;
// });

// let every=names.every(function(val){
// return val.length>3;
// });

// if(some && every){
//     console.log("All names are longer than 3 chars");
// }
// else if(some){
//     console.log("Some names are longer than 3 chars");
// }
// else{
//     console.log("No names are longer than 3 chars");
// }

// 9. Create an object `user` and test the behavior of `Object.freeze()`and `Object.seal()` by adding/changing keys.

// let user = {
//   name: "Ayan",
//   age: 23,
//   city: "Bhopal",
// };

// Object.freeze(user);
// user.name = "Sahil"; user.country = "India"; will not change or not update
// console.log(user);

// Object.seal(user);
// user.age = 24; // will update but not add any user.country = "India"; will not add new key
// console.log(user);

// 10. Create a nested object (`user → address → city`) and access the city name inside it.

// let personInfo = {
//   user: {
//     name: "Ayan",
//     address: {
//       city: "Bhopal",
//     },
// },
// };
// let{city}=personInfo.user.address;
// console.log(city);

// SECTION 1: Advance Javascript, Objects and OOPS Thinking (Foundation)

//i. Create a user object that stores name and email and has a login method which prints “User logged in”.
//ii. Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

//i.
// let user = {
//   name: "Ayan",
//   email: "abc@g.com",
//   login: function () {
//     console.log("User logged in");
//   },
// };
// user.login();

//ii.
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   loggedIn() {
//     console.log("User logged in");
//   }
// }
// let user1 = new User("Ayan", "abc@g.com");
// let user2 = new User("Ayan", "abc@g.com");
// let user3 = new User("Ayan", "abc@g.com");
// let user4 = new User("Ayan", "abc@g.com");
// let user5 = new User("Ayan", "abc@g.com");

//2. Create a product object that stores name and price and has a method which returns the final price after discount.

// let product = {
//   name: "Maruti Suzuki",
//   price: 10000,
//   dicountedPrice: function () {
//     return this.price - 6000;
//   },
// };
// console.log(product.dicountedPrice());

// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.

// SECTION 2: (Classes and Objects)

//3. i.Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed

//ii.Create two different car objects from the same class and verify that their data is different.

// class Car {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//   }
//   drive() {
//     return this.brand + " - " + this.speed;
//   }
// }

// let car1 = new Car("Thar", 200);
// let car2 = new Car("Scorpio", 240);

//4. Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

// Problems with Large Projects:-
// Code Duplication: Har object ke liye functions dobara likhne padenge.
// Maintainability: Code ko maintain karna mushkil hoga kyunki har object ke liye alag functions honge.
// Scalability: Project badhne par, code organize karna aur manage karna mushkil hoga.
// Reusability: Code ko reuse karna mushkil hoga kyunki har object ke liye alag functions honge.
// 💡 Tip
// Classes use karne se code organized, reusable, aur maintainable banta hai, specially large projects ke liye.

// SECTION 3: Constructor and this keyword :

//5. Create" a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.

// Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.

// class Student {
//   constructor(name, rollNumber) {
//     this.name = name;
//     this.rollNumber =rollNumber;
//   }
//   introduce() {
//     return this.name + " " + this.rollNumber;
//   }
// }
// let st1 = new Student("Sahil", 23);

// Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// Inside both, print this and observe the difference

// let obj = {
//   sayName: function () {
//     console.log(this);
//   },
//   sayArrowName: () => {
//     console.log(this);
//   },
// };
// obj.sayName();
// obj.sayArrowName();

// The goal is to clearly understand how this works and when it global!

// SECTION 4: Constructor Functions and Prototypes

//6. Create a User constructor function (do not use class syntax).
// Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype

// function User() {
//   this.name = "Ayan";
// }
// User.prototype.login = function () {
//   console.log("loggin");
// };
// let an1 = new User();
// console.log(an1);

// Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

// function User(val) {
//   this.name = val;
// }

// User.prototype.loggedin = function () {
//   console.log("User loggedin");
// };

// let user1= new User("Ayan");
// let user2= new User("Sahil");

// The purpose here is to understand how prototypes help share behaviour on efficiently.

// SECTION 5: call, apply, bind

// Create a function that prints this.name.
// Create an object that contains a name property.

// Use call to run the function using the object
// Use apply to run the function using the object
// Use bind to create a new function and then call it
// Borrow a method from one object and run it for another object using call.

// function abcd(a,b,c) {
//   console.log(this.name);
// }
// let obj = {
//   name: "Ayan Sahil",
// };
// abcd.call(obj);
// abcd.apply(obj,[1,2,3])
// let bind= abcd.bind(obj);
// bind();

// The goal is to understand how this can be manually RA

// Level 1 (Simple Callback)

//Q1. Ek function registerUser banao jo username input le aur callback ko call kare. Callback ka kaam hai “User registered” print karna.

// function registerUser(username, cb) {
//   console.log("Registering user...");
//   setTimeout(() => {
//     cb(username);
//   }, 2000);
// }

// registerUser("Ayan", function (data) {
//   console.log("User registered", data);
// });

// Level 2 (2-level nested callback)

//Q2. Aisa code banao jisme:
// registerUser → user register kare
// phir callback me sendEmail call ho
// sendEmail ka callback success message print kare

// function registerUser(username, cb) {
//   setTimeout(function () {
//     console.log("user register...");
//     cb(username);
//   }, 2000);
// }

// function sendEmail(user, cb) {
//   setTimeout(function () {
//     console.log("send email to", user);
//     cb(user);
//   }, 3000);
// }

// registerUser("Ayan", function (user) {
//   sendEmail(user, function () {
//     console.log("all done ✅");
//   });
// });

// Level 3 (3-level nested callback)
//Q3. Aisa flow banao:
// registerUser
// sendEmail
// saveToDatabase
// Final callback: “Onboarding Complete” print kare

// function registerUser(username, cb) {
//   setTimeout(function () {
//     console.log("user register...", username);
//     cb(username);
//   }, 1000);
// }

// function sendEmail(user, cb) {
//   setTimeout(function () {
//     console.log("send email to", user);
//     cb(user);
//   }, 1000);
// }

// function saveToDatabase(savedata, cb) {
//   setTimeout(function () {
//     console.log("user saved to database",savedata);
//     cb(savedata);
//   }, 2000);
// }

// registerUser("Ayesha", function (user) {
//   sendEmail(user, function () {
//     saveToDatabase(user, function () {
//       console.log("Onboarding Complete✅");
//     });
//   });
// });
