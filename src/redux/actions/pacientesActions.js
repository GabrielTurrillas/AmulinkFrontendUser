import axios from '../../axios';
import {  
    FETCH_PACIENTES_SUCCESS, 
    FETCH_PACIENTES_FAILURE ,
    FETCH_PACIENTE_DETALLE_SUCCESS,
    FETCH_PACIENTE_DETALLE_FAILURE
} from './types';

//COMPONENTES: 
//(user): PacienteLista
export const getListPaciente = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };

    axios.get('/api/paciente/listTerapeutaPaciente', config)
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
        console.log('error',err)
    });
};

//COMPONENTES: 
//(user): PacienteDetalle
export const getRetrievePaciente = (idPaciente) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get(`/api/paciente/retrievePaciente/${idPaciente}`, config)
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






