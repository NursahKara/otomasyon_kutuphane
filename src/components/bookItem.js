import React, {Component} from 'react';
import {StyleSheet,Text,TouchableOpacity} from 'react-native';
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
            <TouchableOpacity onPress={this.onPressed.bind(this)}>
            <Card>
                <Text style = {styles.titleStyle}>{book.title}</Text>
                <Text style = {styles.authorStyle}>{book.author}</Text>
            </Card>
            {descriptionField}
            </TouchableOpacity>
        )
    }
}
const styles=StyleSheet.create({
    titleStyle:{
        fontSize:16,
        color:'black'
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

export default connect(mapStateToProps,actions)(BookItem);