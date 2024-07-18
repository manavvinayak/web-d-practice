alert("External script is here!");

var x = 7;

function getName() {
  console.log("Namaste JavaScript!!");
}

getName();

var message = document.getElementById("message");
message.textContent = "The value of x is: " + x;
