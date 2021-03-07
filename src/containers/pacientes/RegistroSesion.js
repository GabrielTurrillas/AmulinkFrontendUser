import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FormularioSesion from '../../components/terapia/FormularioSesion';
import { getRetrievePaciente } from '../../redux/actions/pacientesActions';

const RegistroSesion = () => {
    const paciente = useSelector(state => state.pacientesReducer.pacienteDetalle)
    const dispatch = useDispatch()
    const { id:idPaciente } = useParams();
    useEffect(()=>{
        dispatch(getRetrievePaciente(idPaciente))
    },[dispatch, idPaciente])
    return (
        <Fragment>
            <div className='row'>
                <div className='col'>
                    <h3 className="display-4">Registro de Sesion</h3>
                </div>
                <div>
                    <p className="lead mb-5">{paciente.nombre} {paciente.apellidoPaterno}</p>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <p className="lead mb-5">Registra una sesion</p>
                </div>
            </div>
            <FormularioSesion />
        </Fragment>
    );
}

export default RegistroSesion;
