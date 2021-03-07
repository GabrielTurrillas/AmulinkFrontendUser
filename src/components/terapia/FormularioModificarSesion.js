import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { getRetrieveSesion } from '../../redux/actions/terapiaActions';
import { putUpdateSesion } from '../../redux/actions/terapiaActions';
import { useParams, useHistory } from 'react-router-dom';

const FormularioModificarSesion = () => {
    const history = useHistory()
    const sesion = useSelector(state => state.terapiaReducer.sesion)
    const dispatch = useDispatch();
    const { id:idSesion } = useParams();
    const {register, handleSubmit, errors} = useForm();
    const [fechaSesion, setFechaSesion] = useState(new Date())
    const [fechaPago, setFechaPago] = useState(new Date())
    const { terapia, pago, asistio, fechaSesion:fechaSesionDate, modalidad, notasSesion, fechaPago:fechaPagoDate } = sesion || {}
    
    const routeChange = () => {
        let path =`/pacientes/ficha_sesion/${idSesion}`
        history.push(path)
    }

    useEffect(() => {
        dispatch(getRetrieveSesion(idSesion));
        setFechaSesion(new Date(fechaSesionDate))
        setFechaPago(new Date(fechaPagoDate))
    },[dispatch, fechaPagoDate, fechaSesionDate, idSesion]);

    const onSubmit = (data) => {
        const { pago, asistio, modalidad, notasSesion } = data
        const body = JSON.stringify({terapia, pago, asistio, modalidad, notasSesion, fechaPago, fechaSesion})
        dispatch(putUpdateSesion(idSesion, body));
        routeChange();      
    };

    return (
        <Fragment>
            <h1 className='display-4 mb-4'>Modificar Sesion</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div className='form-group col-6'>
                        <h5>Fecha Sesion</h5>
                        <DatePicker
                            className='form-control' 
                            id='fechaSesion'
                            name='fechaSesion'  
                            dateFormat='dd/MM/yyyy'
                            selected={fechaSesion}
                            onChange={date => setFechaSesion(date)}
                        />
                    </div>
                    <div className='form-group col-6 mt-4'>
                        <input
                            type="checkbox"
                            id="asistio"
                            name="asistio" 
                            defaultChecked={asistio}
                            ref={register({
                            })}
                        /> 
                        <label htmlFor="asistio" className="ml-2">Asistio?</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className="form-group">
                            <h5>Modalidad</h5>
                            <select className="form-control" defaultValue={modalidad} ref={register} name='modalidad'>
                                <option value='Online'>Online</option>
                                <option value='Presencial'>Presencial</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-group col-6 mt-4'>
                        <input
                            type="checkbox"
                            id="pago"
                            name="pago"
                            defaultChecked={pago} 
                            ref={register({
                            })}
                        /> 
                        <label htmlFor="pago" className="ml-2">Pago?</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='form-group col-6'>
                        <h5>Notas de la Sesion</h5>
                        <textarea
                            className='form-control' 
                            type="textarea"
                            name="notasSesion"
                            defaultValue={notasSesion} 
                            placeholder="Notas de la sesion"
                            ref={register({
                            })}
                        /> 
                    </div>
                    <div className='form-group col-6 mt-4'>
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
                <button className='btn btn-success' type='submit' >Registrar</button>
            </form>
        </Fragment>
    );
}

export default FormularioModificarSesion;
