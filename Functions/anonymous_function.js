// Assignment of an anonymous function to the myFunc variable
//const myFunc = function(param1, param2, ...) {
    // Statements using param1, param2, ...
 // };
  
  // Anonymous function call
  // param1 value is set to arg1, param2 to arg2, ...
 // myFunc(arg1, arg2, ...);
 
// Anonymous function assigned to a variable
const greet = function(name,salutation) {
    return `${salutation} ${name}!`;
};

// Calling the anonymous function
console.log(greet("Vinayak","Heyo"))
console.log(greet("Vinayak","Bonjor"))
console.log(greet("Vinayak","GuteMorgan"))

// Recent language change
const price = (rate) => {  
    const display = `The price of xps 13 is around ${rate}`;
    return display;
}
console.log(price(120000))
// functions created in this way are called as arrow functions