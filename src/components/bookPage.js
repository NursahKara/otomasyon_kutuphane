import React, {Component} from 'react';
import {StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import {Card} from './common';
import * as actions from '../actions';
import {connect} from 'react-redux';
import BookItem from './bookItem';

class BookPage extends Component{
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
const styles=StyleSheet.create({
    titleStyle:{
        fontSize:16,
        color:'#d8d8d8'
    },
    authorStyle:{
        fontSize:13,
        color:'gray'
    },
    descriptionStyles:{
        marginLeft:10,
        marginRight:10,
        fontSize:13,
        color:'gray',
        textAlign:'justify'
    },
    cardStyle:{
        flex:3,
        flexDirection:"row",
        width:'30%'

    }
})
const mapStateToProps = (state,props) => {
    console.log(state);
    console.log(props);
    const selected  = state.seletedBook 
                    && state.seletedBook.isbn === props.book.isbn;
    return{
        selected
    }
}

export default connect(mapStateToProps,actions)(BookPage);
