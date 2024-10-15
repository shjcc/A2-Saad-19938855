import { useState, useEffect } from 'react';  // import useEffect
import PhoneList from './PhoneList.js';
import Company from "./Company";
import NewCompany from "./NewCompany";

function Contact(props) {
    const {contact, contacts, setContacts} = props;
    const [expanded, setExpanded] = useState(false);
    const [phones, setPhones] = useState([]);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetch('http://localhost/api/contacts/' + contact.id + '/phones')
            .then(response => response.json())
            .then(data => setPhones(data))
            .catch((error) => {
                console.error('Error:', error);
            });
        fetch('http://localhost/api/contacts/' + contact.id + '/companies')
            .then(response => response.json())
            .then(data => setCompanies(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const expandStyle = {
        display: expanded ? 'block' : 'none'
    };

    async function doDelete(e) {
        e.stopPropagation();

        const response = await fetch('http://localhost/api/contacts/' + contact.id, {
            method: 'DELETE',
        });

        let newContacts = contacts.filter((c) => {
            return c.id !== contact.id;
        });

        setContacts(newContacts);
    }

    return (
        <div key={contact.id} className='contact' onClick={(e) => setExpanded(!expanded)}>
            <div className='title'>
                <h3>{contact.name}</h3>
                <h4>{contact.address}</h4>
                <button className='button red' onClick={doDelete}>Delete Contact</button>
            </div>

            <div style={expandStyle}>
            <hr />
                <PhoneList phones={phones} setPhones={setPhones} contact={contact} />
                <h5>Companies</h5>
                {companies.map((company) => (
                    <Company
                        key={company.id}
                        contact={contact}
                        company={company}
                        companies={companies}
                        setCompanies={setCompanies}
                    />
                    ))}
                    <NewCompany
                        contact={contact}
                        companies={companies}
                        setCompanies={setCompanies}
                    />
            </div>
        </div>
    );
}

export default Contact;
