let tabs = document.querySelector(".tabs");
let btn = document.querySelectorAll(".button");
let articles = document.querySelectorAll(".content");

tabs.addEventListener("click", (event) => {
    let id = event.target.dataset.id;

    if (id) {
        btn.forEach((btn) => {
            btn.classList.remove("live")
        })

        event.target.classList.add("live")
        articles.forEach((article) => {
            article.classList.remove("live");
        })

        
        let  element = document.getElementById(id);
        element.classList.add("live")
    }
});