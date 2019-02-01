import { TRAE_INFOQR, QR_LOADING, TRAE_INFOQRFAIL } from "../actions/types";

const INITIAL_STATE = { infoQR: {}, error: '', infoQRCargada: false};

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {
    
    case TRAE_INFOQR:
      //console.log(action.payload)
      return { ...state, infoQR: action.payload, infoQRCargada: true};

    case QR_LOADING:
      //console.log(action.payload)
      return { ...state, infoQRcargada: false};


    case TRAE_INFOQRFAIL:
      return { ...state, error: error};

    default:
      return state;
      
  }
}