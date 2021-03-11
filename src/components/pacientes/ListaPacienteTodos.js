import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListPaciente } from '../../redux/actions/pacientesActions';

/* Containers:
    AgregarPacientes.js
    Home.js
    */
const PacienteListaTodos = () => {
    const dispatch = useDispatch();
    const pacientes = useSelector(state => state.pacientesReducer.pacientes)

    useEffect(() => {
        dispatch(getListPaciente());
    }, [dispatch]);
    
    if (!pacientes || !pacientes.length) {
        return (
            <p>
                Spiner
            </p>
        ) 
    };

    return (
        <Fragment>
            <div className='card mt-4 container-fluid'>
                <div className='row'>
                    <table className="table table-hover">
                        <thead>
                            <tr className='d-flex'>
                                <th className="col-1">Id</th>
                                <th className="col-3">Nombre</th>
                                <th className="col-2">Prevision o Programa</th>
                                <th className="col-2">Telefono</th>
                                <th className="col-2">Email</th>
                                <th className="col-1 d-flex justify-content-end ml-5">Sesiones</th>
                            </tr>
                        </thead>
                        <tbody>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    ); 
};

export default PacienteListaTodos;