import {combineReducers} from 'redux';
import BooksReducer from './booksReducer'
import  SelectedBookReducer from './seletedBookReducer';

export default combineReducers({
    books: BooksReducer,
    seletedBook : SelectedBookReducer 
});