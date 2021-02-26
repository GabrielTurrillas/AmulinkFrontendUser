import React, { Fragment } from 'react';
import PacienteLista from '../../components/pacientes/PacienteLista';

const Pacientes = () => {
    return (
        <Fragment>
            <h3 className='display-4'>Pacientes</h3>
            <p className='lead'>Lista de Pacientes</p>
            <PacienteLista />
        </Fragment>
    );
}

export default Pacientes;