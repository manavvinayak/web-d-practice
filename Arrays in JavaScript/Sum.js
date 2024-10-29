let input1 = [2,5,6,34];
let input2 = [-5,0,64,-89];

function sum_arrays(values) {
    let sum = 0;
    for (value of values){
        sum += value;
    }
    console.log(sum);
}

sum_arrays(input1)
sum_arrays(input2)