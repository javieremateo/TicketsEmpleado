import { POSICION_USER, NO_DEVICE, SIN_PERMISOS, LOADING_LOCATION } from './types';
import { Platform } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

export const treaUbicacion = () => {
  return async (dispatch) => {
    dispatch({type: LOADING_LOCATION})
    
    if (await (Platform.OS === 'android' && !Constants.isDevice)) {
      dispatch({type: NO_DEVICE, payload: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!' })
      
    } else {
      let { status } =  await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        dispatch({type: SIN_PERMISOS, payload: 'Permission to access location was denied'})
        } else {
        let location = await Location.getCurrentPositionAsync({});
        dispatch({ type: POSICION_USER, payload: location });
      };
    } 
  }
}


