import firebase from 'firebase';
import { getDatabase } from '../components/common/database';
import { Actions } from 'react-native-router-flux';

export const CHECKBOX_CHANGED='checkbox_changed';
export const FETCH_CHECKBOX_INFORMATIONS='fetch_checkbox_informations';
export const SEND_INFORMATION_CHECKBOX='send_information_checkbox';


export const changeCheckbox  =(checkbox)=>{
    return{
        type:CHECKBOX_CHANGED,
        payload:checkbox
    }
}

export const sendInformationCheckbox =(checkbox)=>{
    const currentUser=firebase.auth().currentUser;
    const email=currentUser.email;
    return (dispatch)=>{                            //async işlem diye dispatch döndük
        getDatabase().ref('User_Checkbox_Informations')                   //ve firebase e istek attık.referans olarak da link vermek gerekiyor.burası ulaşma yöntemi
        .push({email,checkbox})                 //pushun içindeki objeyi informations un içine atıyor
        .then(()=>{                                 //bu işlemlerden sonra dönüş yapan fonk.
            dispatch({
                type:SEND_INFORMATION_CHECKBOX,
            });
            
        })
    }
}


export const fetchCheckboxInformations=()=>{
    return(dispatch)=>{
        getDatabase().ref('User_Checkbox_Informations')
        .on('value', (snapshot)=>{
            console.log(snapshot.val())
            dispatch({
                type:FETCH_CHECKBOX_INFORMATIONS,
                payload:snapshot.val()
            })
        })
    }
}
