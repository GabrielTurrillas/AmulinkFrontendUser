import React, { Fragment, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRetrieveSesion } from '../../redux/actions/terapiaActions';

/* Containers
    FichaSesion.js
*/

const SesionDetalle = () => {
    const { id:idSesion } = useParams()
    const dispatch = useDispatch();
    const sesion = useSelector(state => state.terapiaReducer.sesion)

    useEffect(()=>{
        dispatch(getRetrieveSesion(idSesion));
    }, [dispatch, idSesion])
    
    const { pago, asistio, fechaSesion, modalidad, notasSesion, fechaPago, emisionBoleta } = sesion
    const fechaSesionDate = new Date(fechaSesion)
    const fechaPagoDate = new Date(fechaPago)

    return (
        <Fragment>
            <div className='row mt-3'>
                <div className='col'>
                    <p className='font-weight-light'>Fecha de la Sesion: {fechaSesionDate.getDate()}/{fechaSesionDate.getMonth()+1}/{fechaSesionDate.getFullYear()}</p>
                </div>
                <div className='col'>
                    <p className='font-weight-light'>Modalidad: {modalidad}</p>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <p className='font-weight-light'>Pago: {pago ? 'Si' : 'No'}</p>
                </div>
                <div className='col'>
                    <p className='font-weight-light'>Asistencia: {asistio ? 'Si' : 'No'}</p>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <p className='font-weight-light'>Fecha de Pago: {fechaPagoDate.getDate()}/{fechaPagoDate.getMonth()+1}/{fechaPagoDate.getFullYear()}</p>
                </div>
                <div className='col'>
                    <p className='font-weight-light'>Emision de Boleta: {emisionBoleta ? 'Si' : 'No'}</p>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-12'>
                    <p className='font-weight-light'>Notas de la Sesion: {notasSesion}</p>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <Link className='mb-3 mt-4 btn btn-primary' to={`/modificar_sesion/${idSesion}`}>Modificar</Link>
                </div>
            </div>
        </Fragment>
    );
}

export default SesionDetalle;
