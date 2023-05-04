let containerel = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    containerel.appendChild(colorContainer);
}

let colorContainerels = document.querySelectorAll(".color-container")

generateColors()

function generateColors() {
    colorContainerels.forEach((colorContainer) => {
        let newColorCode = randomColor()
        colorContainer.style.backgroundColor = "#" + newColorCode;
        colorContainer.innerText = "#" + newColorCode;
    })
}

randomColor();

function randomColor() {
    let character = "0123456789abcdef";
    let colorCodeLength = 6;
    let colorCode = ""

    for (let index = 0; index < colorCodeLength; index++) {
        const ramdomNum = Math.floor(Math.random() * character.length)

        colorCode += character.substring(ramdomNum, ramdomNum + 1)

    }
    return colorCode
}