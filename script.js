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
});