let colorBox = document.getElementById("colorBox")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let input3 = document.getElementById("input3")

function changebgcolor() {
    colorBox.style.backgroundColor = `rgb(${input1.value}, ${input2.value}, ${input3.value})`;
}