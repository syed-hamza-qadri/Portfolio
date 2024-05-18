var para = document.getElementById('para')
var heading = document.getElementById('heading')

function bold() {
    if (para.style.fontWeight == "bold") {
        para.style.fontWeight = "normal"
        heading.style.fontWeight = "normal"
    } else {
        para.style.fontWeight = "bold"
        heading.style.fontWeight = "bold"
    }
}

function italic() {
    if (para.style.fontStyle == "italic") {
        para.style.fontStyle = "normal"
        heading.style.fontStyle = "normal"
    } else {
        para.style.fontStyle = "italic"
        heading.style.fontStyle = "italic"
    }

}

function underline() {
    if (para.style.textDecoration == "underline") {
        para.style.textDecoration = "none"
        heading.style.textDecoration = "none"
    } else {
        para.style.textDecoration = "underline"
        heading.style.textDecoration = "underline"
    }
}

function leftalign() {
    para.style.textAlign = "left"
    heading.style.textAlign = "left"
}

function centeralign() {
    para.style.textAlign = "center"
    heading.style.textAlign = "center"
}

function rightalign() {
    para.style.textAlign = "right"
    heading.style.textAlign = "right"
}

function uppercase() {
    if (para.style.textTransform == "uppercase") {
        para.style.textTransform = "none"
        heading.style.textTransform = "none"
    } else {
        para.style.textTransform = "uppercase"
        heading.style.textTransform = "uppercase"
    }
}

function lowercase() {
    if (para.style.textTransform == "lowercase") {
        para.style.textTransform = "none"
        heading.style.textTransform = "none"
    } else {
        para.style.textTransform = "lowercase"
        heading.style.textTransform = "lowercase"
    }
}


