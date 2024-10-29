  const movies = ["Avtar", "Iron Man", " Parasite"]
 for(let i = 0; i < movies.length; i++) {
     console.log(movies)
 } 

// const movies = ["Avtar", "Iron Man", " Parasite"]
// for(let i = 0; i < 4; i++) {
//     console.log(movies)
// }

// for of function
// The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It allows you to loop through the values of an iterable object.
// Mnemonic: Think of "For Of" as "For Objects' Values."
const pens = ["jiffy", "parker", "trimax"]
for (const pen of pens) {
  console.log(pen)
}

// forEach Method
// The forEach method is an array method that executes a provided function once for each array element. It's a bit more functional and concise compared to traditional loops.

// Mnemonic: "For Each Element, Do This."
const avengers = ["Captain America", "Bucky", "Doctor Strange"]
avengers.forEach(avenger => {
   console.log(avenger)  

});