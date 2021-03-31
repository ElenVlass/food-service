import refs from './refs.js';
import initialMenu from './menu.json';
import templateCardList from './templates/cards-list.hbs';
import {setTheme} from './client-storage.js';
import './styles.css';

const menuMarkup = templateCardList(initialMenu);

refs.dishes.insertAdjacentHTML('beforeend', menuMarkup);

setTheme();

refs.burger.addEventListener('click', handleBurgerBtnClick);
refs.closeButton.addEventListener('click', handleCloseBtnClick)

function handleBurgerBtnClick() {
    refs.sideBar.classList.add('active');
};

function handleCloseBtnClick() {
 refs.sideBar.classList.remove('active');
};

