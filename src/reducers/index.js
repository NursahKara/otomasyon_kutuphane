import {combineReducers} from 'redux';
import BooksReducer from './booksReducer'
import SelectedBookReducer from './seletedBookReducer';
import AuthReducer from './authReducer';
import ProfileInformationReducer from './profileInformationReducer';
import ProfileInformationListReducer from './profileInformationListReducer';
import RegisterInformationReducer from './registerInformationReducer';

export default combineReducers({
    books: BooksReducer,
    seletedBook : SelectedBookReducer,
    auth:AuthReducer,
    profileInformation: ProfileInformationReducer,
    profileInformationList:ProfileInformationListReducer,
    registerInformationRed:RegisterInformationReducer
});