document.write("<h1>SIMPLE CALCULATOR</h1>")

var num1 = +prompt("Enter First Number:")
var num2 = +prompt("Enter Second Number:")
var operator = prompt("Enter Operator: +,-,*,/ ")
var result

if (operator == "+") {
    document.write(`<p class='para-c'>${num1} ${operator} ${num2} = ${result = num1 + num2}</p>`)
} else if (operator == "-") {
    document.write(`<p class='para-c'>${num1} ${operator} ${num2} = ${result = num1 - num2}</p>`)
} else if (operator == "*") {
    document.write(`<p class='para-c'>${num1} ${operator} ${num2} = ${result = num1 * num2}</p>`)
} else if (operator == "/") {
    document.write(`<p class='para-c'>${num1} ${operator} ${num2} = ${result = num1 / num2}</p>`)
} else {
    document.write("<p>Enter valid operator !</p>") 
}