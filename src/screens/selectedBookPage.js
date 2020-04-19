import React, {Component} from 'react';
import {StyleSheet,Text,TouchableOpacity,View,FlatList,SafeAreaView,ListView,Image,ScrollView} from 'react-native';
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
                  <ScrollView>
                  <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image source={{uri: book.thumbnailUrl}}  style={styles.imageView}/>
                        <Text>ISBN No: {book.isbn}</Text>
                        <Text>Başlık: {book.title}</Text>
                        <Text>Yazarlar: {book.authors}</Text>
                        <Text>Sayfa Sayısı: {book.pageCount}</Text>
                        <Text>Açıklama: {book.longDescription}</Text>
                        <Text>Kategoriler: {book.categories}</Text>
                       
                    </View>
                    </ScrollView>
            </Provider>
        )
    }
}
const styles = StyleSheet.create({

imageView: {
    width: '50%',
    height: 250 ,
    margin: 7,
    borderRadius : 7
},

 
});

export default SelectedBook //connect reduceri  birbirine baglamak icin
