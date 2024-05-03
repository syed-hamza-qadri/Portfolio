var DOB = document.getElementById("DOB")
        var Years = document.getElementById("Years")
        var Months = document.getElementById("Months")
        var Days = document.getElementById("Days")
        var Hours = document.getElementById("Hours")
        var Minutes = document.getElementById("Minutes")
        var Seconds = document.getElementById("Seconds")
        var Millisecond = document.getElementById("Millisecond")

        var UserSubmit = document.getElementById("input1")

        function Calculate() {
            var userDOB = new Date(UserSubmit.value)
            var now = new Date()

            DOB.innerText = userDOB.toDateString()
            Years.innerText = `${Math.floor((now.getTime() - userDOB.getTime()) / 1000 / 60 / 60 / 24 / 30 / 12)} Years`
            Months.innerText = `${Math.floor((now.getTime() - userDOB.getTime()) / 1000 / 60 / 60 / 24 / 30)} Months`
            Days.innerText = `${Math.floor((now.getTime() - userDOB.getTime()) / 1000 / 60 / 60 / 24)} Days`
            Hours.innerText = `${Math.floor((now.getTime() - userDOB.getTime()) / 1000 / 60 / 60)} Hours`
            Minutes.innerText = `${Math.floor((now.getTime() - userDOB.getTime()) / 1000 / 60)} Minutes`
            Seconds.innerText = `${Math.floor((now.getTime() - userDOB.getTime()) / 1000)} Seconds`
            Millisecond.innerText = `${Math.floor((now.getTime() - userDOB.getTime()))} Milliseconds`
        }