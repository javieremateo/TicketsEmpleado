import React, { Component } from 'react';
import { connect } from 'react-redux';
import {emailChangedOlvido, recoverPassword} from '../../redux/actions/index';
import { withNavigation } from 'react-navigation';

import { ImageBackground, StatusBar,StyleSheet } from 'react-native';
import { View, Spinner, Input, Form, Button, Item, Text, Container, StyleProvider, Toast} from 'native-base';

import FlexImage from 'react-native-flex-image';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

class Contrasenna extends Component {
  
  onEmailChangeOlvido(text){
    this.props.emailChangedOlvido(text)
  }

  onButtonPressOlvidoEmail(){
    const {emailOlvido} = this.props;
    this.props.recoverPassword({emailOlvido});
  }

  renderToast(){
    if(this.props.errorOlvido != ''){
      return(
      Toast.show({
        text: this.props.errorOlvido,
        buttonText: 'Okay',
        duration: 6600
      }))
    }
  }


  renderSpinnerButton() {
    
    if (this.props.loadingOlvido) {
      return <Spinner color='red' />}
    else {
      if (!this.props.mensajeOlvido) {     
      return(
      <View style = {{flex: 1}} >
          <View style={{flex:0.5}}/>
          <View style={{flex:1}}>
            <Text style= {styles.titulos}>
              Por favor escriba su email y pulse Enviar.
            </Text>
          </View>
          <View style={{flex:1}}/>
          <Form style={{flex:1.5, paddingLeft: 16, paddingRight:32}}>
            <Item>
              <Input 
                style={{fontSize:20}}
                placeholder="Correo Electronico"
                label="Email"
                onChangeText ={this.onEmailChangeOlvido.bind(this)}
                value = {this.props.emailOlvido}
              />
            </Item>

            <View style = {{flex:0.1}}/>
     
          </Form>      
            
          <View style={{flex:1}}/>
            <View style = {{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
              <Button block onPress={this.onButtonPressOlvidoEmail.bind(this)} style = {{width: 200, borderRadius:9 }}>
                <Text style={{fontSize:14}}>Enviar</Text>
              </Button>
            </View>
            <View style={{flex:1}}/>



      </View>  
      )  
      }else{
        return(
        <View style = {{flex: 1, paddingLeft: 16, paddingRight:16, alignSelf: 'center', justifyContent: 'center' }} >
            <Text style = {styles.titulos}>CorreoEnviado</Text>
            <View style = {{flex: 0.2}}/>  
            <Text style = {styles.titulos2}>Por favor siga las instrucciones indicadas en el correo</Text>
        </View>
        )  

      }
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



          <View style={{flex:6 }}>
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


const styles = StyleSheet.create({
  titulos:{
  color: 'grey',
  fontSize: 24,
  alignSelf: 'center',
  paddingLeft: 32, paddingRight:32
},
titulos2:{
  color: 'grey',
  fontSize: 20,
  alignSelf: 'center',
  paddingLeft: 16, paddingRight:16,
  textAlign: 'center'

},


})

const mapStateToProps = state => {
  return {
    emailOlvido: state.olvido.emailOlvido,
    errorOlvido: state.olvido.errorOlvido,
    loadingOlvido: state.olvido.loadingOlvido,
    mensajeOlvido: state.olvido.mensajeOlvido
  }
};

export default 
  connect(mapStateToProps, {emailChangedOlvido, recoverPassword})
  (withNavigation(Contrasenna))