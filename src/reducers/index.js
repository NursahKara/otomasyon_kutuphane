import {combineReducers} from 'redux';
import BooksReducer from './booksReducer'
import SelectedBookReducer from './seletedBookReducer';
import AuthReducer from './authReducer';
import ProfileInformationReducer from './profileInformationReducer';
import ProfileInformationListReducer from './profileInformationListReducer';
import RegisterInformationReducer from './registerInformationReducer';
import CheckboxReducer from './checkboxReducer';
import CheckboxListReducer from './checkboxListReducer';
import GraphicReducer from './graphicReducer';
import FavoriteBookReducer from './favBookReducer';

export default combineReducers({
    books: BooksReducer,
    seletedBook : SelectedBookReducer,
    auth:AuthReducer,
    profileInformation: ProfileInformationReducer,
    profileInformationList:ProfileInformationListReducer,
    registerInformationRed:RegisterInformationReducer,
    checkboxReducer:CheckboxReducer,
    checkboxListReducer:CheckboxListReducer,
    graphicReducer:GraphicReducer,
    favBookReducer:FavoriteBookReducer
});