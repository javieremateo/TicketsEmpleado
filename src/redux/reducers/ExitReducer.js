import { EXIT_APP, EXIT_FAIL, EXIT_SUCCESS } from "../actions/types";

const INITIAL_STATE = { logged: false, loadingExit: false, error: '' };

export default (state = INITIAL_STATE, action) => {


  switch(action.type) {
    
    case EXIT_APP:
      return { ...state, loadingExit: true};
    
    case EXIT_FAIL:
      console.log(payload);
      return { ...state, loadingExit: false, error: payload.code};
      
    case EXIT_SUCCESS:
      return { ...state, logged: true, loadingExit: false};

    default:
      return state;
      
  }
}