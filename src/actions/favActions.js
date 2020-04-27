import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { getDatabase } from '../components/common/database';
export const SEND_FAVORITE_BOOK='send_favorite_book';
export const FETCH_FAVORITE_BOOKS_INFORMATIONS='fetch_favorite_books_informations';

export const sendFavoriteBook =(book)=>{
    const currentUser=firebase.auth().currentUser;
    const email=currentUser.email;
    return (dispatch)=>{              
        getDatabase().ref('Favorite_Books')                  
        .push({email,book})                 
        .then(()=>{                                 
            dispatch({
                type:SEND_FAVORITE_BOOK,
            });
        })
    }
}
export const fetchFavoriteBooksInformations=()=>{
    return(dispatch)=>{
        getDatabase().ref('Favorite_Books')
        .on('value', (snapshot)=>{
            dispatch({
                type:FETCH_FAVORITE_BOOKS_INFORMATIONS,
                payload:snapshot.val()
            })
        })
    }
}




