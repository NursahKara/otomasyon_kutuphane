import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
export const FAVBOOK ='fav_book';
export const NOFAVBOOK ='no_fav_book';
export const SEND_FAVORITE_BOOK='send_favorite_book';

export const favBook =(favBook) => {
    return {
        type : FAVBOOK,
        payload : favBook
    }
}
export const noFavBook=() =>{
    return{
        type : NOFAVBOOK,
        payload : {}
    }
}
export const sendFavoriteBook =(favBook)=>{
    const currentUser=firebase.auth().currentUser;
    const email=currentUser.email;
    return (dispatch)=>{                            //async işlem diye dispatch döndük
        getDatabase().ref('Favorite_Books')                   //ve firebase e istek attık.referans olarak da link vermek gerekiyor.burası ulaşma yöntemi
        .push({email,favBook})                 //pushun içindeki objeyi informations un içine atıyor
        .then(()=>{                                 //bu işlemlerden sonra dönüş yapan fonk.
            dispatch({
                type:SEND_FAVORITE_BOOK,
            });
            
        })
    }
}


