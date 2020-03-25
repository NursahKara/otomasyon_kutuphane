import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Header} from './components/common';
import reducers from './reducers';
import BookList from './components/bookList';
import {SearchBox} from './components/common/searchBox';
import MyTabs from './components/common/bottomTabs';

 export default class Home extends Component {
    render (){
        return(
            <View  style={styles.container}>
            <Provider store={createStore(reducers)}>
                <View>
                    <Header headerText='Kütüphanem'/>
                    <SearchBox/>
                    <BookList/>
                    <MyTabs/>
                </View>
            </Provider>
            </View>
        );
    }
}
const styles=StyleSheet.create({
        container:{
            backgroundColor:'#313131',
            flex:1
        }
    });