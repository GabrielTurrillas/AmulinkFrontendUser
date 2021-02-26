import React, { Fragment } from 'react';
import SesionLista from '../../components/terapia/SesionLista';
import FormularioSesion from '../../components/terapia/FormularioSesion';

const RegistroSesion = () => {
    return (
        <Fragment>
            <h3 className="display-4">Registro de Sesion</h3>
            <p className="lead mb-5">Registra una sesion</p>
            <FormularioSesion />
            <div className='mt-5'></div>
            <SesionLista />
        </Fragment>
    );
}

export default RegistroSesion;
