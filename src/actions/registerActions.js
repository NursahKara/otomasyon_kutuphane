import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { getDatabase } from '../components/common/database';
import {Alert } from 'react-native';
export const EMAIL_REGISTER ='email_register';
export const PASSWORD_REGISTER ='password_register';
export const SEND_INFORMATION_REGISTER='send_information_register';
export const REGISTER_SUCCESS ='register_success';
export const REGISTER_FAILED ='register_failed';
export const REGISTER ='register';
export const USER_HAS_ACCOUNT='user_has_account';


export const emailRegister=(text)=>{
    return{
        type: EMAIL_REGISTER,
        payload:text
    }
}
export const passwordRegister=(password)=>{
    return{
        type: PASSWORD_REGISTER,
        payload:password
    }
}
export const sendInformationRegister=(email,password)=>{
    return(dispatch)=>{
        dispatch({
            type:REGISTER
        });
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>userHasAccount(dispatch))
        .catch(()=>
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(registerR=>registerSuccess(dispatch,registerR))
            .catch(()=>{
                // setTimeout(function(){
                //     Alert.alert("User has an account. You redirect to login page!")
               
                //   }, 2000);
               // alert('User has an account.You redirect to Login page!');
                registerFailed(dispatch)}
                )
        )
    } 
    
}
const userHasAccount =(dispatch)=>{
    dispatch({
        type:USER_HAS_ACCOUNT
    });
    Actions.auth();
}
const registerSuccess =(dispatch,registerR)=>{
    dispatch({
        type:REGISTER_SUCCESS,
        payload:registerR
    });
    Actions.signUp();
}
const registerFailed =(dispatch)=>{
    dispatch({
        type:REGISTER_FAILED
    })
}
