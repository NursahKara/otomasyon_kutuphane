
import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, Alert, Dimensions } from 'react-native';
import CustomHeader from './CustomHeader';
import firebase from 'firebase';
import { Block, theme } from "galio-framework";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, MyButton, Spinner } from '../components/common';

const { width, height } = Dimensions.get("screen");

export default class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPassword: '',
            newPassword: ''
        }
    }
    reauthenticate = (currentPassword) => {
        var currentUser = firebase.auth().currentUser;
        var cred = firebase.auth.EmailAuthProvider.credential(currentUser.email, currentPassword);
        return currentUser.reauthenticateWithCredential(cred)
    }
    onChangePasswordPress = () => {
        this.reauthenticate(this.state.currentPassword).then(() => {
            var currentUser = firebase.auth().currentUser;
            currentUser.updatePassword(this.state.newPassword).then(() => {
                Alert.alert("password değişti")
            }).catch((error) => {
                Alert.alert(error.message)
            })
        }).catch((error) => {
            Alert.alert(error.message)
        })

    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Şifre Değiştir" bg_white={true} navigation={this.props.navigation} />
                <View style={{ backgroundColor: '#7A617A', flex:1 }}>
                    <View style={styles.container}>
                        <View style={{ height: 60, width: '100%',marginTop:10 }}>
                            <TextInput style={styles.textInputStyle}
                                value={this.state.currentPassword}
                                placeholder='Mevcut Şifre'
                                placeholderTextColor='black'
                                secureTextEntry
                                onChangeText={(text) => { this.setState({ currentPassword: text }) }}
                                underlineColorAndroid='transparent' />
                        </View>
                        <View style={{ height: 60, width: '100%' ,marginTop:10 }}>
                            <TextInput style={styles.textInputStyle}
                                value={this.state.newPassword}
                                placeholder='Yeni Şifre'
                                secureTextEntry
                                placeholderTextColor='black'
                                onChangeText={(text) => { this.setState({ newPassword: text }) }}
                                underlineColorAndroid='transparent' />
                        </View>




                        {/* <TextInput value={this.state.currentPassword} placeholder="Mevcut Şifre" onChangeText={(text) => { this.setState({ currentPassword: text }) }} />
<TextInput value={this.state.newPassword} placeholder="Yeni Şifre" onChangeText={(text) => { this.setState({ newPassword: text }) }} /> */}
                        <MyButton
                            title='Değiştir'
                            onPress={this.onChangePasswordPress}
                            color='#731873' />
                        {/* <Button title="Değiştir" onPress={this.onChangePasswordPress} /> */}
                    </View>
                </View>

            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    textInputStyle: {
        alignSelf: 'stretch',
        color: 'black',
        padding: 13,
        backgroundColor: 'white',
        borderTopColor: '#ededed',
        marginRight: 20,
        marginLeft: 20,
        marginTop: 5,
        borderRadius: 5,
        fontSize: 16,
        opacity:1

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
        justifyContent: 'center',
        height: height / 1.8,
        backgroundColor: theme.COLORS.WHITE,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        shadowOpacity: 0.2,
        zIndex: 2,
        borderRadius: 10,
        opacity: 0.7,
        margin: 15,
        marginTop:'20%'
    },
});