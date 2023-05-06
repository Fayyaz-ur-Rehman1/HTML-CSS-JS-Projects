const inputel = document.querySelector(".input");
let bodyel = document.querySelector("body")

inputel.checked = JSON.parse(localStorage.getItem("mode"))

updateBody()

function updateBody() {
    if (inputel.checked) {
        bodyel.style.background = "black"
    } else {
        bodyel.style.background = "white"
    }
}

inputel.addEventListener("input", () => {
    updateBody()
    updatelocalstroage()
})

function updatelocalstroage() {
    localStorage.setItem("mode", JSON.stringify(inputel.checked))
}