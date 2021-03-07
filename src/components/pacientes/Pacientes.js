import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const PacientesPagination = ({ pacientes, loading }) => {
    if(loading) {
        return <h2>Loading...</h2>; 
    };

    return ( 
        <Fragment>
            <ul className='list-group mb-4'>
                {pacientes.map(({ id, nombre, apellidoPaterno, telefono, email, prevision }) =>
                    <tr key={id} className='clickable-row d-flex'>
                        <th className='col-1' scope="row">{id}</th>
                        <td className='col-3'><Link to={"pacientes/"+id}>{nombre} {apellidoPaterno}</Link></td>
                        <td className='col-2'><Link to={"pacientes/"+id}>{prevision}</Link></td>
                        <td className='col-2'><Link to={"pacientes/"+id}>{telefono}</Link></td>
                        <td className='col-2'><Link to={"pacientes/"+id}>{email}</Link></td>
                        <td className='col-2'><Link className='justify-content-center d-flex mr-4' to={"pacientes/"+id}>100</Link></td>
                    </tr>
                )}
            </ul>
        </Fragment>
    )
};

export default PacientesPagination;
