import { USERSTATUS_FALSE, USERSTATUS_TRUE } from './types';
import firebase from 'firebase';

export const checkUserStatus = () =>{
  return (dispatch) => {
  
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("logeado")
      dispatch({type: USERSTATUS_TRUE, payload: true })
    } 
    else {
      console.log("no logeado")
      dispatch({type: USERSTATUS_FALSE, payload: false })
    }
  });
  }
}


