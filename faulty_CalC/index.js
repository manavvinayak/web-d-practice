// create a faulty calculator using js
// this faulty calculator does following
// 1. It takes two numbers as input from the user
// 2. it performs wrong operations
// + -> -
// * -> +
// - -> /
// / -> **

// it performs 10% of wrong operation 
// note: download prompt sync module first by running npm install prompt-sync
// in the terminal
const prompt = require("prompt-sync")();
let a = Number(prompt("Enter your number 1 "));
let b = Number(prompt("Enter your number 2 "));
// Random Number

let random = Math.random();

let addition = a+b ;
let Subtraction = a-b;
let Multiplication =a*b;
let Division= a/b;
let Exponentiation = a**b;

// Condition
if (random <0.1){
    console.log("Addition Calculation : " , a-b) ;
    console.log("Subtraction Calculation : " , a/b) ;
    console.log("Multiplication Calculation : " , a+b );
    console.log("Division Calculation : " ,a**b ) ;
}

else{ 
    console.log("Addition Calculation : " , a+b) ;
    console.log("Subtraction Calculation : " , a-b) ;
    console.log("Multiplication Calculation : " , a*b );
    console.log("Division Calculation : " ,a**b ) ;
}
