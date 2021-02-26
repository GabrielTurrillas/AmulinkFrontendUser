import axios from '../../axios';
import {
    FETCH_NUMERO_HORAS_MES_SUCCESS,
    FETCH_NUMERO_HORAS_MES_FAILURE,
    FETCH_NUMERO_PACIENTES_SUCCESS,
    FETCH_NUMERO_PACIENTES_FAILURE,
} from './types';

export const fetchNumeroHorasMes = () => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get('api/informes/numeroHorasMes', config)
    .then(res => {
        dispatch({
            type: FETCH_NUMERO_HORAS_MES_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: FETCH_NUMERO_HORAS_MES_FAILURE,
            payload: err.data
        });
    });
};

export const fetchNumeroPacientes = () => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get('api/informes/numeroPacientes', config)
    .then(res => {
        dispatch({
            type: FETCH_NUMERO_PACIENTES_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: FETCH_NUMERO_PACIENTES_FAILURE,
            payload: err.data
        });
    });
}