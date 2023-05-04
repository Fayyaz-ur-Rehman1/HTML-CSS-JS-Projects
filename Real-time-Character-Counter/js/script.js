let textareael = document.getElementById("textarea");
let totalCounterel = document.getElementById("total-counter");
let remainingCounterel = document.getElementById("remaining-counter")

textareael.addEventListener("keyup", () => {
    udateCounter();
})

udateCounter();

function udateCounter() {
    totalCounterel.innerText = textareael.value.length
    remainingCounterel.innerText = textareael.getAttribute("maxlength") -
        textareael.value.length;
}