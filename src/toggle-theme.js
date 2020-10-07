const toggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('#body');

toggle.addEventListener('change', onToggleChangeTheme);

currentTheme();
body.classList.add('light-theme');

function onToggleChangeTheme() {
    if (toggle.checked === true) {
        themeToggle = body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        localStorage.setItem('siteTheme', true);
    } else {
        themeToggle = body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        localStorage.setItem('siteTheme', false);
    }
}

function currentTheme() {
    const themeStorage = localStorage.getItem('siteTheme');
    if (themeStorage) {
        if (themeStorage === 'true') {
            body.classList.add('dark-theme');
            toggle.checked = true;
        }
    }
}