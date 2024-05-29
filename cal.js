
function insert(num) {
document.getElementById('result').value += num;
}

function clean() {
document.getElementById('result').value = "";
}

function back() {
var exp = document.getElementById('result').value;
document.getElementById('result').value = exp.substring(0, exp.length - 1);
}

function equal() {
var exp = document.getElementById('result').value;
if (isValidInput(exp)) {
 document.getElementById('result').value = eval(exp);
} else {
 document.getElementById('result').value = "Invalid Input";
}
}

// Function to check for valid input
function isValidInput(input) {
var pattern = /^[0-9+\-*/(). ]+$/;
return pattern.test(input);
}

