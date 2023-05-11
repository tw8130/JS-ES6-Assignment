let number = parseInt(prompt("Enter a number"));

if ((number >= 50) && (number <= 100)) {
    alert("true");
} else if ((number >= 50) || (number <= 100)) {
    alert("false");
} else {
    alert("Invalid input");
}