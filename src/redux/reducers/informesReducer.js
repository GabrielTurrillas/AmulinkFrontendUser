import {
    FETCH_NUMERO_HORAS_MES_SUCCESS,
    FETCH_NUMERO_HORAS_MES_FAILURE,
    FETCH_NUMERO_PACIENTES_SUCCESS,
    FETCH_NUMERO_PACIENTES_FAILURE,
} from '../actions/types';

const initialState = {
    numeroHorasMes:'',
    numeroPacientes:'',
    numeroSesionesPaciente:'',
};

const terapeutaReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_NUMERO_HORAS_MES_SUCCESS:
            return {
                ...state,
                numeroHorasMes: action.payload,
                errors: '',
            }
        case FETCH_NUMERO_HORAS_MES_FAILURE:
            return {
                ...state,
                errors: action.payload
            }
        case FETCH_NUMERO_PACIENTES_SUCCESS:
            return {
                ...state,
                numeroPacientes: action.payload,
                errors: '',
            }
        case FETCH_NUMERO_PACIENTES_FAILURE:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state
    };
};
export default terapeutaReducer;