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
            setCompanies((prevCompanies) => [...prevCompanies, data]);
        }

        setCompanyName( '');
        setCompanyAddress( '');
    }

    return (
        <form onSubmit={createCompany}>
            <input
                type="text"
                placeholder="Company Name"
                value={company_name}
                onChange={(e) => setCompanyName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Company Address"
                value={company_address}
                onChange={(e) => setCompanyAddress(e.target.value)}
                required
            />
            <button className='button green' type="submit">Create Company</button>
        </form>
    );
}

export default NewCompany;