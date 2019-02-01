import { EXIT_APP, EXIT_SUCCESS, EXIT_FAIL } from './types';
import firebase from 'firebase';


export const exitUser = () => {
  return (dispatch) => {
    dispatch({type: EXIT_APP});

firebase.auth().signOut()
    .then(() => {
      dispatch({type: EXIT_SUCCESS, payload: 'exit' })
      })
    .catch((error) =>{
      dispatch({type: EXIT_FAIL, payload: error })
      });
    }
};