import React, {Component} from 'react';
import { connect } from 'react-redux';
import {checkUserStatus, traeInfoUser, traeUbicacion, traeRestaurantes, traeInfoQR } from '../../redux/actions/index';
import LoadingImage from './LoadingImage'
import ContainerHome from '../HomeScreen/NavHomeScreen';

class FirebaseLaunch extends Component{

  async componentWillMount() { 
    await this.props.checkUserStatus();
    console.log('espera')
    if (this.props.loggedStatus == true) {
      await this.props.traeInfoUser;
      await this.props.getLocation;
      await this.props.traeRestaurantes;
      await this.props.traeInfoQR;
    }
  }

  renderContent() {
      switch (this.props.loggedStatus) {
        case true:
          console.log('App')
          return <LaApp/>;

        case false:
          console.log('HomeScreen')
          return <ContainerHome/>;

        default:
          console.log('LoadingImage')
          return <LoadingImage/>
      }
    }

  render(){
    return (this.renderContent())
    }

}

const mapStateToProps = state => {
  return {
    loggedStatus: state.logged.loggedStatus,
  }
};

export default connect(mapStateToProps, {checkUserStatus, traeInfoQR, traeInfoUser, traeRestaurantes, traeUbicacion})(FirebaseLaunch)