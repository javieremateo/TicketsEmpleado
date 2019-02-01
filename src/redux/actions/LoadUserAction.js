import { TRAE_SALDOUSER, TRAE_SALDOFAIL } from './types';
import firebase from 'firebase';
require("firebase/functions");

export const traeInfoUser = () =>{
  return async (dispatch) => {
    try {
    const consultSaldo = firebase.functions().httpsCallable('consultSaldo');
    console.log(consultSaldo)
    const resultado = await consultSaldo('');
    dispatch({type: TRAE_SALDOUSER, payload: resultado.data.saldo });
    } catch(e) {
      console.log(e);
      dispatch({type: TRAE_SALDOFAIL, payload: e})
    };
  }
};
 

