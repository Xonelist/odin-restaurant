import { createElement } from "./createDoc";

const infos = { 
    'Hours' : {
        'Sunday' : {
            open: '12 AM',
            close: '9 PM',
        },
        'Monday' : {
            open: '10 AM',
            close: '9 PM',
        },
        'Tuesday' : {
            open: '10 AM',
            close: '9 PM',
        },
        'Wednesday' : {
            open: '10 AM',
            close: '9 PM',
        },
        'Thursday' : {
            open: '10 AM',
            close: '9 PM',
        },
        'Friday' : {
            open: '10 AM',
            close: '9 PM',
        },'Saturday' : {
            open: '12 AM',
            close: '9 PM',
        },
    },
    'Location' : {
        street: '123 Grove Street',
        city: 'Manchester',
        zipcode: '999-1921',
    }
}

const review = [
    {
        name: 'Bonny',
        status: 'Customer',
        description: 'The pizza is great, have a good packaging and the temperature still hot even after take away',
        star: 4,
    }
]

function createMainPage() {
    const ctn = createElement('div', 'mainpage', '');
    for (let info in infos) {
        const div = createElement('div', `${info} border-1`, createElement('h1', `main`, `${info}`) ,true);

        if (info === 'Location') {
            div.appendChild(createElement('p', `${info}`, `${infos['Location']['street']}, ${infos['Location']['city']}, ${infos['Location']['zipcode']}`));
        } else {
            for (let day in infos[info]) {
                div.appendChild(createElement('li', `${day}`, `${day} : Open ${infos[info][day]['open']} until ${infos[info][day]['close']}` ));
            }
        }
        ctn.appendChild(div);
    }
    return ctn;
}

export {createMainPage}

