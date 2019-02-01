import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';


export default class LoadingImage extends Component {

  render() {
    const resizeMode  = "stretch"
    return (
      <View>
        <ImageBackground  source={require('../../../assets/splash.png')} 
          style={{ resizeMode,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',}}/>

      </View>
    
      );
    }

}
