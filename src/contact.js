import { createElement } from "./createDoc";
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

    const ctn = createElement('div', 'contacts', '');
    contacts.forEach( contact => {
        const content = createElement('div', 'worker border-1', '');
        for (let key in contact) {
            //console.log(key)
            if (key === 'name') {
                content.appendChild(createElement('h2', `main ${key}`, `${contact[key]}`));
            } else {
                content.appendChild(createElement('p', `${key}`, `${contact[key]}`));
            }   
        }
        ctn.appendChild(content);
    })
    return ctn;
}

export {createContact} 