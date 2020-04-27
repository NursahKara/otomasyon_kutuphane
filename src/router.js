//bu dosyada tüm navigasyon işlemleri dönecek
import React from 'react';
import {Scene,Router} from 'react-native-router-flux';
import ProfileScreen from './screens/profile';
import OpinionsScreen from './screens/opinions';
import ScanBarcodeScreen from './screens/scan_barcode';
import SettingsScreen from './screens/settings';
import SuggestionsScreen from './screens/suggestions';
import AppCheck from './screens/checkBoxes';
import SignUpScreen from './screens/signUp';
import App from './App';
import createAppContainer from './components/common/bottomTabs';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import LoginNavigation from './components/loginNavigation';
import firebase from 'firebase';
import SelectedBook from './screens/selectedBookPage';
import * as actions from './actions';
import {connect} from 'react-redux';
import FavoriteScreen from './screens/favorite';
import BooksInCategory from './screens/booksInCategory';
import BookFromCategory from './screens/bookFromCategory'
import Categories from './screens/categories';
const RouterComp=()=>{
    return(
        <Router titleStyle={{color:'#E87B79'}}  >
            <Scene key='root'  hideNavBar={true}>
                <Scene key='auth'>
                    <Scene key='login'
                           component={LoginNavigation}
                           title='Login'
                           hideNavBar={true} 
                        />
                </Scene>
                <Scene key='main' >
                    <Scene key='home'
                           component={App}
                           title='App'
                           hideNavBar={true}
                        />
                    <Scene key='book'
                           component={SelectedBook}
                           title='selectedBook'
                           hideNavBar={true}
                        />
                    <Scene key='bookFromCategory'
                    component={BookFromCategory}
                    title='selectedBook'
                    hideNavBar={true}/>
                    <Scene key='category'
                           component={Categories}
                           title='Category'
                           hideNavBar={true}/>
                    <Scene key='categoryToBook'
                           component={BooksInCategory}
                           title='BooksInCategory'
                           hideNavBar={true}/>
                </Scene>
                <Scene key='signUp' >
                    <Scene key='sign'
                           component={SignUpScreen}
                           title='Sign Up'
                        /> 
                </Scene>
                <Scene key='checkbox'>
                    <Scene key='checkboxes'
                           component={AppCheck}
                           title='İlgilendiklerinizi Seçin'
                        /> 
                </Scene>
                <Scene key='profile' >
                    <Scene key='favorites'
                           component={FavoriteScreen}
                           title='Favoriler'
                           hideNavBar={true}
                        /> 
                </Scene>
            </Scene>
        </Router>
    )
}
export default RouterComp