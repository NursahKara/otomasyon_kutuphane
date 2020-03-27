import React, {Component} from 'react';
import {View, Text, StyleSheet, ColorPropType} from 'react-native';
import {Input, MyButton} from './common';
import firebase from 'firebase';
import {emailChanged,passwordChanged,loginUser} from '../actions/index';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

class LoginForm extends Component{
 
    componentDidMount(){
        try {
        firebase.initializeApp({
                apiKey: 'AIzaSyDS8NjYoi3sETSbXONu2rJPskkvhRnX-mw',
                authDomain: 'girisyapmauygulamasi.firebaseapp.com',
                databaseURL: 'https://girisyapmauygulamasi.firebaseio.com',
                projectId: 'girisyapmauygulamasi',
                storageBucket: 'girisyapmauygulamasi.appspot.com',
                messagingSenderId: '337208108607',
            })
        }
        catch (err) {
            if (!/already exists/.test(err.message)) {
                console.error('Firebase initialization error raised', err.stack)
                }}
        const firebaseApp= firebase;
    }
    onButtonClicked(){
        const {email,password}=this.props;
        this.props.loginUser(email,password);
    }

    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    render(){
        const {error,loading}=this.props;
        const errorMsg = error ? (
    <Text style={styles.errorStyle}>
        {error}
    </Text>
) : null;
      
        return(
            <View style={styles.loginContainer}>
                <View>
                    <Input text='Email:' inputPlaceHolder='Enter Email'
                                        onChangeText={this.onEmailChange.bind(this)}
                                        value={this.props.email}/>
                </View>
                <View>
                <Input text='Password:' inputPlaceHolder='Enter Password'
                                        onChangeText={this.onPasswordChange.bind(this)}
                                        secureTextEntry
                                        value={this.props.password}/>
                   
                </View>
                {errorMsg}
                <MyButton spinner={loading}
                          title='Login'
                          onPress={this.onButtonClicked.bind(this)}
                          color='#E87B79'/>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    errorStyle:{
        fontSize:20,
        color:'red',
        paddingTop:15,
        alignSelf:'center'
    },
    loginContainer:{
        flex:1,
        justifyContent:'center',
        padding:30
    }
});
const mapStateToProps = state =>{
    const{email,password,loading,error}=state.auth;
    return {
       email,password,loading,error
    }
}

export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginForm);