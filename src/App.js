import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Header} from './components/common';
import reducers from './reducers';
import BookList from './components/bookList';

export default class App extends Component {
    render (){
        return(
            <Provider store={createStore(reducers)}>
                <View>
                    <Header headerText='Kitaplar'/>
                    <BookList/>
                </View>
            </Provider>
        );
    }
}