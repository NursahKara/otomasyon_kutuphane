import firebase from 'firebase';
import { getDatabase } from '../components/common/database';
import { Actions } from 'react-native-router-flux';

export const GRAPHIC_CHANGED='graphic_changed';
export const FETCH_GRAPHIC_INFORMATIONS='fetch_graphic_informations';

export const changeGraphic  =(graphic)=>{
    return{
        type:GRAPHIC_CHANGED,
        payload:graphic
    }
}

export const fetchGraphicsInformations=()=>{
    return(dispatch)=>{
        getDatabase().ref('User_Checkbox_Informations')
        .on('value', (snapshot)=>{
            console.log(snapshot.val())
            dispatch({
                type:FETCH_GRAPHIC_INFORMATIONS,
                payload:snapshot.val()
            })
        })
    }
}
