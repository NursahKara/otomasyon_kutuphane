import * as React from 'react';
import _ from 'lodash';
import firebase from 'firebase';
import {
    TouchableOpacity, ScrollView, View, Text, Button,
    StyleSheet, SafeAreaView, TextInput, FlatList, Dimensions,
    ImageBackground, Image, TouchableHighlight, StatusBar
} from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Input, MyButton } from '../components/common';
import { connect } from 'react-redux';
import CustomHeader from './CustomHeader';
import { fetchProfileInformations } from '../actions';
import { fetchCheckboxInformations, } from '../actions';
import { Card } from '../components/common/card';
import { Block, theme } from "galio-framework";
import { Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper'
import { Actions } from 'react-native-router-flux';



class ProfileScreen extends React.Component {

    componentDidMount() {
        this.props.fetchProfileInformations();
        this.props.fetchCheckboxInformations();
    }
    renderItem({ item }) {
        return (
            <View>
                <View style={styles.welcomeText}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Merhaba {item.name}, Hoş Geldin!</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20, borderBottomWidth: 0.2, marginRight: 20 }}>
                        <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 1 }}>
                            <Icon
                                name='envelope'
                                color='black'
                                size={15}
                            />
                        </View>
                        <View style={{ alignItems: 'flex-end', marginRight: 10, justifyContent: 'center', flex: 5 }}>
                            <Text style={styles.textStyle}>{item.email} </Text>
                        </View>
                    </View>
                    {/* <Text style={styles.textStyle}>Ad: {item.name}</Text>
                        <Text style={styles.textStyle}>Soyad: {item.surname}</Text> */}
                    {/* <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20, borderBottomWidth: 0.2, marginRight: 20 }}>
                        <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 1 }}>
                            <Icon
                                name='slack'
                                color='black'
                                size={15}
                            />
                        </View>
                        <View style={{ alignItems: 'flex-end', marginRight: 10, justifyContent: 'center', flex: 5 }}>
                            <Text style={styles.textStyle}>{item.nick} </Text>
                        </View>
                    </View> */}
                    <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20, borderBottomWidth: 0.2, marginRight: 20 }}>
                        <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 1 }}>
                            <Icon
                                name='venus-mars'
                                color='black'
                                size={15}
                            />
                        </View>
                        <View style={{ alignItems: 'flex-end', marginRight: 10, justifyContent: 'center', flex: 5 }}>
                            <Text style={styles.textStyle}>{item.gender} </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20, borderBottomWidth: 0.2, marginRight: 20 }}>
                        <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 1 }}>
                            <Icon
                                name='birthday-cake'
                                color='black'
                                size={15}
                            />
                        </View>
                        <View style={{ alignItems: 'flex-end', marginRight: 10, justifyContent: 'center', flex: 5 }}>
                            <Text style={styles.textStyle}>{item.birthday} </Text>
                        </View>
                    </View>

                </View>
            </View>
        )
    }
    render() {
        const { profileInformationList } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Profil" isHome={true} bg_white={true} navigation={this.props.navigation} />
                <View style={styles.wrapper} >
                    <StatusBar barStyle="light-content" />
                    <Swiper
                        dot={
                            <View
                                style={{
                                    backgroundColor: 'rgba(255,255,255,.3)',
                                    width: 10,
                                    height: 10,
                                    borderRadius: 7,
                                    marginLeft: 4,
                                    marginRight: 4
                                }}
                            />
                        }
                        activeDot={
                            <View
                                style={{
                                    backgroundColor: '#fff',
                                    width: 10,
                                    height: 10,
                                    borderRadius: 7,
                                    marginLeft: 4,
                                    marginRight: 4
                                }}
                            />
                        }
                        autoplay
                        autoplayDelay={2}
                        showsButtons={false}>
                        <TouchableOpacity style={styles.slide1} onPress={() => this.props.navigation.navigate('Suggestions')}>
                            <View>
                                <Text style={styles.text}>Senin İçin Önerdiklerimiz</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.slide2} onPress={() => this.props.navigation.navigate('RecentReleases')}>
                            <View>
                                <Text style={styles.text}>En Son Eklenen Kitaplar</Text>
                            </View>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles.slide3} onPress={() => this.props.navigation.navigate('MostRead')}>
                            <View>
                                <Text style={styles.text}>En Çok Okunan Kitaplar</Text>
                            </View>
                        </TouchableOpacity> */}
                        <TouchableOpacity style={styles.slide3} onPress={() => this.props.navigation.navigate('FavoriteTypes')}>
                            <View>
                                <Text style={styles.text}>Favori Türlerine Göz At</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.slide4} onPress={() => this.props.navigation.navigate('FavoriteBooks')}>
                            <View>
                                <Text style={styles.text}>Favori Kitaplarına Göz At</Text>
                            </View>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles.slide5} onPress={() => this.props.navigation.navigate('Graphics')}>
                            <View >
                                <Text style={styles.text}>Grafiklere Göz At</Text>
                            </View>
                        </TouchableOpacity> */}
                    </Swiper>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', marginTop: '3%' }}>
                    <FlatList data={profileInformationList}
                        renderItem={this.renderItem} />
                    <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20, marginRight: 25 }}>
                        <View style={{ alignItems: 'flex-start' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangePassword')} style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }} >
                                <Icon name="key" size={30} color="#B87D95" />
                                <Text>Şifreni Değiştir</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Favorite')} style={{ justifyContent: 'center', alignItems: 'center' }} >
                                <Icon name="star" size={30} color="#B87D95" />
                                <Text>Favorilerim</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: '30%',
        margin: 10,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BCAAE8'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C8C7FF'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#AAB9E8'
    },
    slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BAD6FD'
    },
    slide5: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BBDEFF'
    },
    text: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
    },
    textInputStyle: {
        alignSelf: 'stretch',
        color: 'black',
        padding: 13,
        backgroundColor: '#d8d8d8',
        borderTopColor: '#ededed',
        margin: 20,
        borderRadius: 5,
        fontSize: 16,
        height: 70
    },
    welcomeText: {
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20
    },
    container: {
        flexDirection: 'row'
    },
    textStyle: {
        alignSelf: 'stretch',
        color: 'black',
        padding: 13,
        borderRadius: 5,
        fontSize: 16,
        flexDirection: 'row',

        borderColor: '#E5E5E8',
        // borderBottomWidth:1,
        alignItems: 'center',
        flexGrow: 2,
        fontSize: 13,
        paddingLeft: 20,

    },
    ImageContainer: {
        flex: 1,
        padding: 0,
        zIndex: 1,
        opacity: 0.7
    },
    buttonWrapper: {

        marginBottom: 5,
        height: 49,
        justifyContent: 'center',
        fontSize: 18,
        marginLeft: 'auto',
        alignItems: 'flex-end',
        borderRadius: 10000,
        backgroundColor: 'transparent',
        shadowColor: 'black',


    }
});


const mapStateToProps = state => {
    const currentUser = firebase.auth().currentUser;

    // const profileInformationList=_.map(state.profileInformationList,(val,uid)=>{
    //     return {...val,uid}
    // })
    // const checkboxReducer=_.filter(state.checkboxReducer,val=>val.email===currentUser.email&&val===checkbox)
    const profileInformationList = _.filter(state.profileInformationList, val => val.email === currentUser.email);
    return {
        profileInformationList
    }
}
export default connect(mapStateToProps, {
    fetchProfileInformations, fetchCheckboxInformations
})(ProfileScreen);
