let theme = localStorage.getItem('theme') || 'system';

if (theme === 'system') {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');

    theme = mql.matches ? 'dark' : 'light';
}

updateTheme()

function changeTheme() {
    theme = theme === 'dark' ? 'light' : 'dark'

    localStorage.setItem('theme', theme)
    updateTheme()
}

function updateTheme() {
    const path = 'public'

    document.documentElement.setAttribute('data-theme', theme);
    document.getElementById('content').setAttribute('data-theme', theme);
    document.getElementById('icon').src = `${path}/${theme}.svg`

    const elements = document.getElementsByClassName('menu-icon')

    Array.from(elements).map((element) => {
        element.style = 'fill: #FFFFFF';
    })
}

/** @type HTMLElement */
function init(element) {
    const menuBtn = element.querySelector('.menu_btn')
    const menuList = element.querySelector('.menu_list')

    function toggleMenu() {
        menuBtn.classList.toggle('rotate')
        menuList.classList.toggle('hide')
    }

    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelectorAll('pre code').forEach((el) => {
            hljs.highlightElement(el);
        });
    });

    menuBtn.addEventListener('click', toggleMenu)
}

init(document.getElementById("top_block"))
init(document.getElementById("info"))
init(document.getElementById("portfolio"))