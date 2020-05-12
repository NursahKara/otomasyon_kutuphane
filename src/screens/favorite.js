import * as React from 'react';
import _ from 'lodash';
import firebase from 'firebase';
import { View, Text, SafeAreaView, FlatList, StyleSheet, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import CustomHeader from './CustomHeader';
import { fetchCheckboxInformations, fetchFavoriteBooksInformations } from '../actions';
import { ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

class FavoriteScreen extends React.Component {
    componentDidMount() {
        this.props.fetchCheckboxInformations();
        this.props.fetchFavoriteBooksInformations();
    }
    renderItem({ item }) {
        return (
            <View>
                <Text>{item.bookIsbn}</Text>
            </View>
        )
    }
    render() {
        const { favBooksListReducer } = this.props;
        var favBooks = [];
        this.props.favBooksListReducer.forEach((item) => {
            this.props.books.forEach((book) => {
                if (book.isbn == item.bookIsbn) {
                    favBooks.push(book);
                }
            });
        });
        var favBooksView = [];
        favBooks.forEach((book) => {
            favBooksView.push(
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
            );
        });
        var arr = this.props.checkboxListReducer[0].checkbox ?? [];
        const categoriesView = [];
        arr.forEach((category) => {
            categoriesView.push(
                <TouchableOpacity
                    onPress={() => {
                        Actions.categoryToBook({ books: this.props.books, selectedCategory: category });
                    }}
                >
                    <View style={styles.cardDesign}>
                        <Text>
                            {category}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        })
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Favorilerin" bg_white={true} navigation={this.props.navigation} />
                <View style={{ height: 170 }}>
                    <View style={{ margin: 10, borderBottomWidth: 0.3 }}>
                        <Text style={styles.textDesign}>Favori Kategorilerin</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 20,marginRight:20 }}>
                        <ScrollView horizontal={true}>
                            {categoriesView}
                        </ScrollView>

                    </View>
                </View>
                <ScrollView>
                <View style={{ height: 'auto' }}>
                    <View style={{ margin: 10, borderBottomWidth: 0.3 }}>
                        <Text style={styles.textDesign}>Favori Kitapların</Text>
                    </View>
                    
                        {favBooksView}
                  
                </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    textDesign: {
        fontSize: 16
    },
    cardDesign: {
        margin: 3,
        borderWidth: 0.2,
        borderColor: 'gray',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.11,
        shadowRadius: 15,
        elevation: 1,
        backgroundColor: '#F0F0F0'
    },
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
})
const mapStateToProps = state => {
    const currentUser = firebase.auth().currentUser;

    // const checkboxListReducer=_.map(state.checkboxListReducer,(val,uid)=>{
    //     return {...val,uid}
    // })
    const checkboxListReducer = _.filter(state.checkboxListReducer, val => val.email === currentUser.email)
    const favBooksListReducer = _.filter(state.favBooksListReducer, val => val.email === currentUser.email)
    return {
        checkboxListReducer, favBooksListReducer, books: state.books
    }
}
export default connect(mapStateToProps, {
    fetchCheckboxInformations, fetchFavoriteBooksInformations
})(FavoriteScreen);