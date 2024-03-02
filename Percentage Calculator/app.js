var calculus = +prompt("Your calculus Number")
var eng = +prompt("Your eng Number")
var physics = +prompt("Your physics Number")
var tajweed = +prompt("Your tajweed Number")
var isl = +prompt("Your isl Number")
var comp = +prompt("Your comp Number")

var percentage = (calculus + eng + physics + tajweed + isl + comp) /600 *100

document.write("<h1>Result</h1>")
document.write("<p>Your marks Calculus in is " + calculus + "</p>")
document.write("<p>Your marks in English is " + eng + "</p>")
document.write("<p>Your marks in Physics is " + physics + "</p>")
document.write("<p>Your marks in Tajweed is " + tajweed + "</p>")
document.write("<p>Your marks in Islamiat is " + isl + "</p>")
document.write("<p>Your marks in Computer is " + comp + "</p>")

document.write("Your Percentage is " + percentage + "%")