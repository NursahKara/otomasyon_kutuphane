
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Header} from '../components/common/header';
import {SearchBox} from '../components/common/searchBox';
import BookList from '../components/bookList';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import profile from './profile';
import reducers from '../reducers';
import DrawerMenu from '../components/common/drawer';
class Home extends React.Component{
    render(){
        return(
            <View >
            <Button title='Go to Details' onPress={()=>this.props.navigation.navigate('profile')}></Button> 
            <SearchBox/>
            <Provider store={createStore(reducers)}>
            <BookList/>
            </Provider>
          </View>
        );
    }
}
export default Home;