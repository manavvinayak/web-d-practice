// function nice(name) {
//     console.log("HEy " + name + " You are nice!")
//     console.log("HEy " + name + " Welcome to functions in js!")
//     console.log("HEy " + name + " you are nice")
//     console.log("HEy " + name + " how are you")
//     console.log("HEy " + name + " Welcome to Jumanji")
    
// }
// nice("Ajay")

function sum(a,b, c = 4){
    // console.log( a + b)
    return a+ b+ c;
}
result1 = sum(3,6);
result2 = sum(67,6);
result3 = sum(97,6,1);
// we can easily change the parameter also

console.log("The sum of these numbers is " ,result1)
console.log("The sum of these numbers is " ,result2)
console.log("The sum of these numbers is " ,result3)