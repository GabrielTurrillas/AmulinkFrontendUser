import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListPaciente } from '../../redux/actions/pacientesActions';
import { Link } from 'react-router-dom';

/* Containers
    Pacientes.js
    Home.js
*/

const PacienteLista = () => {
    const dispatch = useDispatch();
    const pacientes = useSelector(state => state.pacientesReducer.pacientes)

    useEffect(() => {
        dispatch(getListPaciente());
    }, [dispatch])
    
    if (!pacientes || !pacientes.length) {
        return (
            <p>Spiner</p>
        ) 
    }
    return (
        <Fragment>
            <div className='card'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Prevision</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Email</th>
                            <th scope="col">Numero de Sesiones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pacientes.map(({ id, nombre, apellidoPaterno, telefono, email, prevision }) =>
                            <tr key={id} className='clickable-row'>
                                <th scope="row">{id}</th>
                                <td><Link to={"pacientes/"+id}>{nombre} {apellidoPaterno}</Link></td>
                                <td><Link to={"pacientes/"+id}>{prevision}</Link></td>
                                <td><Link to={"pacientes/"+id}>{telefono}</Link></td>
                                <td><Link to={"pacientes/"+id}>{email}</Link></td>
                                <td><Link to={"pacientes/"+id}>NumeroSesiones</Link></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Fragment>
    ) 
}

export default PacienteLista;
