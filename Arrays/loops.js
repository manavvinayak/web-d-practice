let a = [1,45,32,89,23]
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}
 
// forEach loop gives individual looping to the dataset
a.forEach((value,index,arr) => {
    console.log(value,index,arr)
});

// for in loop
let obj = {
    a: 1,
    b: 3,
    c: 5,
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)
        
    }
}

for (const value of a) {
    console.log(a)
    
}