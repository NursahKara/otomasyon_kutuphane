import * as React from 'react';
import _ from 'lodash';
import firebase from 'firebase';
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CustomHeader from './CustomHeader';
import { fetchCheckboxInformations, fetchFavoriteBooksInformations } from '../actions';
import { ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

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
        console.log(this.props);
        const { favBooksListReducer } = this.props;
        var arr = this.props.checkboxListReducer[0].checkbox;
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
                    <View style={{ margin: 20, borderBottomWidth: 0.3 }}>
                        <Text style={styles.textDesign}>Favori Kategorilerin</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 20 }}>
                        <ScrollView horizontal={true}>
                            {categoriesView}
                        </ScrollView>

                    </View>
                </View>
                <View style={{ height: 170 }}>
                    <View style={{ margin: 20, borderBottomWidth: 0.3 }}>
                        <Text style={styles.textDesign}>Favori Kitapların</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 20 }}>
                        <ScrollView horizontal={true}>
                            <FlatList data={favBooksListReducer}
                                renderItem={this.renderItem} />
                        </ScrollView>

                    </View>
                </View>
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
    }
})
const mapStateToProps = state => {
    const currentUser = firebase.auth().currentUser;
    const checkboxListReducer = _.filter(state.checkboxListReducer, val => val.email === currentUser.email)
    const favBooksListReducer = _.filter(state.favBooksListReducer, val => val.email === currentUser.email)
    return {
        checkboxListReducer, favBooksListReducer, books:state.books
    }
}
export default connect(mapStateToProps, {
    fetchCheckboxInformations, fetchFavoriteBooksInformations
})(FavoriteScreen);