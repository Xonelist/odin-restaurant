import { createElement } from "./createDoc"
const menu = {
    
    'Pizza' : {
        'Meat Lover' : {
            name: 'Meat Lover',
            desc: 'Pizza that bake with many kind of meat, there is peperoni, slices of beef, and sausage with some our secret homemade sauce from fresh tomato our garden growth',
            price: '$10',
            img: './img/meatlover.jpe',
     },
        'Mushroom Pizza' : {
            name: 'Mushroom Pizza',
            desc: 'Pizza mixed with some slices of meat and mushroom and spilled with some our sweet and sour sauce and bit mix of tomato sauce',
            price: '$8',
            img: './img/mushroom.webp',
     },
        'Cheese Pizza' : {
            name: 'Cheese Pizza',
            desc: 'Pizza that give you hearth attack, The cheese which god spilled on top our pizza will bring your heart to race',
            price: '$9',
            img: './img/cheese.jpeg',
     }
    },
    'Beverages' : {
        'Coke Float' : {
            name: 'Coke Float',
            desc: 'Mix of coke and soda with extra cream for topping that can wash your mouth cheerfully',
            price: '$3',
            img: './img/coke.jpg',

        },
    },
    'Desserts' : {
        'Ice Cream' : {
            name: 'Ice Cream',
            desc: 'Made by local farmers milk then mix with some maple syrup from the backyard',
            price: '$2',
            img: './img/ice_cream.webp',

        },
        'Banana Split' : {
            name: 'Banana Split',
            desc: 'Some slice banana that have topping three kind of ice cream flavor that our proud kitchen made',
            price: '$5',
            img: './img/banana_split.jpg',
        }
    }
}

function createMenu() {
    const ctn = createElement('div', 'menus', '')
    for (let category in menu) {
        //make Header for every category
        ctn.appendChild(createElement('div', `header-menu-ctg ${category}`, createElement('h2', ``, `${category}`), true));
        for (let obj in menu[category]) {
            const div = createElement('div', `item ${obj.split(' ').join('')}`, '');
            for (let prop in menu[category][obj]) {
                prop === 'name' ? div.appendChild(createElement('h2', `item-${prop}`, `${menu[category][obj][prop]}`)) : 
                prop === 'img' ? div.appendChild(createElement('img', `item-${prop}`, `${menu[category][obj][prop]}`)) :
                div.appendChild(createElement('p', `item-${prop}`, `${menu[category][obj][prop]}`))

            }
            ctn.appendChild(div);
        }
    }
    return ctn;
}

export {createMenu}