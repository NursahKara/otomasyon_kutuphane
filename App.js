import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './src/router';
import { getDatabase } from './src/components/common/database';
import SplashScreen from 'react-native-splash-screen';
export default class App extends Component{
  componentDidMount() {
      SplashScreen.hide(); //android/app/src/res/drawable/launch_screen.png
  }
  componentWillMount(){
        getDatabase()
  }
  render(){
    const store=createStore(reducers,{},applyMiddleware(ReduxThunk));
    return(
<Provider store={store}>
  <Router/>
</Provider>
    )
  }
}