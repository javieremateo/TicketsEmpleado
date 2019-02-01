import { EMAIL_LOGINCHANGED, PASSWORD_LOGINCHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOADING_LOGIN } from "../actions/types";

const INITIAL_STATE = { emailLogIn: '', passwordLogIn: '', user: null, error: '', loading: false };

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {
    
    case EMAIL_LOGINCHANGED:
      return { ...state, emailLogIn: action.payload, error:'', loading:false};
    
    case PASSWORD_LOGINCHANGED:
      return { ...state, passwordLogIn: action.payload, error:'', loading: false};
      
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, error:'', loading: false, emailLogIn: '', passwordLogIn: ''};

    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload.message, emailLogIn:'', passwordLogIn:'', loading: false};
    
    case LOADING_LOGIN:
      return {...state, loading: true};  

    default:
      return state;
      
  }
}