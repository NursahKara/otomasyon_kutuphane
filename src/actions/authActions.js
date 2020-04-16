import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
export const SELECTBOOK ='select_book';
export const DESELECTBOOK ='deselect_book';
export const EMAIL_CHANGED = 'email_changed';
export const PASSWORD_CHANGED ='password_changed';
export const LOGIN_USER_SUCCESS ='login_user_success';
export const LOGIN_USER_FAILED ='login_user_failed';
export const LOGIN ='login';
export const LOGGED_IN='logged_in';
export const NOT_LOGGED_IN='not_logged_in';
export const GO_TO_DEFINITON='go_to_definition';

export const isLoggedIn=()=>{
return dispatch =>{
    firebase.auth().onAuthStateChanged(user=>{
        if(user){
            Actions.main();
            dispatch({
                type:LOGGED_IN,
                payload:user
            })
        }
        else{
            dispatch({
                type:NOT_LOGGED_IN
            })
        }
    })
}
}

export const emailChanged=(text)=>{
    return{
        type: EMAIL_CHANGED,
        payload:text
    }
}
export const passwordChanged=(password)=>{
    return{
        type: PASSWORD_CHANGED,
        payload:password
    }
}
export const loginUser=(email,password)=>{
    return(dispatch)=>{
        dispatch({
            type:LOGIN
        });
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user=>loginSuccess(dispatch,user))
        .catch(()=>loginUserFailed(dispatch))
        // {
        //     firebase.auth().createUserWithEmailAndPassword(email,password)
        //     .then(user=>loginSuccess(dispatch,user))
        //     .catch(()=>loginUserFailed(dispatch))
        // })
    } 
}
const loginSuccess =(dispatch,user)=>{
    dispatch({
        type:LOGIN_USER_SUCCESS,
        payload:user
    })
    Actions.main();
}
const loginUserFailed =(dispatch)=>{
    dispatch({
        type:LOGIN_USER_FAILED
    })
}
export const selectBook =(book) => {
    return {
        type : SELECTBOOK,
        payload : book
    }
}
export const deselectBook=() =>{
    return{
        type : DESELECTBOOK,
        payload : {}
    }
}

//actionlarda returnun 2 tipi var
//type:actionin tipi ne. reducer la eslestirebilmek  icin
//payload: bu action uzerinde ne tasiyacak
//deselect kitabı silecegi icin bos parametresi bos, payloadi bos. payload olmasa da olurdu
//action ve reducers ları componente bağlayabilmek için connect metoduna ihtiyaç var
//action ile fırlattığımız şeyi reducersda tutuyoruz