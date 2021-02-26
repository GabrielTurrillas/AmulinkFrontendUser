import axios from '../../axios';
import {
    FETCH_PERFIL_SUCCESS,
    FETCH_PERFIL_FAILURE,
    PUT_PERFIL_SUCCESS,
    PUT_PERFIL_FAILURE,
} from './types';

//COMPONENTES: 
//(user): FichaPerfil, FormularioPerfil
export const getRetrievePerfilTerapeuta = () => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get('/api/terapeuta/retrievePerfilTerapeuta', config)
    .then(res => {
        dispatch({
            type: FETCH_PERFIL_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: FETCH_PERFIL_FAILURE,
            payload: err.data
        });
        console.log(err);
    });
};

//COMPONENTES:
//(user): FormularioPerfil
export const putUpdatePerfil = (body) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.put("/api/terapeuta/updatePerfilTerapeuta", body, config)
    .then(res => {
        dispatch({
            type: PUT_PERFIL_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: PUT_PERFIL_FAILURE,
            payload: err.data
        });
    });
};
