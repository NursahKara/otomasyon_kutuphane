//bu dosyada tüm navigasyon işlemleri dönecek
import React from 'react';
import {Scene,Router} from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import {HomeScreen} from './screens/home';
import ProfileScreen from './screens/profile';
import {OpinionsScreen} from './screens/opinions';
import {ScanBarcodeScreen} from './screens/scan_barcode';
import {SettingsScreen} from './screens/settings';
import {SuggestionsScreen} from './screens/suggestions';
import App from './App';
import createAppContainer from './components/common/bottomTabs';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

const RouterComp=()=>{
    return(
        <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        <Router titleStyle={{color:'#E87B79'}}  >
            <Scene key='root'  hideNavBar={true}>
                <Scene key='auth'initial >
                    <Scene key='login'
                        component={LoginForm}
                        title='Login'
                        //hideNavBar={true}  dersek header gözükmez
                        initial
                        />
                </Scene>
                <Scene key='main'  >
                    <Scene key='home'
                        component={App}
                        title='App'
                        hideNavBar={true}
                        initial
                        />
                    <Scene key='profile'
                        component={ProfileScreen}
                        title='Profile'
                        />
                    <Scene key='opinion'
                        component={OpinionsScreen}
                        title='Opinions'
                        />
                    <Scene key='suggestion'
                        component={SuggestionsScreen}
                        title='Suggestion'
                        />
                    <Scene key='setting'
                        component={SettingsScreen}
                        title='Setting'
                        />
                </Scene>
            </Scene>
        </Router>
        </Provider>
    )
}
export default RouterComp;