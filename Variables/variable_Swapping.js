let number1 = 5;
let number2 = 3;

let temp = number1;
number1 = number2;
number2 = temp;
console.log(number1); // Should show 3
console.log(number2); // Should show 5