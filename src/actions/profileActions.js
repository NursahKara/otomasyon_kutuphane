import firebase from 'firebase';

import { getDatabase } from '../components/common/database';

export const PROFILE_CHANGED ='profile_changed';
export const SEND_INFORMATION_PROFILE='send_information_profile';

export const changeProfile =(information)=>{
    return{
        type:PROFILE_CHANGED,
        payload:information
    }
}
export const sendInformationProfile =(information)=>{
    const currentUser=firebase.auth().currentUser;
    const email=currentUser.email;
    return (dispatch)=>{                            //async işlem diye dispatch döndük
        getDatabase().ref('informations')    //ve firebase e istek attık.referans olarak da link vermek gerekiyor.burası ulaşma yöntemi
        .push({email, information})                 //pushun içindeki objeyi informations un içine atıyor
        .then(()=>{                                 //bu işlemlerden sonra dönüş yapan fonk.
            dispatch({
                type:SEND_INFORMATION_PROFILE,
               
            })
        })
    }
}