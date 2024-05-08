var tableBody = document.getElementById("attendanceTable");

var officeH = 9
var officeM = 15
var sNo = 1

function attendance() {
    var now = new Date()

    var input = document.getElementById("input").value
    if (input === "") {
        alert("Please enter a name.");
        return;
    }

    var time;
    if (now.getHours() < 12) {
        time = `${now.getHours()} : ${now.getMinutes()} am`
    } else {
        time = `${now.getHours()} : ${now.getMinutes()} pm`
    }

    var reach;
    var reachColor;
    if (officeH > now.getHours()) {
        reach = "You are Ontime"
        reachColor = "Green"
    } else if (officeH == now.getHours() && officeM > now.getMinutes()) {
        reach = "Warning! Be Ontime"
        reachColor = "Orange"
    } else {
        reach = "You are Late"
        reachColor = "Red"
    }

    var newRow = document.createElement("tr");
    newRow.innerHTML = `
                <td class="pl-2">${sNo}</td>
                <td>${input}</td>
                <td>${time}</td>
                <td style="color:${reachColor};">${reach}</td>
            `;

    tableBody.appendChild(newRow);
    document.getElementById("input").value = '';
    sNo++;
}

document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        attendance();
    }
});

