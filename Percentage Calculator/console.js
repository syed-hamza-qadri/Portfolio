console.log("Your marks Calculus in is " + calculus)
console.log("Your marks in English is " + eng)
console.log("Your marks in Physics is " + physics)
console.log("Your marks in Tajweed is " + tajweed)
console.log("Your marks in Islamiat is " + isl)
console.log("Your marks in Computer is " + comp)

console.log("Your Percentage is " + percentage + "%")

if (percentage >= 90) {
    console.log("<p>Your Grade is A </p>")
} else if (percentage >= 80) {
    console.log("<p>Your Grade is B </p>")
} else if (percentage >= 70) {
    console.log("<p>Your Grade is C </p>")
} else if (percentage >= 60) {
    console.log("<p>Your Grade is D </p>")
} else if (percentage >= 50) {
    console.log("<p>Your Grade is E </p>")
} else {
    console.log("<p>Your Grade is F </p>")
}