import React, { Fragment } from 'react';
import ListaPacienteTodos from '../../components/pacientes/ListaPacienteTodos';

const PacienteListaTodosContainer = () => {
    return (
        <Fragment>
            <div className='row'>
                <div className='col'>
                    <h1 className='display-4'>Pacientes</h1>
                </div>
            </div>
            <ListaPacienteTodos />
        </Fragment>
    );
};

export default PacienteListaTodosContainer;