import refs from './refs.js';
import initialMenu from './menu.json';
import templateCardList from './templates/cards-list.hbs';
import setTheme from './client-storage.js';

import './styles.css';

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };


const menuMarkup = templateCardList(initialMenu);

refs.dishes.insertAdjacentHTML('beforeend', menuMarkup);

setTheme()

// const savedTheme = localStorage.getItem('theme');

// const setTheme = savedTheme ? initiateSavedTheme() : initiateDefaultTheme();

// refs.themeSwitcher.addEventListener('click', handleChangeTheme);

// function handleChangeTheme() {
//     if (refs.body.classList.contains(Theme.LIGHT)) {
//         refs.body.classList.remove(Theme.LIGHT);
//         refs.body.classList.add(Theme.DARK);
//         localStorage.setItem('theme', Theme.DARK);
//     }
//     else if  (refs.body.classList.contains(Theme.DARK)) {
//         refs.body.classList.remove(Theme.DARK);
//         refs.body.classList.add(Theme.LIGHT);
//         localStorage.setItem('theme', Theme.LIGHT);
//     };
// };
// function initiateDefaultTheme() {
//     refs.body.classList.add(Theme.LIGHT);
// };
// function initiateSavedTheme() {
//     refs.body.classList.add(savedTheme);
//     if (savedTheme === Theme.DARK)
//     { refs.themeSwitcher.checked = true; }
// }
