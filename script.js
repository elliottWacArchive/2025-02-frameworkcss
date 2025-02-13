document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".navbar-toggler");

    btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
        document.querySelector(target).classList.toggle("show");
    });
});