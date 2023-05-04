let navbarel = document.querySelector(".navbar");
let bottomContainerel = document.querySelector(".botttom-container");

console.log(navbarel.offsetHeight);

console.log(bottomContainerel.offsetTop);


window.addEventListener("scroll", () => {

    if (window.scrollY > bottomContainerel.offsetTop - navbarel.offsetHeight - 50) {
        navbarel.classList.add("active")
    } else {
        navbarel.classList.remove("active");
    }
})