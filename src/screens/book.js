import React, {Component} from 'react';
import {StyleSheet,Text,TouchableOpacity,View,ScrollView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Card} from '../components/common';
import * as actions from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';

class Book extends Component{
    
    render(){
        const { book } =this.props;
        return(
            <ScrollView>
                    <Text style = {styles.titleStyle}>{book.title} </Text>
                    <Text style = {styles.authorStyle}>{book.author}</Text>
                    <Text style = {styles.titleStyle}>{book.subtitle}</Text>
                    <Text style = {styles.authorStyle}>{book.pages}</Text>
                    <Text style = {styles.authorStyle}>{book.description}</Text>
            </ScrollView>
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
    const selected  =state.seletedBook 
                    && state.seletedBook.isbn === props.book.isbn
    return{
        selected
    }
}

export default connect(mapStateToProps,actions)(Book);