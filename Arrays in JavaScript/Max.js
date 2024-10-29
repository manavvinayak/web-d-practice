let input1 = [23, 44, 232, 12, 1];
let input2 = [-23, 444, -232, 0, 2];

function check_max(values) {
    var max = values[0];
    for (let value of values) {
        if (value > max) {
            max = value;
        }
    }
    console.log(max); // Log the maximum value once after the loop
    return max;
}

// Call the function with input1 and input2
check_max(input1);
check_max(input2);