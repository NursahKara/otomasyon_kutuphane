import React, {Component} from 'react';
import {StyleSheet,Text,TouchableOpacity,View,ScrollView,Image} from 'react-native';
import { Actions } from 'react-native-router-flux';
// import {Card} from './common';
// import * as actions from '../actions';
import {sendFavoriteBook,noFavBook,favBook,deselectBook,selectBook} from '../actions';
import ReduxThunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import {Provider,connect} from 'react-redux';
import reducers from '../reducers';
import Icon from 'react-native-vector-icons/FontAwesome';

class BookItem extends Component{
    constructor() {
        super();
        this.state = {
          liked: false
        };
        this.handleClick = this.handleClick.bind(this);
      }
    handleClick() {
        this.setState({
          liked: !this.state.liked
        });
      }
    onPressed(){
        const { book,selected} =this.props;
        selected ? this.props.deselectBook()
        :this.props.selectBook(book);
    }
    sendFavoriteBook(){
        const { selected} =this.props;
        const obj={...this.props.book,
        favBook:this.props.book.isbn}
        selected ?this.props.sendFavoriteBook(obj)
        :null
    }
    render(){ 
        const { book, selected } = this.props;
        const color = this.state.liked ? '#E53935' : '#9E9E9E'
        const store = createStore(
            reducers,
            {},
            applyMiddleware(ReduxThunk)
        );
        const authorsView = [];
        book.authors.forEach((author) => {
            authorsView.push(
                <Text style={styles.authorStyle}>
                    {author}
                </Text>
            );
        })
        const descriptionField = selected ? (
            <View style={styles.descriptionWrapper}>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 5, marginLeft: 5, marginBottom: 5, marginTop: 5, textAlign: 'justify' }}>
                    <Text style={styles.descriptionStyles}>{book.shortDescription}</Text>
                </View>

                <View style={{ alignItems: 'flex-end', marginRight: 10, justifyContent: 'center', flex: 1 }}>
                    <Icon
                        name='forward'
                        color='black'
                        size={15}
                    />
                </View>
            </View>
        ) : null;
        return (
            <ScrollView>
                <TouchableOpacity onPress={this.onPressed.bind(this)}>
                    <View style={styles.cardWrapper}>
                        <View style={{ flex: 2, justifyContent: 'center' }}>
                            <Image source={{ uri: book.thumbnailUrl }} style={styles.imageView} />
                        </View>
                        <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 4, marginLeft: 10, marginBottom: 5, marginTop: 5 }}>
                            <Text style={styles.titleStyle}>{book.title}</Text>
                            {authorsView}
                        </View>
                        <Provider store={store}>
                            <TouchableOpacity
                                style={{ alignItems: 'flex-end', marginRight: 10, justifyContent: 'center', flex: 1 }} onPress={this.handleClick}
                            >
                                <Icon
                                    name='heart'
                                    color={color}
                                    size={35}
                                />
                            </TouchableOpacity>
                        </Provider>
                    </View>
                    <TouchableOpacity onPress={() => Actions.book(this.props)}>{descriptionField}</TouchableOpacity>
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
    descriptionWrapper:{
        height:'auto',
        marginBottom:5,
        marginLeft:5,
        marginRight:5,
        borderLeftWidth:0.2,
        borderRightWidth:0.2,
        borderBottomWidth:0.2,
        borderColor:'gray',
        flexDirection:'row',
        flex:1
    },
    imageView: {
        width: 65,
        height: 65,
    },
})

const mapStateToProps = (state,props) => {
    const selected  = state.seletedBook 
                    && state.seletedBook.isbn === props.book.isbn;
    return{
        selected,sendFavoriteBook
    }
}

export default connect(mapStateToProps,{sendFavoriteBook,noFavBook,favBook,deselectBook,selectBook})(BookItem);