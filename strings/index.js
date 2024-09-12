console.log("This is strings tutorial!");
let a = "Vinayak";
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a.length)

let real_name = "Samtosh";
let friend = "Raaj"

console.log("my name is " + real_name + " and my friend name is " + friend  )
// Template Letrals gives the benifits of using inverted commas and double quotes in the sentence
console.log(`my name is ${real_name} and my friend's name is ${friend}` )

let b = "Bindusara";
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(2,6))
// here in slicing a string, 2 is included while 6 is not included
console.log(b.slice(1))

console.log(b.replace("B","Ph"))
console.log(b.concat(a, "Sadashiv", "Tanhaji"))
console.log(b.startsWith("Bi"))
console.log(b.startsWith("aw"))
console.log(b.endsWith("ra"))
console.log(b.endsWith("oyr"))
console.log(b.charAt(3))

// Strings are immutable, they can not be changed originally,they can be used to form a new string 
console.log(b)