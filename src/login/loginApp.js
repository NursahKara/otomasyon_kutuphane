import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
import firebase from 'firebase';
import Router from '../router';
export default class loginApp extends Component{
    // componentDidMount(){
    //     try {
    //     firebase.initializeApp({
    //             apiKey: 'AIzaSyDS8NjYoi3sETSbXONu2rJPskkvhRnX-mw',
    //             authDomain: 'girisyapmauygulamasi.firebaseapp.com',
    //             databaseURL: 'https://girisyapmauygulamasi.firebaseio.com',
    //             projectId: 'girisyapmauygulamasi',
    //             storageBucket: 'girisyapmauygulamasi.appspot.com',
    //             messagingSenderId: '337208108607',
    //         })
    //     }
    //     catch (err) {
    //         if (!/already exists/.test(err.message)) {
    //             console.error('Firebase initialization error raised', err.stack)
    //             }}
    //     const firebaseApp= firebase;
    // }

    render(){
        const store=createStore(reducers,{},applyMiddleware(ReduxThunk)); //{} bunun içine default olarak email kısmında gözükebilecek şeyi yazabilirdik. {auth:{email:'default yazı'}}
        return(
            <Provider store={store}>
                    <Router/>
            </Provider>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        marginTop:'62%'
    }
})