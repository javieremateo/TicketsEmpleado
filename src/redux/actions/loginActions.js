import { EMAIL_LOGINCHANGED, PASSWORD_LOGINCHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOADING_LOGIN} from './types';
import firebase from 'firebase';

export const emailLogInChanged = (text) => {

  return {
    type: EMAIL_LOGINCHANGED,
    payload: text
  };

};

export const passwordLogInChanged = (text) => {
  return {
    type: PASSWORD_LOGINCHANGED,
    payload: text
  };

};

export const logInUser = ({emailLogIn, passwordLogIn}) =>{
  return (dispatch) => {
  dispatch({type: LOADING_LOGIN});

  firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
    .then(user => {
      dispatch({type: LOGIN_USER_SUCCESS, payload: user })
      })
    .catch(error =>{
      dispatch({type: LOGIN_USER_FAIL, payload: error })
      });
      
  };

};  
