let bodyel = document.querySelector("body");

bodyel.addEventListener('mousemove', (event) => {
    let xpos = event.offsetX;
    let ypos = event.offsetY;
    let spanel = document.createElement("span");
    spanel.style.left = xpos + "px";
    spanel.style.top = ypos + "px";
    let size = Math.random()*100;
    spanel.style.width = size + "px";
    spanel.style.height = size + "px";

    bodyel.appendChild(spanel);

    setTimeout(() => {
        spanel.remove();
    },3000);
});