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
import Icon from 'react-native-vector-icons/FontAwesome';
class BooksInCategory extends Component{
  
    render(){

        //////TODO
        const { books} =this.props;
        // const allCategories = [];
        // // // books.forEach((book) => {
        // // //     book.title.forEach((tit) => {
        // // //             allCategories.push( 
        // // //             <Text>
        // // //                 {tit}
        // // //             </Text>);
        // // //     })
        // // // });
        // // books.authors.forEach((author) => {
        // //     allCategories.push(
        // //         <Text style={styles.authorStyle}>
        // //             {author}
        // //         </Text>
        // //     );
        // // })
        // const distinctArray = [... new Set(allCategories.map(data => data))]; 
        const allCategories=[];
        console.log()
      
        return(
            <Provider store={createStore(reducers)}>
                <CustomHeader title="Book" isHome={false} bg_white={true} navigation={this.props.navigation}/>
                  <ScrollView>
                  <View style={{justifyContent:'center',alignItems:'center'}}>
                  <FlatList
                        data={books}
                        renderItem={({ item }) => 
                        <TouchableOpacity style={styles.container} onPress={() =>{}}>
                        <View style={{alignItems: 'flex-start',flex: 5}}>
                            <Text style={styles.titleStyle}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                }/>
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

export default BooksInCategory 
