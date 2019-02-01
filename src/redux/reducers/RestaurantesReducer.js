import { TRAE_INFOREST, LOADING_MAP2, TOTAL_CARGADO } from "../actions/types";

const INITIAL_STATE = { infoRestaurantes: {
                                          },
                        error: '', restCargados: true};

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {
    
    case TRAE_INFOREST:
      //console.log(action.payload[0],'AAAAAAAAAAAAAAAASDASDASDADA', action.payload[1])   
      return { ...state, infoRestaurantes: action.payload};

    case LOADING_MAP2:
      return { ...state, restCargados: true};

    case TOTAL_CARGADO:
      return { ...state, restCargados: false};

    default:
      return state;
      
  }
}