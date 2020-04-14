import React, {Component} from 'react';
import {StyleSheet,Text,TouchableOpacity,View,ScrollView} from 'react-native';
import {Card} from './common';
import * as actions from '../actions';
import {connect} from 'react-redux';

class BookItem extends Component{
    onPressed(){
        const { book,selected} =this.props;
        selected ? this.props.deselectBook()
        :this.props.selectBook(book);
    }
    render(){
        const { book,selected } =this.props;
        const descriptionField = selected ? (
        <Text style={styles.descriptionStyles}>{book.description}</Text>
        ) : null;
        return(
            <ScrollView>
            <TouchableOpacity onPress={this.onPressed.bind(this)}>
            <Card>
                <Text style = {styles.titleStyle}>{book.title}</Text>
                <Text style = {styles.authorStyle}>{book.author}</Text>
            </Card>
            {descriptionField}
            </TouchableOpacity>
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
    const selected  = state.seletedBook 
                    && state.seletedBook.isbn === props.book.isbn;
    return{
        selected
    }
}

export default connect(mapStateToProps,actions)(BookItem);