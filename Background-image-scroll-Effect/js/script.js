let bgimageel = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
    upadateImage()
})

function upadateImage() {
    bgimageel.style.opacity = 1 - window.pageYOffset / 800

    bgimageel.style.backgroundSize = 160 - window.pageYOffset / 12 + "%"
}