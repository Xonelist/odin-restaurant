import { createContact } from "./contact";
import { createMainPage } from "./mainpage";
import { createMenu } from "./menu";

const content = document.querySelector('#content');
const btnHome = document.querySelector('.tab-list #Home');
const btnContact = document.querySelector('.tab-list #Contact');
const btnMenu = document.querySelector('.tab-list #Menu');
content.appendChild(createMainPage());

btnHome.addEventListener('click', () => {
    if (btnHome.className !== 'active') {
        btnHome.className = 'active';
        btnContact.className = '';
        btnMenu.className = '';
        content.textContent = '';
        content.appendChild(createMainPage());
    }
})
btnContact.addEventListener('click', () => {
    if (btnContact.className !== 'active') {
        btnHome.className = '';
        btnContact.className = 'active';
        btnMenu.className = '';
        content.textContent = '';
        content.appendChild(createContact());
    }
})
btnMenu.addEventListener('click', () => {
    if (btnMenu.className !== 'active') {
        btnHome.className = '';
        btnContact.className = '';
        btnMenu.className = 'active';
        content.textContent = '';
        content.appendChild(createMenu());
    }
})