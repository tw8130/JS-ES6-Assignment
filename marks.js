//Write a JavaScript program that computes the average marks of the following students.Then, this average is used to determine the corresponding grade.

let David = 80;

let Vinoth = 77;

let Divya = 88;

let Ishitha = 95;


let Thomas = 68;

let average = (David + Vinoth + Divya + Ishitha + Thomas) / 5;


if (average < 60) {
    console.log("Average: " + average + " and your Grade is F")
} else if (average < 70) {
    console.log("Average: " + average + " and your Grade is D")
} else if (average < 80) {
    console.log("Average: " + average + " and your Grade is C")
} else if (average < 90) {
    console.log("Average: " + average + " and your Grade is B")
} else if (average < 100) {
    console.log("Average: " + average + " and your Grade is A")
} else {
    console.log("Invalid marks")
}