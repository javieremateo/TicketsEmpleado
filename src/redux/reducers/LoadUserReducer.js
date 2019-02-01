import { TRAE_SALDOUSER, TRAE_SALDOFAIL } from "../actions/types";

const INITIAL_STATE = { nombre: '', telefono: '', email: '', saldo: '', error: {} };

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {
    
    case TRAE_SALDOUSER:
      return { ...state, saldo: action.payload};


    //case TRAE_INFOOUSER:
      //return { ...state, nombre: action.payload.nombre, telefono: action.payload.telefono, email: action.payload.email, gyms: action.payload.gyms};

    case TRAE_SALDOFAIL:
      return { ...state, error: error};

    default:
      return state;
      
  }
}