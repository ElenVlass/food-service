import initialMenu from './menu.json';
import templateCardList from './templates/cards-list.hbs';
import refs from './refs.js';


import './styles.css';



// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };


const menuMarkup = templateCardList(initialMenu);

refs.dishes.insertAdjacentHTML('beforeend', menuMarkup);