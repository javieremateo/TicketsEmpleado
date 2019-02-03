import { EMAIL_OLVIDO_CHANGED, OLVIDO_USER_SUCCESS, OLVIDO_USER_FAIL, LOADING_OLVIDO, RESET_OLVIDO} from './types';
import firebase from 'firebase';

export const emailChangedOlvido = (text) => {

  return {
    type: EMAIL_OLVIDO_CHANGED,
    payload: text
  };

};


export const recoverPassword = ({emailOlvido}) =>{
  return (dispatch) => {
  dispatch({type: LOADING_OLVIDO});

  var auth = firebase.auth();
  var emailAddress = emailOlvido;
  
  auth.sendPasswordResetEmail(emailAddress).then(function() {
      dispatch({type: OLVIDO_USER_SUCCESS })
  }).catch(function(error) {
      dispatch({type: OLVIDO_USER_FAIL, payload: error })
  });
      
  };

};  

export const resetOlvido = () => {

  return {
    type: RESET_OLVIDO,
  };

};

