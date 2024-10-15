import {useState} from 'react';

function NewCompany(props){
    const {contact, companies, setCompanies} = props;
    const [company_name, setCompanyName] = useState('');
    const [company_address, setCompanyAddress] = useState('');

    async function createCompany(e){
        e.preventDefault();

        const response = await fetch('http://localhost/api/contacts/' + contact.id + '/companies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                company_name,
                company_address
            })
        });

        const data = await response.json();

        if (data.id) {
            setCompanyName(...companies, data);
        }

        setCompanyName( '');
        setCompanyAddress( '');


    }

}

export default NewCompany;