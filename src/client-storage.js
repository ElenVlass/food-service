import refs from './refs.js';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

const savedTheme = localStorage.getItem('theme');

refs.themeSwitcher.addEventListener('change', handleThemeChange);

export function setTheme() {
return savedTheme ? useSavedTheme() : initiateDefaultTheme();
}

function handleThemeChange(event) {
    if (event.target.checked) {
        changeBodyThemeClass(LIGHT, DARK);
        localStorage.setItem('theme', DARK);
    }
    else {
        changeBodyThemeClass(DARK, LIGHT);
        localStorage.setItem('theme', LIGHT);
    };
};

function initiateDefaultTheme() {
    refs.body.classList.add(LIGHT);
};

function useSavedTheme() {
    refs.body.classList.add(savedTheme);
    if (savedTheme === DARK)
    { refs.themeSwitcher.checked = true; }
};

function changeBodyThemeClass(currentTheme, newTheme) {
    refs.body.classList.remove(currentTheme);
    refs.body.classList.add(newTheme);
};