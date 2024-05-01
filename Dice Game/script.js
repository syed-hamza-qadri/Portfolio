    var diceNum = document.getElementById("diceNum")
    var ranNum = document.getElementById("ranNum")
    var result = document.getElementById("sec_2_h")

    function checkNum(value) {
        var num = Math.ceil(Math.random() * 6)
        ranNum.innerText = num
        diceNum.innerText = value

        if (value == num) {
            result.innerText = "Congratulations! You Won"
            result.style.backgroundColor = "Green"
            result.style.color = "White"
        } else {
            result.innerText = "Pls Try Again"
            result.style.backgroundColor = "Red"
            result.style.color = "White"
        }
    }

