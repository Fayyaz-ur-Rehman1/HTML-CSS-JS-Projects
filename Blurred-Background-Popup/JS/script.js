let maincontainerel = document.querySelector(".container");
let btnel = document.querySelector(".btn");
let popupcontainerel = document.querySelector(".popup-container");
let closeicon = document.querySelector(".close-icon");

btnel.addEventListener("click", () => {
    maincontainerel.classList.add("active");
    popupcontainerel.classList.remove("active")
});


closeicon.addEventListener("click", () => {
    maincontainerel.classList.remove("active");
    popupcontainerel.classList.add("active")
})