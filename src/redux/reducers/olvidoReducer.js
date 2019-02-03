import { EMAIL_OLVIDO_CHANGED, OLVIDO_USER_SUCCESS, OLVIDO_USER_FAIL, LOADING_OLVIDO, RESET_OLVIDO } from "../actions/types";

const INITIAL_STATE = { emailOlvido: '', mensajeOlvido: false, errorOlvido: '', loadingOlvido: false };

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {
    
    case EMAIL_OLVIDO_CHANGED:
    console.log(action.payload)
      return { ...state, emailOlvido: action.payload, error:'', loading:false};
    
    case OLVIDO_USER_SUCCESS:
      console.log('envioemail')
      return { ...state, mensajeOlvido: true, error:'', loading: false};

    case OLVIDO_USER_FAIL:
    console.log(action.payload)
      return { ...state, errorOlvido: action.payload.message, loading: false};
    
    case LOADING_OLVIDO:
    console.log('cargandoOlvido')
      return {...state, loading: true};
    
    case RESET_OLVIDO:
      return {...state, emailOlvido: '', mensajeOlvido: false, errorOlvido: '', loadingOlvido: false};  

    default:
      return state;
      
  }
}