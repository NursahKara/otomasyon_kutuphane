import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, SafeAreaView, ListView, Image, ScrollView, ImageBackground } from 'react-native';
import CustomHeader from './CustomHeader';
import { connect } from 'react-redux';
import Book from './book';
import _ from 'lodash';
import * as actions from '../actions';
import BookItem from '../components/bookItem';
import reducers from '../reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Block, theme } from "galio-framework";

class BookFromCategory extends Component {

    render() {
        var book  = this.props.book;
        console.log(book);
        const categoryView = [];
        book.categories.forEach((category) => {
            categoryView.push(
                <Text>
                    {category}
                </Text>
            );
        })
        const authorsView = [];
        book.authors.forEach((author) => {
            authorsView.push(
                <Text style={styles.authorStyle}>
                    {author}
                </Text>
            );
        })

        return (
            <Provider store={createStore(reducers)}>
                <Block flex style={{ backgroundColor: '#c0c0c0' }}>
                    <ImageBackground
                        source={require('../../assest/themes/baloncuklu.jpg')}
                        style={styles.ImageContainer}
                    >
                        <CustomHeader title="" isHome={false} bg_white={true} navigation={this.props.navigation} />
                        <ScrollView>
                            <View >
                                <View style={styles.imageCardStyle}>
                                    <Image source={{ uri: book.thumbnailUrl }} style={styles.imageView} />
                                </View>
                                <View style={styles.cardStyle}>
                                    <Text style={styles.headerStyle}>ISBN No: </Text>
                                    <Text>{book.isbn}</Text>
                                </View>
                                <View style={styles.cardStyle}>
                                    <Text style={styles.headerStyle}>Eser Adı: </Text>
                                    <Text>{book.title}</Text>
                                </View>
                                <View style={styles.cardStyle}>
                                    <Text style={styles.headerStyle}>Yazarlar: </Text>
                                    {authorsView}
                                </View>
                                <View style={styles.cardStyle}>
                                    <Text style={styles.headerStyle}>Sayfa Sayısı: </Text>
                                    <Text>{book.pageCount}</Text>
                                </View>
                                <View style={styles.cardStyle}>
                                    <Text style={styles.headerStyle}>Açıklama: </Text>
                                    <Text>{book.longDescription}</Text>
                                </View>
                                <View style={styles.cardStyle}>
                                    <Text style={styles.headerStyle}>Kategoriler: </Text>
                                    <View style={styles.categoryStyle}>
                                        {categoryView}
                                    </View>
                                </View>

                            </View>
                        </ScrollView>
                    </ImageBackground>
                </Block>
            </Provider>
        )
    }
}
const styles = StyleSheet.create({

    imageView: {
        width: 100,
        height: 120,
        margin: 7,
        borderRadius: 7
    },
    headerStyle: {
        textAlign: 'justify',
        borderBottomWidth: 0.2,
        borderColor: 'gray',
        marginBottom: 8,
        fontSize: 15,
        fontWeight: 'bold'
    },
    cardStyle: {
        height: 'auto',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
    },
    categoryStyle: {
        marginBottom: 10
    },
    imageCardStyle: {
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    ImageContainer: {
        flex: 1,
        padding: 0,
        zIndex: 1,
    },

});

export default BookFromCategory