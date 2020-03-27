import {combineReducers} from 'redux';
import BooksReducer from './booksReducer'
import  SelectedBookReducer from './seletedBookReducer';
import AuthReducer from './authReducer';

export default combineReducers({
    books: BooksReducer,
    seletedBook : SelectedBookReducer,
    auth:AuthReducer
});