let random = Math.random()
console.log(random)
let a = prompt("Enter First Number ")
let c = prompt("Enter Operation ")
let b = prompt("Enter Second No ")


let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/ ": "**",
}

if ( random > 0.1){
    // It will perform wrong calculation
    console.log(`The result is ${a} ,${c}, ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)


}

else
{
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}









