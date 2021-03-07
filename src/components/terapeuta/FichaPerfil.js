import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRetrievePerfilTerapeuta } from '../../redux/actions/terapeutaActions';

/* Containers
    Perfil.js
*/

const FichaPerfil = () => {
    const perfil = useSelector(state => state.terapeutaReducer.perfil);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRetrievePerfilTerapeuta());
    }, [dispatch]);

    const { rut, nombre, apellidoPaterno, apellidoMaterno, telefono, email, genero, fechaNacimiento } = perfil;
    const fechaNacimientoDate = new Date(fechaNacimiento);
    
    return (
        <Fragment>
            <h1 className='display-4 mb-4'>Perfil</h1>
            <div style={{width: '55rem', fontSize: 'x-large'}}>
                <div className='row mt-3'>
                    <div className='col'>
                        <p className='font-weight-light'>Rut: { rut }</p>
                    </div>
                    <div className='col'>
                        <p className='font-weight-light'>Nombre: { nombre }</p>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col'>
                        <p className='font-weight-light'>Apellido Paterno: { apellidoPaterno }</p>
                    </div>
                    <div className='col'>
                        <p className='font-weight-light'>Apelldio Materno: { apellidoMaterno }</p>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col'>
                        <p className='font-weight-light'>Telefono: { telefono }</p>
                    </div>
                    <div className='col'>
                        <p className='font-weight-light'>Email: { email }</p>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col'>
                        <p className='font-weight-light'>Genero: { genero }</p>
                    </div>
                    <div className='col'>
                        <p className='font-weight-light'>Fecha de Nacimiento: { fechaNacimientoDate.getDate() }/{ fechaNacimientoDate.getMonth()+1 }/{ fechaNacimientoDate.getFullYear()} </p>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col'>
                        <Link className='btn btn-primary mt-4' to='/modificar_perfil' role='button'>Modificar Perfil</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default FichaPerfil;
