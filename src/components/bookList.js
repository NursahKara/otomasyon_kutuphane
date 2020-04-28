import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, TextInput } from 'react-native';
import { connect } from 'react-redux';
import BookItem from './bookItem';

class BookList extends Component {
    renderItem({ item }) {
        return (
            <BookItem book={item} home={true} />
        )
    }
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.books,
        };
    }
    searchFilterFunction = text => {
        this.setState({
            value: text,
        });
        if (text != '') {
            this.state.data = [];
        }
        if(text == ''){
            this.state.data = this.props.books;
            return;
        }
        //console.log(this.props.books);
        this.props.books.forEach((book) => {
            //console.log(book.title);
            var title = book.title.toUpperCase();
            if (title.includes(text.toUpperCase())) {
                this.state.data.push(book);
                //console.log(book.title);
            }
        });
        this.state.data.forEach((book) => {
            // console.log(book.title);
        });
        //console.log(this.state.data);
    };
    render() {
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
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.isbn}
                />
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
    }
});
const mapStateToProps = state => {  //tek state ise boyle , birden fazla state olunca (state)
    return {
        books: state.books
    }
}
export default connect(mapStateToProps)(BookList); //connect reduceri  birbirine baglamak icin