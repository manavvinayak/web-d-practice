let  arr = [1,2,3,4,5]
// array is also  a variable
console.log(arr[3])
console.log(arr[4])
arr[0] = 455;
console.log(arr[0])
console.log(arr)
// Arrays are mutable,their original memory can be changed
console.log(arr.toString())
console.log(arr.join(" & "))
console.log(arr.pop())
console.log(arr.push(3))
console.log(arr)
console.log(arr.splice(1,2))
// splice is used to extract the numbers from array ,first number is index 
console.log(arr.splice(3,4))