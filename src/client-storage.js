import refs from './refs.js';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const savedTheme = localStorage.getItem('theme');

refs.themeSwitcher.addEventListener('click', handleChangeTheme);

export function setTheme() {
return savedTheme ? initiateSavedTheme() : initiateDefaultTheme();
}

function handleChangeTheme() {
    if (refs.body.classList.contains(Theme.LIGHT)) {
        refs.body.classList.remove(Theme.LIGHT);
        refs.body.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    }
    else if  (refs.body.classList.contains(Theme.DARK)) {
        refs.body.classList.remove(Theme.DARK);
        refs.body.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    };
};

function initiateDefaultTheme() {
    refs.body.classList.add(Theme.LIGHT);
};

function initiateSavedTheme() {
    refs.body.classList.add(savedTheme);
    if (savedTheme === Theme.DARK)
    { refs.themeSwitcher.checked = true; }
}

// export default setTheme;