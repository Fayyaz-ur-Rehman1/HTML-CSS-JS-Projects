let imageContainerel = document.querySelector(".image-container");

let btnel = document.querySelector(".btn");

btnel.addEventListener("click", () => {
    imageNum = 10
    addnewImage()
})

function addnewImage() {

    for (let index = 0; index < imageNum; index++) {

        let newimage = document.createElement("img");
        newimage.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainerel.appendChild(newimage)
    }
}