// Without the check variable, it would be more complex to stop the loop after processing exactly 10 odd numbers. The boolean check provides a clear and straightforward way to control the loop’s execution based on a specific condition.
let n = 1;
let check = false;
for (let i = 1; check = false; i++) {
    console.log(`${i} is odd`);
   if(n == 10)
    check = true;
    n++;
}
