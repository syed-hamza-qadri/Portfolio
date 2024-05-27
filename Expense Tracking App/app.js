var itemName = document.getElementById('itemName')
var amount = document.getElementById('amount')
var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var tbody = document.getElementById('tbody')

var Num = 0

function fun(pera) {
if (itemName.value == '' || amount.value == '') {
    alert("Enter Value!")
    return;
}

    Num += 1
    tbody.innerHTML += `<tr>
    <td>${Num}</td>
    <td>${itemName.value}</td>
    <td>${amount.value}</td>
    <td>${pera}</td>
    <td><button onclick = "console.log(this.parentElement.parentElement.remove())>Edit</button> <button onclick = "console.log(this.parentElement.parentElement.remove())">Delete</button></td>
</tr>`

    itemName.value = ''
    amount.value = ''
}

function fun1() {
    tbody.innerHTML = ''
}



