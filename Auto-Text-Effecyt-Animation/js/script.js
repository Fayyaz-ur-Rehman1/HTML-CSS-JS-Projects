let containerel = document.querySelector(".container");

let careers = ["FayyazurRehman", "WebDeveloper in India", "Class 11th"]

let careersindex = 0;
let characterindex = 0

upadatetext()

function upadatetext() {
    characterindex++
    containerel.innerHTML = `<h1>I am ${careers[careersindex].slice(1, 2) === "I" ? "Study" : "a"}
     ${careers[careersindex].slice(0, characterindex)} </h1>`;

    if (characterindex === careers[careersindex].length) {
        careersindex++
        characterindex = 0
    }

    if (careersindex === careers.length) {
        careersindex = 0
    }
    setTimeout(upadatetext, 400)
}