const books = ["Atomic Habits", "Chronicals","Drive"]
// You add a new item to an array with the push() method. The new element to be added is passed as a parameter to the method. It is inserted at the end of the array
books.push("The Sign of Four")
console.log(books)

// To add an element at the beginning of an array, use the unshift() method instead of push().
const laptop = ["Mac", "Dell XPS", "HP Victus"]
laptop.unshift("Lenovo Axus")
// For removing the last element in an array,use pop function
laptop.pop()
console.log(laptop)

// Alternatively, you can use the splice() method with two parameters: the first one is the index from which to begin removing, and the second one is the number of elements to remove.
const apps = ["Chrome","Youtube","Github","PopSQL"]
apps.splice(1,2)
console.log(apps)

