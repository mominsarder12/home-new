// head section start
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const menuClose = document.querySelector(".menu-close");
const navLinks = document.querySelectorAll(".nav-item");

hamburger.addEventListener("click", () => {
    navMenu.classList.add("show")
});
menuClose.addEventListener("click", () => {
    navMenu.classList.remove("show");
});

navLinks.forEach(function (link) {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    })
})

// hero section 

