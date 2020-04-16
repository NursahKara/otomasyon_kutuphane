import React, {Component} from 'react';
import {StyleSheet,Text,TouchableOpacity,View,FlatList,SafeAreaView,ListView} from 'react-native';
import CustomHeader from './CustomHeader';
import {connect} from 'react-redux';
import Book from './book';
import _ from 'lodash';
import * as actions from '../actions';
import BookItem from '../components/bookItem';
import reducers from '../reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
class SelectedBook extends Component{
  
    render(){
        const { book} =this.props;

        return(
            <Provider store={createStore(reducers)}>
                <CustomHeader title="Select Book" isHome={false} bg_white={true} navigation={this.props.navigation}/>
                   <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text>{book.isbn}</Text>
                        <Text>{book.title}</Text>
                        <Text>{book.author}</Text>
                        <Text>{book.subtitle}</Text>
                        <Text>{book.pages}</Text>
                        <Text>{book.description}</Text>
                    </View>
            </Provider>
        )
    }
}

export default SelectedBook //connect reduceri  birbirine baglamak icin
