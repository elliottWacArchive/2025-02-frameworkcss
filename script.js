document.addEventListener("DOMContentLoaded", () => {

    document.addEventListener('click', (e) => {
        if (e.target.tagName == 'BUTTON' && e.target.getAttribute('data-target')) {
            const modal = e.target.getAttribute("data-target");
            document.querySelector(modal).classList.toggle("show");
        } else if (!e.target.closest('.modal')) {
            const elements = document.querySelectorAll('.show');
            elements.forEach(element => {
                element.classList.remove('show');
            });
        }
        if (e.target.classList.contains('popin-dismiss')) {
            const elements = document.querySelectorAll('.show');
            elements.forEach(element => {
                element.classList.remove('show');
            });
        }
        if (e.target.classList.contains('.navbar-toggler')) {
            const target = e.target.getAttribute("data-target");
            document.querySelector(target).classList.toggle("show");
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const elements = document.querySelectorAll('.show');
            elements.forEach(element => {
                element.classList.remove('show');
            });
        }
    });
});