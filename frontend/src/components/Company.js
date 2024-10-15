function Company(props) {
    const {contact, company, companies, setCompanies} = props;

    async function deleteCompany() {
        const response = await fetch('http://localhost/api/contacts/' + contact.id + '/companies/' + company.id, {
            method: 'DELETE',
        });

        if (response.ok) {
            let newCompanies = companies.filter((p) => {
                return p.id !== company.id;
            });
            setCompanies(newCompanies);
        } else {
            console.error('issue with companyDelete function T_T')
        }
    }
    return (
        <div>
            <h5>{company.company_name}</h5>
            <p>{company.company_address}</p>
            <button onClick={deleteCompany}>Delete Company</button>
        </div>
    )

}

export default Company;