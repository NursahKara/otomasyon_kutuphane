import React, {Component} from 'react';
import {View,Text,FlatList,StyleSheet,ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Card} from './common';
import BookItem from './bookItem';

class BookList extends Component{
    renderItem({item}){
        return(
          <BookItem book={item} home={true}/>
        )
    }
    render(){
        const {books}=this.props
        return(
            <View>
                <FlatList
                data={books}
                renderItem={this.renderItem}
                keyExtractor={(item)=>item.isbn}
                />
            </View>
        )
    }
}
const mapStateToProps=state=>{  //tek state ise boyle , birden fazla state olunca (state)
   return{
       books:state.books
   }
}
export default connect(mapStateToProps)(BookList); //connect reduceri  birbirine baglamak icin