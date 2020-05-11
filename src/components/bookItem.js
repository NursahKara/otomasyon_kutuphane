import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import {Card} from './common';
// import * as actions from '../actions';
import { sendFavoriteBook, noFavBook, favBook, deselectBook, selectBook } from '../actions';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import reducers from '../reducers';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';
import { getDatabase } from '../components/common/database';
import _ from 'lodash';

class BookItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: this.props.isFavBook
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            liked: !this.state.liked
        });
    }
    onPressed() {
        const { book, selected } = this.props;
        selected ? this.props.deselectBook()
            : this.props.selectBook(book);
    }
    async fetchIndex(isbn) {
        var values = [];
        var keys = [];
        const email = firebase.auth().currentUser.email;
        var dbRef = getDatabase().ref('Favorite_Books').orderByChild("email").equalTo(email)
        await dbRef.once("value", (snapshot) => {
            keys = Object.keys(snapshot.val());
            values = Object.values(snapshot.val());
        });
        var isbns = [];
        values.forEach((item)=>{
            isbns.push(item.bookIsbn);
        })
        var index = keys[isbns.indexOf(isbn)];
        return index;
    }
    async sendFavoriteBook() {
        var favBooksIndex = this.props.favBooksIndex;
        var favBooks = this.props.favBooks;
        this.setState({
            liked: !this.state.liked
        });
        const { book } = this.props
        const bookIsbn = book.isbn
        const currentUser = firebase.auth().currentUser;
        const email = currentUser.email;
        if (favBooks.includes(bookIsbn)) {
            var index = await this.fetchIndex(bookIsbn);
            //console.log(index);
            await getDatabase().ref('/Favorite_Books/' + index)
                .remove()
            this.props.favBooks.pop(bookIsbn);
        }
        else {
            await getDatabase().ref('Favorite_Books')
                .push({ email, bookIsbn })
            this.props.favBooks.push(bookIsbn);
        }
    }
    render() {
        const { book, selected } = this.props;
        //console.log(this.props.isFavBook ? 'true':'false');
        const color = this.state.liked ? '#E53935' : '#9E9E9E'
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
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
                        name='chevron-right'
                        color='black'
                        size={15}
                    />
                </View>
            </View>
        ) : null;
        return (
            <Provider store={store}>
                <ScrollView>
                    <TouchableOpacity onPress={this.onPressed.bind(this)}>
                        <View style={styles.cardWrapper}>
                            <View style={{ flex: 2, justifyContent: 'center', padding: 3 }}>
                                <Image source={{ uri: book.thumbnailUrl }} style={styles.imageView} />
                            </View>
                            <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 4, marginLeft: 10, marginBottom: 5, marginTop: 5 }}>
                                <Text style={styles.titleStyle}>{book.title}</Text>
                                {authorsView}
                            </View>
                            <TouchableOpacity
                                style={{
                                    alignItems: 'flex-end',
                                    marginRight: 10,
                                    justifyContent: 'center',
                                    flex: 1
                                }}
                                onPress={this.sendFavoriteBook.bind(this)}
                            >
                                <Icon
                                    name='heart'
                                    color={color}
                                    size={35}
                                />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => Actions.book(this.props)}>{descriptionField}</TouchableOpacity>
                    </TouchableOpacity>
                </ScrollView>
            </Provider>
        )
    }
}
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 16,
        color: 'black'
    },
    authorStyle: {
        fontSize: 12,
        color: 'black'
    },
    descriptionStyles: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 13,
        color: 'black',
        textAlign: 'justify'
    },
    cardStyle: {
        flex: 3,
        flexDirection: "row",
        width: '30%'

    },
    cardWrapper: {
        height: 'auto',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        borderColor: 'gray',
        borderBottomWidth: 0.8,
        flexDirection: 'row',
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 0.2



    },
    descriptionWrapper: {
        height: 'auto',
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        borderLeftWidth: 0.2,
        borderRightWidth: 0.2,
        borderBottomWidth: 0.2,
        borderColor: 'gray',
        flexDirection: 'row',
        flex: 1
    },
    imageView: {
        width: 65,
        height: 65,

    },
})

const mapStateToProps = (state, props) => {
    const selected = state.seletedBook
        && state.seletedBook.isbn === props.book.isbn;
    return {
        selected,
    }
}

export default connect(mapStateToProps, { deselectBook, selectBook })(BookItem);