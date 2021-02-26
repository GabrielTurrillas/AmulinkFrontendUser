import React, { Fragment } from 'react';
import SesionLista from '../../components/terapia/SesionLista';
import { Link } from 'react-router-dom';

const PacienteDashBoard = (props) => {
    const idPaciente = props.match.params.id
    return (
        <Fragment>
            <h3 className='display-4'>Sesiones</h3>
            <p className='lead'>Lista de Sesiones</p>
            <SesionLista />
            <Link className='btn btn-primary mr-4' to={'registro_sesion/'+idPaciente} >Registrar Sesion</Link>
            <Link className='btn btn-outline-primary' to={'ficha_paciente/'+idPaciente} >Ver Ficha del Paciente</Link>
        </Fragment>
    );
};
    
export default PacienteDashBoard;