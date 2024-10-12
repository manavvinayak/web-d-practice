let n = Number(prompt("Enter the number :" ));
while ( n > 50){
    alert(`Gosh! the number ${n} is more than 50, TRY AGAIN!`);
    number = Math.floor(Math.random() * 100);
    n = Number(prompt("Enter the number : "));
 
}
alert(`Hurray! ${n} is less than or equal to 50`);