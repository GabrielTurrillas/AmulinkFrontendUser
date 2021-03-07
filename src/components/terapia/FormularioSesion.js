import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { postCreateSesion, getRetrieveTerapia } from '../../redux/actions/terapiaActions';

import "react-datepicker/dist/react-datepicker.css";

/* Containers 
    RegistroSesion.js
*/

const FormularioSesion = () => {
    const history = useHistory();
    const { id:idPaciente } = useParams()
    const instanciaTerapia = useSelector(state => state.terapiaReducer.terapia)
    const {id:terapia} = instanciaTerapia
    const [fechaSesion, setFechaSesion] = useState(new Date())
    const [fechaPago, setFechaPago] = useState(new Date())
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const routeChange = () => {
        let path =`/pacientes/${idPaciente}`
        history.push(path)
    }
    const onSubmit = (data) => {
        const body = {...data, terapia, fechaSesion, fechaPago};
        dispatch(postCreateSesion(body));
        routeChange();
    };
    useEffect(() => {
        dispatch(getRetrieveTerapia(idPaciente));
    },[dispatch, idPaciente]);
    return (    
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div className='form-group col-6'>
                        <h5>Fecha de Sesion</h5>
                        <DatePicker
                            className='form-control' 
                            id='fechaSesion'
                            name='fechaSesion'  
                            dateFormat='dd/MM/yyyy'
                            selected={fechaSesion}
                            onChange={date => setFechaSesion(date)}
                        />
                    </div>
                    <div className='col mt-4'>
                        <div className='form-group'>
                            <input
                                type="checkbox"
                                id="asistio"
                                name="asistio"
                                checked
                                ref={register({
                                })}
                            /> 
                            <label htmlFor="asistio" className="ml-2">Asistio?</label>
                        </div>
                        <div className='form-group'>
                        <input
                            type="checkbox"
                            id="pago"
                            name="pago" 
                            ref={register({
                            })}
                        /> 
                        <label htmlFor="pago" className="ml-2">Pago?</label>
                    </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className="form-group">
                            <h5>Modalidad</h5>
                            <select className="form-control" ref={register} name='modalidad'>
                                <option value='Online'>Online</option>
                                <option value='Presencial'>Presencial</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-group col mt-4'>
                        <label htmlFor="fechaSesion" className='mr-3'>Fecha de Pago</label>
                        <DatePicker
                            className='form-control' 
                            id='fechaPago' 
                            name='fechaPago'
                            dateFormat='dd/MM/yyyy'
                            selected={fechaPago}
                            onChange={date => setFechaPago(date)}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='form-group col-12'>
                        <textarea
                            className='form-control' 
                            type="textarea"
                            name="notasSesion" 
                            placeholder="Notas de la sesion"
                            ref={register({
                            })}
                        /> 
                    </div>
                </div>
                <button className='btn btn-success' type='submit' to={'pacientes/'+idPaciente} >Registrar</button>
            </form>
        </Fragment>
    );
};

export default FormularioSesion;
