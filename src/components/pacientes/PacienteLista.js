import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListPacientes } from '../../redux/actions/pacientes';
import { load_user } from '../../redux/actions/auth';
import { Link } from 'react-router-dom';

/* Containers
    Pacientes.js
    Home.js
*/

const PacienteLista = () => {
    const dispatch = useDispatch();
    const pacientes = useSelector(state => state.pacientesReducer.pacientes)

    useEffect(() => {
        load_user();
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
                            <th scope="col">Apellido Paterno</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pacientes.map(({ id, nombre, apellidoPaterno, telefono, email }) =>
                            <tr key={id} className='clickable-row'>
                                <th scope="row">{id}</th>
                                <td><Link to={"pacientes/"+id}>{nombre}</Link></td>
                                <td><Link to={"pacientes/"+id}>{apellidoPaterno}</Link></td>
                                <td><Link to={"pacientes/"+id}>{telefono}</Link></td>
                                <td><Link to={"pacientes/"+id}>{email}</Link></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Fragment>
    ) 
}

export default PacienteLista;
