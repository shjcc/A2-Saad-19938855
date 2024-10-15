import {useState} from 'react';

function NewCompany(props){
    const {contact, companies, setCompanies} = props;
    const [company_name, setCompanyName] = useState('');
    const [company_address, setCompanyAddress] = useState('');
}

export default NewCompany;