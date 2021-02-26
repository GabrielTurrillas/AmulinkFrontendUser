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
} from '../actions/types';

const initialState = {
    sesiones: [],
    terapia: {
        id:''
    },
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
        default:
            return state
    }
}
export default terapiaReducer;