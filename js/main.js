document.addEventListener("DOMContentLoaded", () => {
    const pageup = document.querySelector(".pageup");

    function scrollTop() {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 1200) {
                pageup.style.opacity = 1;
            } else {
                pageup.style.opacity = 0;
            }
        });
    }
    scrollTop();

    const burger = document.getElementById("burger");
    const openMenu = document.querySelector("header");
    const menuItem = document.querySelectorAll(".navigation__link");

    burger.addEventListener("click", () => {
        openMenu.classList.toggle("open");
        document.body.classList.add("menu-opened");

        menuItem.forEach((item) => {
            item.addEventListener("click", () => {
                openMenu.classList.remove("open");
                document.body.classList.remove("menu-opened");
            });
        });
    });
});
