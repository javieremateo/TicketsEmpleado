import React, { Component } from 'react';
import { connect } from 'react-redux';
import {emailLogInChanged, passwordLogInChanged, logInUser} from '../../redux/actions/index';
import { withNavigation } from 'react-navigation';

import { ImageBackground, StatusBar } from 'react-native';
import { View, Spinner, Input, Form, Button, Item, Text, Container, StyleProvider, Toast} from 'native-base';

import FlexImage from 'react-native-flex-image';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

class LogInForm extends Component {
   
  onEmailChange(text){
    this.props.emailLogInChanged(text)
  }

  onPasswordChange(text){
    this.props.passwordLogInChanged(text)
  }

  onButtonPressOlvido(){
    const {emailLogIn, passwordLogIn} = this.props;
    this.props.logInUser({emailLogIn, passwordLogIn});
  }

  onButtonPressLogIn(){
    const {emailLogIn, passwordLogIn} = this.props;
    this.props.logInUser({emailLogIn, passwordLogIn});
  }

  onButtonPressRegister() {
    this.props.navigation.navigate('Registro') 
  }  

  renderToast(){
    if(this.props.errorLogIn != ''){
      return(
      Toast.show({
        text: this.props.errorLogIn,
        buttonText: 'Okay',
        duration: 6600
      }))
    }
  }


  renderSpinnerButton() {
    if (this.props.loadingLogIn) {
      return <Spinner color='red' />}
    else {     
      return(
      <View style = {{flex: 1, paddingLeft: 16, paddingRight:16 }} >
         
            <View style = {{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
              <Button block onPress={this.onButtonPressLogIn.bind(this)} style = {{width: 200, borderRadius:9 }}>
                <Text style={{fontSize:14}}>LogIn</Text>
              </Button>
            </View>


            <View style = {{flex: 4, justifyContent: 'center', alignSelf: 'center' }} >
              <Text > ──────────  O  ──────────</Text>
            </View>

            <View style = {{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
              <Button block onPress={this.onButtonPressLogIn.bind(this)} style = {{width: 200, borderRadius:9 }}>
                <Text style={{fontSize:14}}>Registrarse</Text>
              </Button>
            </View>

       
      </View>  
      )  
      }
  }

  render(){
    return (
      <StyleProvider style={getTheme(material)}>
      <Container>
        <ImageBackground  
          source={require('../../../assets/fondo.png')} 
          style={{
            resizeMode: 'center',
            position: 'absolute',
            width: '100%',
            height: '100%',
            }}>

        <View style={{flex:1,
            justifyContent: 'center', marginTop: (StatusBar.currentHeight) }}>
          <View style={{flex:0.5}}/>
          <View style={{flex:3, 
            justifyContent: 'center', alignItems: 'center',
            }}>
            <FlexImage
              source={require('../../../assets/Logo2.png')}
              style={{flex: 3}}
              
            /> 
          </View>
          <View style={{flex:0.1}}/>
          <Form style={{flex:3, paddingLeft: 16, paddingRight:32}}>
            <Item>
              <Input 
                style={{fontSize:20}}
                placeholder="Correo Electronico"
                label="Email"
                onChangeText ={this.onEmailChange.bind(this)}
                value = {this.props.emailLogIn}
              />
            </Item>
            <Item>
              <Input 
                style={{fontSize:20}}
                secureTextEntry
                placeholder="Contraseña"
                label="Contraseña"
                onChangeText ={this.onPasswordChange.bind(this)}
                value = {this.props.passwordLogIn}
              />
            </Item >
            <View style = {{flex:0.1}}/>
            <View style = {{flex:1, flexDirection: 'row',}}>
              <View style = {{flex:1.5}}/>
              <Button style = {{alignSelf: 'stretch'}} small transparent info onPress={this.onButtonPressOlvido.bind(this)}>
                <Text uppercase={false} style={{ fontSize: 12,color:'#585858', alignSelf: 'stretch' }}>Olvidaste la contraseña?</Text>
              </Button>  
            </View>


          </Form>      
          <View style={{flex:2.5 }}>
            {this.renderSpinnerButton()}
          </View>
          <View style={{flex:2, justifyContent: 'center', alignItems: 'center'}}>
            <Text>
            {this.renderToast()}
            </Text>
            



          </View>  
        </View>
        </ImageBackground>
      </Container>
      </StyleProvider>

    )
  }
  
}


const flexStyle={
  borderBottomColor: 'black',
  borderBottomWidth: 1, borderTopColor: 'black', borderTopWidth: 1
}

const mapStateToProps = state => {
  return {
    emailLogIn: state.login.emailLogIn,
    passwordLogIn: state.login.passwordLogIn,
    errorLogIn: state.login.error,
    loadingLogIn: state.login.loading
  }
};

export default 
  connect(mapStateToProps, {emailLogInChanged, passwordLogInChanged, logInUser})
  (withNavigation(LogInForm))