import axios from '../../axios';
import {  
    FETCH_PACIENTES_SUCCESS, 
    FETCH_PACIENTES_FAILURE ,
    ADD_PACIENTE_SUCCESS,
    ADD_PACIENTE_FAILURE,
    FETCH_PACIENTE_DETALLE_SUCCESS,
    FETCH_PACIENTE_DETALLE_FAILURE
} from './types';


export const fetchPacientes = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };

    axios.get("/api/paciente/", config)
    .then(res => {
        dispatch({
            type: FETCH_PACIENTES_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch ({
            type: FETCH_PACIENTES_FAILURE,
        })
        console.log(err)
    });
};

export const fetchPacienteDetalle = (idPaciente) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    console.log('idPaciente:', idPaciente)
    axios.get(`/api/paciente/${idPaciente}`, config)
    .then(res => {
        dispatch({
            type: FETCH_PACIENTE_DETALLE_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch ({
            type: FETCH_PACIENTE_DETALLE_FAILURE,
        })
        console.log(err)
    });
};

export const agregarPacientes = (user, startDate ,{ rut, nombre, apellidoPaterno, apellidoMaterno, telefono, email, genero, direccion, comunaResidencia, ocupacionProfecion }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    const fechaNacimiento = startDate
    const { id:userAccount } = user
    const body = JSON.stringify({ rut, nombre, apellidoPaterno, apellidoMaterno, telefono, email, fechaNacimiento, genero, direccion, comunaResidencia, ocupacionProfecion, userAccount});
    axios.post('/api/paciente/', body, config)
    .then(res =>{
        dispatch({
            type: ADD_PACIENTE_SUCCESS,
            payload: res.data
        })
    })
    .catch (err=>{
        dispatch({
            type: ADD_PACIENTE_FAILURE,
            errors: err.data
        });
    }); 
};






