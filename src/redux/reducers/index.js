import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import loggedReducer from './LoggedReducer';
import ExitReducer from './ExitReducer';
import QRReducer from './TraerInfoQRReducer';
import userInfo from './LoadUserReducer';
import mapaInfo from './MapaReducer';
import restaurantesInfo from './RestaurantesReducer';
import olvidoReducer from './olvidoReducer';


export default combineReducers({
  login: LoginReducer,
  logged: loggedReducer,
  exit: ExitReducer,
  infoQR: QRReducer,
  user: userInfo,
  mapa: mapaInfo,
  restaurantesInfo: restaurantesInfo,
  olvido: olvidoReducer


});