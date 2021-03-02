import React, { Fragment } from 'react';
import PacienteDetalle from '../../components/pacientes/PacienteDetalle';

const FichaPaciente = () => {
    return (
        <Fragment>
            <div style={{width: '55rem', fontSize: 'x-large'}}>
                <h1 className='display-4 mb-4'>Ficha del Paciente</h1>
                <PacienteDetalle />
            </div>
        </Fragment>
    );
}

export default FichaPaciente;