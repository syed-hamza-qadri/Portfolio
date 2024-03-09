var calculus = +prompt("Your Calculus Number")
var eng = +prompt("Your Eng Number")
var physics = +prompt("Your Physics Number")
var tajweed = +prompt("Your Tajweed Number")
var isl = +prompt("Your Isl Number")
var comp = +prompt("Your Comp Number")

var percentage = (calculus + eng + physics + tajweed + isl + comp) /600 *100

document.write("<h1>Result</h1>")
document.write("<p>Your marks Calculus in is " + calculus + "</p>")
document.write("<p>Your marks in English is " + eng + "</p>")
document.write("<p>Your marks in Physics is " + physics + "</p>")
document.write("<p>Your marks in Tajweed is " + tajweed + "</p>")
document.write("<p>Your marks in Islamiat is " + isl + "</p>")
document.write("<p>Your marks in Computer is " + comp + "</p>")

document.write("Your Percentage is " + percentage + "%")

if (percentage >= 90) {
    document.write("<p>Your Grade is A </p>")
} else if (percentage >= 80) {
    document.write("<p>Your Grade is B </p>")
} else if (percentage >= 70) {
    document.write("<p>Your Grade is C </p>")
} else if (percentage >= 60) {
    document.write("<p>Your Grade is D </p>")
} else if (percentage >= 50) {
    document.write("<p>Your Grade is E </p>")
} else {
    document.write("<p>Your Grade is F </p>")
}