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

        if (e.target.parentElement && e.target.parentElement.classList.contains('tab-list') && e.target.getAttribute('data-target')) {
            const tab = e.target.getAttribute("data-target");
            if (e.target.classList.contains('active')) {
                e.target.classList.remove('active');
                document.querySelector(tab).classList.remove('active');
            } else {
                let tabList = e.target.closest('.tab-list');
                let tabContent = tabList.nextElementSibling;
                tabList.querySelectorAll('.active').forEach(activeTab => {
                    activeTab.classList.remove('active');
                });
                tabContent.querySelectorAll('.tab-pane.active').forEach(activePane => {
                    activePane.classList.remove('active');
                });
                e.target.classList.add('active');
                document.querySelector(tab).classList.add('active');
            }
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

    const tooltips = document.querySelectorAll(".tooltip");

    tooltips.forEach(e => {
        let tooltipText = e.getAttribute("title");
        if (!tooltipText) {
            return;
        }

        e.removeAttribute("title");

        let tooltipBox = document.createElement("div");
        tooltipBox.className = "tooltip-box";
        tooltipBox.textContent = tooltipText;
        document.body.appendChild(tooltipBox);

        if (e.dataset.bg) {
            tooltipBox.style.background = e.dataset.bg;
        }
        if (e.dataset.color) {
            tooltipBox.style.color = e.dataset.color;
        }
        if (e.dataset.size) {
            tooltipBox.style.fontSize = e.dataset.size;
        }

        e.addEventListener("mouseenter", () => {
            tooltipBox.style.display = "block";
            tooltipBox.style.opacity = "1";
            positionTooltip(e, tooltipBox);
        });

        e.addEventListener("mousemove", () => positionTooltip(e, tooltipBox));

        e.addEventListener("mouseleave", () => {
            tooltipBox.style.display = "none";
        });
    });

    function positionTooltip(e, tooltipBox) {
        let rect = e.getBoundingClientRect();
        let placement = e.dataset.placement || "right";

        switch (placement) {
        case "right":
            tooltipBox.style.left = rect.right + "px";
            tooltipBox.style.top = rect.top + window.scrollY + "px";
            break;
        case "left":
            tooltipBox.style.left = rect.left - tooltipBox.offsetWidth + "px";
            tooltipBox.style.top = rect.top + window.scrollY + "px";
            break;
        case "bottom":
            tooltipBox.style.left = rect.left + "px";
            tooltipBox.style.top = rect.bottom + window.scrollY + "px";
            break;
        default:
            tooltipBox.style.left = rect.left + "px";
            tooltipBox.style.top = rect.top - tooltipBox.offsetHeight + window.scrollY + "px";
        }
    }
});