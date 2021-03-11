import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getListPaciente } from '../../redux/actions/pacientesActions';
import { getListSesionTerapeuta } from '../../redux/actions/terapiaActions';
import { getListTerapiaTerapeuta } from '../../redux/actions/terapiaActions';
import Pagination from './Pagination';
import Pacientes from './Pacientes';

/* Containers
    Pacientes.js
    Home.js
*/

const PacienteLista = () => {
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pacientesPerPage] = useState(15);
    const dispatch = useDispatch();
    const pacientes = useSelector(state => state.pacientesReducer.pacientes)
    const sesiones = useSelector(state => state.terapiaReducer.sesionesTerapeuta)
    const terapias = useSelector(state => state.terapiaReducer.terapias)

    useEffect(() => {
        setLoading(true);
        dispatch(getListPaciente());
        dispatch(getListSesionTerapeuta());
        dispatch(getListTerapiaTerapeuta());
        setLoading(false);
    }, [dispatch])
    
    if (!pacientes || !pacientes.length) {
        return (
            <p>Spiner</p>
        ) 
    }

    const indexOfLastPaciente = currentPage * pacientesPerPage;
    const indexOfFirstPost = indexOfLastPaciente - pacientesPerPage;
    const currentPacientes = pacientes.slice(indexOfFirstPost, indexOfLastPaciente);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <Fragment>
            <div className='card mt-4 container-fluid'>
                <div className='row'>
                    <table className="table table-hover">
                        <thead>
                            <tr className='d-flex'>
                                <th className="col-1">Id</th>
                                <th className="col-3">Nombre</th>
                                <th className="col-2">Prevision</th>
                                <th className="col-2">Telefono</th>
                                <th className="col-2">Email</th>
                                <th className="col-1 d-flex justify-content-end ml-5">Sesiones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Pacientes
                                pacientes={currentPacientes}
                                loading={loading}
                                sesiones= {sesiones}
                                terapias={terapias}
                            />
                        </tbody>
                    </table>
                </div>
                <div className='row d-flex'>
                    <div className='col'>
                        <Pagination 
                            pacientesPerPage={pacientesPerPage}
                            totalPacientes={pacientes.length} 
                            paginate={paginate} />
                    </div>
                    <div className='col'>
                        <Link className='btn btn-primary float-right' to='/listaPacientesTodos'>Todos los Pacientes</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    ) 
};

export default PacienteLista;
