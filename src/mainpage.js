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
    const ctn = document.createElement('div');
    ctn.className = 'Mainpage';

    for (let info in infos) {
        const div = document.createElement('div');
        div.className = `${info} border-1`;
        const h2 = document.createElement('h2');
        h2.textContent = `${info}`
        div.appendChild(h2);

        if (info === 'Location') {
            const p = document.createElement('p');
            p.textContent = `${infos['Location']['street']}, ${infos['Location']['city']}, ${infos['Location']['zipcode']}`;
            div.appendChild(p);
        } else {
            for (let day in infos[info]) {
                const li = document.createElement('li');
                li.textContent = `${day} : Open ${infos[info][day]['open']} until ${infos[info][day]['close']}`
                div.appendChild(li);
            }
        }
        ctn.appendChild(div);
    }
    return ctn;
}

export {createMainPage}

