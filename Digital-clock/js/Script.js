let hourel = document.getElementById("hour");
let minutesel = document.getElementById("minutes");
let secondsel = document.getElementById("seconds");
const ampmel = document.getElementById("ampm");

function currenttimeclock() {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let ampm = "AM"

    if (hour > 12) {
        hour = hour - 12
        ampm = "PM"
    }

    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;


    hourel.innerText = hour;
    minutesel.innerText = minutes;
    secondsel.innerText = seconds;
    ampmel, (innerText = ampm);

    setTimeout(() => {
        currenttimeclock()
    }, 1000)
}
currenttimeclock()