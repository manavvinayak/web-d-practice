console.log("this is a tutorial on loops!")

let a = 1;

for (let i = 0; i < 100; i++) {
    console.log( a + i)
    
}

let obj = {
    name: "vinayak",
    role: "Programmer",
    company: "openAI"
}

// for in loop
for (const key in obj) {
     {
        const element = obj[key];
        console.log(key,element)
        
    }
}

// for of loop
for (const c of "vinayak") {
    console.log(c)
}