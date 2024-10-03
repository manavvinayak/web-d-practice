// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6


const rawprice = Number(prompt("Enter Raw Price: "));
const vatprice = 26.4/100
const finalprice = rawprice* (vatprice + 1)
alert(`Final Price is ${finalprice}`)