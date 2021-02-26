import React, { Fragment } from 'react';
import TotalHorasAtendidas from '../../components/informes/TotalHorasAtendidas'
import NumeroPacientes from '../../components/informes/NumeroPacientes'

const ResumenMensual = () => {
    return ( 
        <Fragment>
            <h3 className='display 4'>Resumen Mensual</h3>
            <div className='row mt-4'>
                <div className="col">
                    <p>Numero de Pacientes Activos: <NumeroPacientes/></p>
                </div>
            </div> 
            <div className='row'>
                <div className="col">
                    <p>Total Horas Atendidas Este Mes: <TotalHorasAtendidas/></p>
                </div>
            </div> 
        </Fragment>
    );
}

export default ResumenMensual;
