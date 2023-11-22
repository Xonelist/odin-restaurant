import { createContact } from "./contact";
import { createMainPage } from "./mainpage";

const content = document.querySelector('#content');
content.appendChild(createContact());
content.appendChild(createMainPage());

alert("Hello World")