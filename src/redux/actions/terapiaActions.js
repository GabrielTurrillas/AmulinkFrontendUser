import axios from '../../axios';
import {
    FETCH_SESIONES_SUCCESS,
    FETCH_SESIONES_FAILURE,
    ADD_SESION_SUCCESS,
    ADD_SESION_FAILURE,
    FETCH_TERAPIA_SUCCESS,
    FETCH_TERAPIA_FAILURE,
    FETCH_SESION_SUCCESS,
    FETCH_SESION_FAILURE,
    PUT_SESION_FAILURE,
    PUT_SESION_SUCCESS,
    GET_SESIONES_TERAPEUTA_SUCCESS,
    GET_SESIONES_TERAPEUTA_FAILURE,
    GET_LIST_TERAPIA_TERAPEUTA_SUCCESS,
    GET_LIST_TERAPIA_TERAPEUTA_FAILURE,
} from './types';

//COMPONENTES: SesionDetalle

export const getListTerapiaTerapeuta = () => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get("/api/terapia/listTerapiaTerapeuta" , config)
    .then(res => {
        dispatch({
            type: GET_LIST_TERAPIA_TERAPEUTA_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: GET_LIST_TERAPIA_TERAPEUTA_FAILURE,
            payload: err.data
        });
    })
};

export const getRetrieveSesion = (idSesion) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get("/api/terapia/retrieveSesion/"+idSesion, config)
    .then(res => {
        dispatch({
            type: FETCH_SESION_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: FETCH_SESION_FAILURE,
            payload: err.data
        });
    })
};

//COMPONENTES:
//(user): SesionLista
export const getListSesion = (idPaciente) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get("/api/terapia/listSesion/"+idPaciente, config)
    .then(res => {
        dispatch({
            type: FETCH_SESIONES_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: FETCH_SESIONES_FAILURE,
            payload: err.data
        });
        console.log(err);
    });
};

export const getListSesionTerapeuta = () => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get("/api/terapia/listSesionTerapeuta", config)
    .then(res => {
        dispatch({
            type: GET_SESIONES_TERAPEUTA_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: GET_SESIONES_TERAPEUTA_FAILURE,
            payload: err.data
        });
        console.log(err);
    });
};

//COMPONENTES:
//(user): PacienteDetalle, FormularioSesion
export const getRetrieveTerapia = (idPaciente) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.get("/api/terapia/retrieveTerapia/"+idPaciente, config)
    .then(res => {
        dispatch({
            type: FETCH_TERAPIA_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: FETCH_TERAPIA_FAILURE,
            payload: err.data
        })
        console.log(err)
    });
};

//COMPONENTES: 
//(user):FormularioModificarSesion
export const putUpdateSesion = (idSesion, body) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.put(`/api/terapia/updateSesion/${idSesion}`, body, config)
    .then(res => {
        dispatch({
            type: PUT_SESION_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: PUT_SESION_FAILURE,
            payload: err.data
        });
    });
};

//COMPONENTES: FormularioSesion
export const postCreateSesion = (body) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };
    axios.post('/api/terapia/createSesion', body, config)
    .then(res => {
        dispatch({
            type: ADD_SESION_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: ADD_SESION_FAILURE,
            payload: err.data
        });
    });
};
