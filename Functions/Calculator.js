function calculator(x, operator, y) {
    switch(operator) {
        case "+":
            console.log(x + y)
            break;
           
        case "-":
            console.log(x - y)
            break;

        case "*":
            console.log(x * y)
            break;
        case "/":
            console.log(x / y)
            break;
            default:
                console.log(undefined);

    }
    
}
calculator(12,'/',4)