import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Login from './Login';
import { Root } from "native-base";


class HomeLogin extends Component {
  static navigationOptions = {header: null}
  render() {
    return ( <Login/> );
  }
}

class HomeRegistro extends Component {
  static navigationOptions = {header: null}
  render() {
    return ( <Registro/> );  
  }
}

class HomeRecoverPassword extends Component {
  static navigationOptions = {header: null}
  render() {
    return ( <RecoverPassword/> );  
  }
}

class HomeTerminos extends Component {
  static navigationOptions = {header: null}
  render() {
    return ( <Terminos/> );  
  }
}

const StackHome = createStackNavigator(
  {
    Home: HomeLogin,
    Registro: HomeRegistro,
    Terminos: HomeTerminos,
    RecoverPassword: HomeRecoverPassword
  },
  {
    initialRouteName: 'Home',
  }
  
);

const ContainerHome = createAppContainer(StackHome);

export default class NavHomeScreen extends React.Component {
 
  render() {
    return (
      <Root>
        <ContainerHome/>
      </Root>
    )
  }
}