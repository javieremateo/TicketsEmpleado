import {  POSICION_USER, NO_DEVICE, SIN_PERMISOS, LOADING_LOCATION } from "../actions/types";

const INITIAL_STATE = { latitud:0, longitud:0, errorMapa:'', loadingMap: true, errorCarga:true };

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {
    
    case POSICION_USER:
      return { ...state, errorMapa:'', latitud: action.payload.coords.latitude, longitud: action.payload.coords.longitude, loadingMap: false, errorCarga: false};
    
    case NO_DEVICE:
      return { ...state, errorMapa: payload, loadingMap: false, errorCarga:true};
      
    case  SIN_PERMISOS:
      return { ...state, errorMapa: payload, loadingMap: false, errorCarga:true};

    case  LOADING_LOCATION:
      return { ...state, loadingMap: true, errorCarga:true};

    default:
      return state;
      
  }
}