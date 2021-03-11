import {
    FETCH_SESIONES_SUCCESS,
    FETCH_SESIONES_FAILURE,
    ADD_SESION_SUCCESS,
    ADD_SESION_FAILURE,
    FETCH_TERAPIA_SUCCESS,
    FETCH_TERAPIA_FAILURE,
    FETCH_SESION_SUCCESS,
    FETCH_SESION_FAILURE,
    PUT_SESION_SUCCESS,
    PUT_SESION_FAILURE,
    GET_SESIONES_TERAPEUTA_SUCCESS,
    GET_SESIONES_TERAPEUTA_FAILURE,
    GET_LIST_TERAPIA_TERAPEUTA_SUCCESS,
    GET_LIST_TERAPIA_TERAPEUTA_FAILURE,
} from '../actions/types';

const initialState = {
    sesiones: [],
    sesionesTerapeuta:[],
    terapia: {},
    terapias: [],
    sesion:[],
    errors:'',
}

const terapiaReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_SESIONES_SUCCESS:
            return {
                ...state,
                sesiones: action.payload,
                errors:''
            }
        case FETCH_SESIONES_FAILURE:
            return {
                ...state,
                errors: action.payload,
            }
        case ADD_SESION_SUCCESS:
            return {
                ...state,
                sesiones: [action.payload, ...state.sesiones],
                errors:'',
            }
        case ADD_SESION_FAILURE:
            return {
                ...state,
                errors: action.payload,
            }
        case FETCH_TERAPIA_SUCCESS:
            return {
                ...state,
                terapia: action.payload,
                errors: '',
            }
        case FETCH_TERAPIA_FAILURE:
            return {
                ...state,
                errors: action.payload,
            }
        case FETCH_SESION_SUCCESS:
            return {
                ...state,
                sesion: action.payload,
                errors: '',
            }
        case FETCH_SESION_FAILURE:
            return {
                ...state,
                errors: action.payload,
            }
        case PUT_SESION_SUCCESS:
            return {
                ...state,
                sesion:action.payload,
                errors:'',
            }
        case PUT_SESION_FAILURE:
            return {
                ...state,
                errors: action.payload,
            }
        case GET_SESIONES_TERAPEUTA_SUCCESS:
            return {
                ...state,
                sesionesTerapeuta: action.payload,
                errors:'',
            }
        case GET_SESIONES_TERAPEUTA_FAILURE:
            return {
                ...state,
                errors:action.payload,
            }
        case GET_LIST_TERAPIA_TERAPEUTA_SUCCESS:
            return {
                ...state,
                terapias: action.payload,
                errors:'',
            }
        case GET_LIST_TERAPIA_TERAPEUTA_FAILURE:
            return {
                ...state,
                errors:action.payload,
            }
        default:
            return state
    }
}
export default terapiaReducer;