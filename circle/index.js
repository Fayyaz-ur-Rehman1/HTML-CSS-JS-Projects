function getramdomcolor() {
    const hue = Math.floor(Math.random() * 361)
    const saturation = 100
    const ligthness = 50
    return `hsl(${hue} , ${saturation}% , ${ligthness}%)`
}

function getrandomSize(min, max) {
    return Math.random() * (max - min) + min;
}

function createCircle() {
    const circle = document.createElement("div");
    const size = getrandomSize(10, 200)
    circle.classList.add("circle");
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.background = getramdomcolor()
    return circle
}

let currentCircle = createCircle();
document.body.appendChild(currentCircle);

document.addEventListener("mousemove", (e) => {
    currentCircle.style.left = `${e.clientX - currentCircle.offsetWidth / 2}px`;
    currentCircle.style.top = `${e.clientY - currentCircle.offsetHeight / 2}px`;
});

document.body.addEventListener("click", (e) => {
    currentCircle = createCircle();

    currentCircle.style.left = `${e.clientX - parseFloat(currentCircle.style.width) / 2
        }px`;
    currentCircle.style.top = `${e.clientY - parseFloat(currentCircle.style.height) / 2
        }px`;

    document.body.appendChild(currentCircle);
});