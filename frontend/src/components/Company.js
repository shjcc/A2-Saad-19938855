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
        <tr>
            <td>{company.company_name}</td>
            <td>{company.company_address}</td>
            <td style={
                {
                    width: '14px',
                }
            }>
                <button className="button red" onClick={deleteCompany}>Delete Company</button>
            </td>
        </tr>
    );

}

export default Company;