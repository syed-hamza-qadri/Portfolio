var sNo = document.getElementById("sNo")
var Ename = document.getElementById("Ename")
var time = document.getElementById("time")
var reach = document.getElementById("reach")
var input = document.getElementById("input")

var now = new Date()
var officeH = 9
var officeM = 15    

function attendance() {
    sNo.innerText = 1
    Ename.innerText = input.value

    if (now.getHours() < 12) {
        time.innerText = `${now.getHours()} : ${now.getMinutes()} am`
    } else {
        time.innerText = `${now.getHours()} : ${now.getMinutes()} pm`
    }

    if (officeH > now.getHours()) {
        reach.innerText = "You are Ontime"
    } else if (officeH == now.getHours() && officeM > now.getMinutes()) {
        reach.innerText = "Warning! Be Ontime"
    } else {
        reach.innerText = "You are Late"
    }
}

