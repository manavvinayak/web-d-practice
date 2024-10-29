// Without the check variable, it would be more complex to stop the loop after processing exactly 10 odd numbers. The boolean check provides a clear and straightforward way to control the loop’s execution based on a specific condition.
let n = 1;
let check = false;
for (let i = 1; check == false; i++) { // or use !check
    if (i % 2 === 1) {
        console.log(`${i} is odd`);
        if (n == 10) {
            check = true;
        }
        n++;
    }
}
// Comparison (==): This operator checks if two values are equal. In check == false, it checks if the value of check is false. If it is, the condition is true, and the loop continues. If check becomes true, the condition is false, and the loop stops.
// Assignment (=): This operator assigns a value to a variable. If you use check = false, it sets check to false every time the loop runs, which is not what you want. This would cause the loop to run indefinitely because check is always false.
