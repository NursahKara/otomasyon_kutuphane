import React, {Component} from 'react';
import {StyleSheet,Text,TouchableOpacity,View,ScrollView,Image} from 'react-native';
import { Actions } from 'react-native-router-flux';
// import {Card} from './common';
// import * as actions from '../actions';
import {sendFavoriteBook,noFavBook,favBook,deselectBook,selectBook} from '../actions';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../reducers';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

class BookItem extends Component{
    onPressed(){
        const { book,selected} =this.props;
        selected ? this.props.deselectBook()
        :this.props.selectBook(book);
    }
    onPressedFav(){
        const{favBook,selected}=this.props;
        selected?this.props.noFavBook()
        :this.props.favBook(favBook);
    }
    sendFavoriteBook(){
        const {book}=this.props;
        this.props.sendFavoriteBook(book);
    }
    render(){
        const store = createStore(
            reducers,
            {},
            applyMiddleware(thunk)
          )
        const { book,selected } =this.props;
        const descriptionField = selected ? (
        <Text style={styles.descriptionStyles}>{book.shortDescription}</Text>
        ) : null;
        return(
           
            <ScrollView>
            <TouchableOpacity onPress={this.onPressed.bind(this)}>
            <View style = {styles.cardWrapper}>
                <View style={{flex:2}}>
                    {/* <Image source={{uri:book.thumbnailUrl}}  style={styles.imageView}/> */}
                </View>
                <View style={{alignItems:'flex-start',justifyContent:'center',flex:4,marginLeft:10,marginBottom:5,marginTop:5}}>
                    <Text style = {styles.titleStyle}>{book.title}</Text>
                    <Text style = {styles.authorStyle}>{book.authors}</Text>
                </View>
                <Provider store={store}>
                <TouchableOpacity  
                style={{alignItems:'flex-end',marginRight:10,justifyContent:'center',flex:1}}
                onPress={this.onPressedFav.bind(this),this.sendFavoriteBook.bind(this)}>
                    <Icon
                        name='heart'
                        color='gray'
                        size={35}
                        />  
                </TouchableOpacity>
                </Provider>
            </View>
                <TouchableOpacity onPress={()=> Actions.book(this.props)}>{descriptionField}</TouchableOpacity> 
            </TouchableOpacity>
            </ScrollView>
            
        )
    }
}
const styles=StyleSheet.create({
    titleStyle:{
        fontSize:16,
        color:'black'
    },
    authorStyle:{
        fontSize:12,
        color:'black'
    },
    descriptionStyles:{
        marginLeft:10,
        marginRight:10,
        fontSize:13,
        color:'black',
        textAlign:'justify'
    },
    cardStyle:{
        flex:3,
        flexDirection:"row",
        width:'30%'

    },
    cardWrapper:{
        height:'auto',
        marginTop:5,
        marginBottom:5,
        marginLeft:5,
        marginRight:5,
        borderWidth:0.2,
        borderColor:'gray',
        flexDirection:'row',
        flex:1
    },
    imageView: {
        width: 65,
        height: 65 ,
    },
})

const mapStateToProps = (state,props) => {
    const selected  = state.seletedBook 
                    && state.seletedBook.isbn === props.book.isbn;
    const {favBook} =state.favBookReducer;
    
    return{
        selected,sendFavoriteBook,favBook
    }
}

export default connect(mapStateToProps,{sendFavoriteBook,noFavBook,favBook,deselectBook,selectBook})(BookItem);