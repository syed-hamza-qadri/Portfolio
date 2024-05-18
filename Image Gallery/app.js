var preview = document.getElementById("preview")
var boxes = document.getElementsByClassName("box")

for (i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener('mouseover',
        function () {
            preview.src = this.src
            this.style.border = '3px solid black'
        })

        boxes[i].addEventListener('mouseout',
        function () {
            this.style.border = '3px solid transparent'
        })

}