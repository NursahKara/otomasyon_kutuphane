import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Card } from './common';
import _ from 'lodash';
import BookItem from './bookItem';
import { getDatabase } from '../components/common/database';
import firebase from 'firebase';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.books,
            favBooks: [],
            favBooksIndex: [],
            favBooksRaw: [],
            isLoad: false
        }
        this.fetchFavoriteBooks();
    }
    async fetchFavoriteBooks() {
        var favBooksData = [];
        const arr = this.props.books;
        var favBooks = [];
        var favBooksIndex = [];
        var favBooksRaw = [];
        try {
            const email = firebase.auth().currentUser.email ?? "";
            var dbRef = getDatabase().ref('Favorite_Books').orderByChild("email").equalTo(email);
            await dbRef
                .once("value", (snapshot) => {
                    if (!snapshot.exists)
                        return;
                    favBooksIndex = Object.keys(snapshot.val() ?? 1) ?? [];
                    favBooksData = Object.values(snapshot.val() ?? 1) ?? [];
                    favBooksData.forEach((item) => {
                        arr.forEach((book) => {
                            if (book.isbn == item.bookIsbn) {
                                favBooks.push(book.isbn);
                            }
                        });
                    });
                });
            //console.log(favBooks);
        }
        catch (ex) {
            console.log(ex);
        }
        this.setState({
            favBooks: favBooks,
            favBooksIndex: favBooksIndex,
            favBooksRaw: favBooksRaw,
            isLoad: true
        });
    };
    searchFilterFunction = text => {
        this.setState({
            value: text,
        });
        if (text != '') {
            this.state.data = [];
        }
        if (text == '') {
            this.state.data = this.props.books;
            return;
        }
        this.props.books.forEach((book) => {
            var title = book.title.toUpperCase();
            if (title.includes(text.toUpperCase())) {
                this.state.data.push(book);
            }
        });
        this.state.data.forEach((book) => {
            //console.log(book.title);
        });
    };
    render() {
        var favBooksIndex = this.state.favBooksIndex ?? -1;
        //var favBookIndex = this.state.favBooksRaw.map(w=> w.bookIsbn=='1933988746');
        //console.log(favBookIndex);
        var favBooks = this.state.favBooks ?? [];
        return (
            <View>
                <View style={styles.container}>
                    <TextInput style={styles.textInputStyle}
                        placeholder='Ara...'
                        placeholderTextColor='black'
                        underlineColorAndroid='transparent'
                        onChangeText={text => this.searchFilterFunction(text)}
                        value={this.state.value}
                    />
                </View>
                {this.state.isLoad ?
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) =>
                            <BookItem book={item} isFavBook={favBooks.includes(item.isbn)} favBooksIndex={
                                favBooksIndex[favBooks.indexOf(item.isbn) ?? -1]
                            } favBooks={favBooks} />
                        }
                        keyExtractor={(item) => item.isbn}
                    /> : <ActivityIndicator size="small" color="#731873" style={{ marginTop: 20 }} />}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textInputStyle: {
        alignSelf: 'stretch',
        color: 'black',
        padding: 13,
        backgroundColor: '#d8d8d8',
        borderTopColor: '#ededed',
        marginRight: 20,
        marginLeft: 20,
        marginTop: 5,
        borderRadius: 5,
        fontSize: 16,
        flex: 2
    },
    textStyle: {
        color: '#d8d8d8',
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
        marginLeft: 13
    },
    container: {
        flexDirection: 'row'
    },
});
const mapStateToProps = state => {  //tek state ise boyle , birden fazla state olunca (state)
    return {
        books: state.books
    }
}
export default connect(mapStateToProps)(BookList); //connect reduceri  birbirine baglamak icin