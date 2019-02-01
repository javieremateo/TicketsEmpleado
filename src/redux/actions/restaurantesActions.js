import { TRAE_INFOREST, LOADING_MAP2, TOTAL_CARGADO } from './types';
import firebase from 'firebase';

export const traeRestaurantes = () => {
  return async (dispatch) =>  {
    dispatch({type: LOADING_MAP2})
    require("firebase/firestore");
    
    var restaurantesVector = [];
    var db = firebase.firestore();
    const restaurantes = await db.collection("Restaurante").get()
    await restaurantes.forEach(doc => {
      restaurantesVector.push(doc.data());
      dispatch({type: TRAE_INFOREST, payload: restaurantesVector})
      
      });

    dispatch({type: TOTAL_CARGADO})
  } 
}

