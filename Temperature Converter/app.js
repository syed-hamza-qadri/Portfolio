let convertBtn = document.getElementById("convertBtn");
let list = document.getElementById("list");
let userInput, from, to, ans;

function converter() {

    userInput = document.getElementById("userInput").value
    from = document.getElementById("from").value
    to = document.getElementById("to").value

    if (userInput == "" || from == "Select" || to == "Select") {
        alert("Enter Value")
    } else {
        
        if (from === "Celsius" && to === "Fahrenheit") {
            ans = (userInput * 9 / 5) + 32
        } else if (from === "Celsius" && to === "Kelvin") {
            ans = userInput + 273.15
        } else if (from === "Fahrenheit" && to === "Celsius") {
            ans = (userInput - 32) * 5 / 9
        } else if (from === "Fahrenheit" && to === "Kelvin") {
            ans = ((userInput - 32) * 5 / 9) + 273.15
        } else if (from === "Kelvin" && to === "Celsius") {
            ans = userInput - 273.15
        } else if (from === "Kelvin" && to === "Fahrenheit") {
            ans = ((userInput - 273.15) * 9 / 5) + 32
        } else {
            alert("Check Convertion Units")
        }

        list.innerHTML += `<li>${userInput} ${from} is equals to ${ans} ${to}.</li>`
        document.getElementById("userInput").value = "";
        document.getElementById("from").value = "Select";
        document.getElementById("to").value = "Select";
    }
}

convertBtn.addEventListener('click', converter)




