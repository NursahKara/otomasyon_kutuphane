import firebase from 'firebase';
import { getDatabase } from '../components/common/database';
import { Actions } from 'react-native-router-flux';

export const NAME_CHANGED ='name_changed';
export const SURNAME_CHANGED ='surname_changed';
export const NICK_CHANGED ='nick_changed';
export const FETCH_PROFILE_INFORMATIONS='fetch_profile_informations';
export const SEND_INFORMATION_PROFILE='send_information_profile';

export const changeName  =(name)=>{
    return{
        type:NAME_CHANGED,
        payload:name
    }
}
export const changeSurname  =(surname)=>{
    return{
        type:SURNAME_CHANGED,
        payload:surname
    }
}
export const changeNick  =(nick)=>{
    return{
        type:NICK_CHANGED,
        payload:nick
    }
}
export const sendInformationProfile =(name,surname,nick)=>{
    const currentUser=firebase.auth().currentUser;
    const email=currentUser.email;
    return (dispatch)=>{                            //async işlem diye dispatch döndük
        getDatabase().ref('User_Informations')                   //ve firebase e istek attık.referans olarak da link vermek gerekiyor.burası ulaşma yöntemi
        .push({email,name,surname,nick})                 //pushun içindeki objeyi informations un içine atıyor
        .then(()=>{                                 //bu işlemlerden sonra dönüş yapan fonk.
            dispatch({
                type:SEND_INFORMATION_PROFILE,
            });
            
        })
    }
}


export const fetchProfileInformations=()=>{
    return(dispatch)=>{
        getDatabase().ref('User_Informations')
        .on('value', (snapshot)=>{
            console.log(snapshot.val())
            dispatch({
                type:FETCH_PROFILE_INFORMATIONS,
                payload:snapshot.val()
            })
        })
    }
}