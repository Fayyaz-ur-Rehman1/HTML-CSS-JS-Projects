const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    //    get rendom number between 0-3
    const randomNumber = getramdomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = color[randomNumber];
})

function getramdomNumber() {
    return Math.floor(Math.random() * colors.length);
}