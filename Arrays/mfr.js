 let arr = [2,3,5,9,11,4,91]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
//     console.log(newArr)
    
// }

let newArr = arr.map((e,index,array)=> {
    return e**2
})
console.log(newArr)


// Filter Function
const greaterThanEight = (e)=> {
    if (e> 8) {
        return true
}
return false;
}
console.log(arr.filter(greaterThanEight))

//Reduce Function
let arr2 = [3,4,5,6,5]
const red = (a,b) => {
    return a + b
}
console.log(arr2.reduce(red))
const red2 = (a,b) => {
    return a + b
}
console.log(arr2.reduce(red2, 5))

const red3 = (a,b) =>{
    return a*b
}
console.log(arr2.reduce(red3))