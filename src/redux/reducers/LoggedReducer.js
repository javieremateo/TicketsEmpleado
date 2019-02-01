import { USERSTATUS_TRUE, USERSTATUS_FALSE } from "../actions/types";

const INITIAL_STATE = { loggedStatus: 'false' };

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {
    
    case USERSTATUS_FALSE:
      return { ...state, loggedStatus: action.payload};

    case USERSTATUS_TRUE:
      return { ...state, loggedStatus: action.payload};  

    default:
      return state;
      
  }
}