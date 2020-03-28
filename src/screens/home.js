
import React ,{Component} from 'react';
import { View, Text, Button,StyleSheet,SafeAreaView ,TouchableOpacity} from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SearchBox} from '../components/common/searchBox';
import BookList from '../components/bookList';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers';
import CustomHeader from './CustomHeader';

export class HomeScreen extends Component{
    render(){
        return(
            <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title="Home" isHome={true} navigation={navigation}/>
            <SearchBox/>
            <TouchableOpacity style={{marginTop:20 ,justifyContent:'center',alignItems:'center'}} onPress={()=> navigation.navigate('Opinions')}>
              <Text>Go To Opinions</Text>
            </TouchableOpacity>
            <Provider store={createStore(reducers)}>
              <BookList/>
            </Provider>
          
            
          </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1
    }
})
  