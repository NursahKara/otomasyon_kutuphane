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

const RouterComp=()=>{
    return(
        <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        <Router titleStyle={{color:'#E87B79'}}  >
            <Scene key='root'  hideNavBar={true}>
                <Scene key='auth' >
                    <Scene key='login'
                        component={LoginNavigation}
                        title='Login'
                        hideNavBar={true} // dersek header gözükmez
                        initial
                        />
                </Scene>
                <Scene key='main' >
                    <Scene key='home'
                        component={App}
                        title='App'
                        hideNavBar={true}
                        initial
                        />
                </Scene>
                <Scene key='signUp' >
                    <Scene key='sign'
                    component={SignUpScreen}
                    title='Sign Up'
                    initial
                    /> 
                </Scene>
                <Scene key='checkbox' initial>
                    <Scene key='checkboxes'
                    component={AppCheck}
                    title='İlgilendiklerinizi Seçin'
                    initial
                    /> 
                </Scene>
            </Scene>
        </Router>
        </Provider>
    )
}
export default RouterComp;