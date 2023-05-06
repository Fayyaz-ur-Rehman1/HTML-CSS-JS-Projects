let nextel = document.querySelector(".next");
let imagecontainerel = document.querySelector(".image-container");
let imgel = document.querySelector("img");
let prevel = document.querySelector(".prev");

let currentimg = 1

let timeout;

nextel.addEventListener("click", () => {
    currentimg++
    clearTimeout(timeout);
    updateimg()
})

prevel.addEventListener("click", () => {

    currentimg--
    clearTimeout(timeout)
    updateimg()
})

updateimg()

function updateimg() {
    if (currentimg > imgel.length) {
        currentimg = 1;
    } else if (currentimg < 1) {
        currentimg = imgel.length
    }
    imagecontainerel.style.transform = `translateX(-${(currentimg - 1) * 500}px)`;
    timeout = setTimeout(() => {
        currentimg++
        updateimg()
    }, 3000)
}  
