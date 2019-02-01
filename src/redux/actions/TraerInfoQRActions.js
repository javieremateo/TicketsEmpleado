import { TRAE_INFOQR, TRAE_INFOQRFAIL, QR_LOADING } from './types';
import firebase from 'firebase';

export const traeInfoQR = () =>{
  
  return async (dispatch) => {
    dispatch({type: QR_LOADING});

    require("firebase/firestore");
    const userUid = firebase.auth().currentUser.uid;

    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);
    
    var db = firebase.firestore();
    //db.settings({timestampsInSnapshots: true});

    console.log(userUid)
    const empresa = await db.collection("usuarios").doc(userUid).get();
    const empresaUser = empresa.data().empresa;
    console.log(empresaUser)

    const user = await db.collection("Empresas").doc(empresaUser).collection(`Empleados`).doc(userUid).get();
    const usuarioInfo = (user.data());
    console.log(usuarioInfo);
    dispatch({type: TRAE_INFOQR, payload: usuarioInfo });
  }

};