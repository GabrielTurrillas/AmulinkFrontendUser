import {
    FETCH_PERFIL_SUCCESS,
    FETCH_PERFIL_FAILURE,
    PUT_PERFIL_SUCCESS,
    PUT_PERFIL_FAILURE,
} from '../actions/types';

const initialState = {
    perfil: {
        userAccount: '',
        rut:'',
        nombre:'',
        apellidoPaterno:'',
        apellidoMaterno:'',
        telefono:'',
        email:'',
        genero:'',
        fechaNacimiento:''
    },
    errors:'',
    sesionesMes: '',
};

const terapeutaReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_PERFIL_SUCCESS:
            return {
                ...state,
                perfil: action.payload,
                errors:'',
            };
        case FETCH_PERFIL_FAILURE:
            return {
                ...state,
                errors: action.payload,
            };
        case PUT_PERFIL_SUCCESS:
            return {
                ...state,
                perfil: action.payload,
                errors:'',
            };
        case PUT_PERFIL_FAILURE:
            return {
                ...state,
                errors: action.payload,
            };
        default:
            return state
    };
};
export default terapeutaReducer;