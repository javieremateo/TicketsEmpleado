import React from 'react';
import { Provider as StoreProvider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase';
import reducers from './src/redux/reducers';

import FirebaseLaunch from './src/components/LoadingApp/FirebaseLaunch';

class App extends React.Component {
  
  async componentWillMount() {
    const config = {
      apiKey: "AIzaSyAK8b9Tp7bB7ZB0txNbORKlmD6W2MDgXe8",
      authDomain: "tickets-6e989.firebaseapp.com",
      databaseURL: "https://tickets-6e989.firebaseio.com",
      projectId: "tickets-6e989",
      storageBucket: "tickets-6e989.appspot.com",
      messagingSenderId: "364022579142",
    };
    firebase.initializeApp(config);
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')})
}

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <StoreProvider store = {store}>
        <FirebaseLaunch/>
      </StoreProvider>
    )
  }
}

export default App;

