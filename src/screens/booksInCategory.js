import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, SafeAreaView, Dimensions, ListView, Image, ScrollView, ImageBackground } from 'react-native';
import CustomHeader from './CustomHeader';
import { connect } from 'react-redux';
import Book from './book';
import _ from 'lodash';
import * as actions from '../actions';
import BookItem from '../components/bookItem';
import reducers from '../reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { Block, theme } from "galio-framework";
const { width, height } = Dimensions.get("screen");

class BooksInCategory extends Component {

    render() {
        const books = [];
        var arr = this.props.books;
        arr.forEach((book) => {
            if (book.categories.includes(this.props.selectedCategory))
                books.push(book);
        });
        var booksView = [];
        books.forEach((book) => {
            booksView.push(
                <TouchableOpacity style={styles.container} onPress={() => Actions.book({ book })}>
                    <View style={{ alignItems: 'flex-start', flex: 2, justifyContent: 'center', padding: 3 }}>
                        <Image source={{ uri: book.thumbnailUrl }} style={styles.imageView} />
                    </View>
                    <View style={{ justifyContent: 'center', flex: 3, marginLeft: 10, marginBottom: 5, marginTop: 5 }}>
                        <Text style={styles.titleStyle}>{book.title}</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end', flex: 1, justifyContent: 'center', marginRight: 10 }}>
                        <Icon
                            name='chevron-right'
                            color='black'
                            size={13}
                        />
                    </View>
                </TouchableOpacity>
            )
        });
        return (
            <Provider store={createStore(reducers)}>

                <Block flex style={{ backgroundColor: '#c0c0c0' }}>
                    <ImageBackground
                        source={require('../../assest/themes/baloncuklu.jpg')}
                        style={styles.ImageContainer}
                    >
                        <CustomHeader title="İlgili Kitaplar" isHome={false} bg_white={true} navigation={this.props.navigation} />
                        <View>
                            <ScrollView>


                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    {booksView}
                                </View>

                            </ScrollView>
                        </View>

                    </ImageBackground>
                </Block>
            </Provider>
        )
    }
}
const styles = StyleSheet.create({


    container: {
        height: 'auto',
        marginTop: 15,
        margin: 5,
        borderBottomWidth: 0.2,
        borderColor: 'gray',
        flexDirection: 'row',
        flex: 1,
        paddingLeft: 10,
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 16,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center'
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

    },
    imageView: {
        width: 65,
        height: 65,

    },
    ImageContainer: {
        flex: 1,
        padding: 0,
        zIndex: 1,
    },
});

export default BooksInCategory