const contacts = [
    {
        "name": 'Mr Ian',
        "job": 'Chef',
        "phone": '999-192-001',
        "email": 'ian@example.com',
    },
    {
        "name": 'Mrs Isabella',
        "job": 'Waitress',
        "phone": '999-192-002',
        "email": 'isa@example.com',
    },
    {
        "name": 'Ms Molly',
        "job": 'Cashier',
        "phone": '999-192-003',
        "email": 'molly@example.com',
    },
]
function createContact() {

    const ctn = document.createElement('div');
    ctn.className = 'contacts';
    contacts.forEach( contact => {
        const content = document.createElement('div');
        content.className = `worker border-1`
        for (let key in contact) {
            console.log(key)
            const people = document.createElement('div');
            if (key === 'name') {
                const textC = document.createElement('h2');
                textC.textContent = `${contact[key]}`;
                people.appendChild(textC);
            } else {
                const textC = document.createElement('p');
                textC.textContent = `${contact[key]}`;
                people.appendChild(textC);
            }
            content.appendChild(people);
        }
        ctn.appendChild(content);
    })
    return ctn;
}

function component() {
    return document.createElement('div');
}

export {createContact} 