// Write - Your - Code
let n = Number(prompt("Enter a number : "));
if  ( n%3 === 0 && n%5 === 0) {
  alert("FizzBuzz");
}
else if ( n% 5 === 0) {
  alert("Buzz")
}
else if ( n%3 === 0)
{
  alert("Fizz")
}
else {
  alert("Unexpected Input")
}