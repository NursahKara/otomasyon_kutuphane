import React, { Component } from 'react';
import {
    View, Text, Button, SafeAreaView,
    TouchableOpacity, TextInput, StyleSheet,
    Dimensions, Keyboard, ScrollView, Alert
} from 'react-native';
import firebase from 'firebase';
import CustomHeader from './CustomHeader';
import { Input, MyButton, Spinner } from '../components/common';
import { Block, theme } from "galio-framework";
import EmailSender from 'react-native-smtp';
const { width, height } = Dimensions.get("screen");

export default class OpinionsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Düşüncelerinizi Belirtin...",
            subject: '',
            opinion: ''

        }
    }

    onSubjectChange(text) {
        this.setState({
            subject: text
        })
        console.log(text)
    }
    onOpinionChange(text) {
        this.setState({
            opinion: text
        })
        console.log(text)
    }
    sendButton() {
        Alert.alert("Mesajınız Başarıyla Gönderilmiştir.")
        const currentUser = firebase.auth().currentUser;
        if (this.state.subject.length < 1 || this.state.opinion.length < 1) {
            console.log("konu veya gövde çok kısa");
            return;
        }
        EmailSender.config({
            host: 'smtp.gmail.com',
            port: '587',
            username: 'otomasyoninfo@gmail.com',
            password: 'otomasyonkutuphane123',
            isAuth: 'false',
            tls: 'true'
        });
        EmailSender.send(
            {
                from: 'otomasyoninfo@gmail.com',
                to: 'otomasyonkutuphaneinfo@gmail.com',
                subject: ' Konu:  ' + this.state.subject,
                body: '<h3>' + this.state.opinion + '</h3><br><br><h4>' + currentUser.email + ' tarafindan gönderildi.</h4>',
                charset: 'utf-8'
            }
            , []
        ).then(
            this.setState({
                subject: '',
                opinion: ''
            })
        )

    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Bize Yazın" bg_white={true} navigation={this.props.navigation} />
                <View style={{ backgroundColor: '#7A617A', flex: 1 }}>
                    <ScrollView style={{ height: '100%' }}>
                        <View style={styles.container}>
                            <View>
                                <TextInput style={styles.textInputStyle}
                                    placeholder='Konu'
                                    placeholderTextColor='black'
                                    multiline={true}
                                    numberOfLines={1}
                                    autoFocus={false}
                                    editable={true}
                                    returnKeyType='done'
                                    onSubmitEditing={Keyboard.dismiss}
                                    maxLength={60}
                                    underlineColorAndroid='transparent'
                                    onChangeText={(text) => this.onSubjectChange(text)}
                                    value={this.state.subject}
                                />
                            </View>

                            <View style={{ width: '100%' }}>
                                <TextInput style={styles.textInputStyle}
                                    placeholder='Düşüncelerinizi Belirtin...'
                                    placeholderTextColor='black'
                                    multiline={true}
                                    numberOfLines={14}
                                    autoFocus={false}
                                    editable={true}
                                    returnKeyType='done'
                                    onSubmitEditing={Keyboard.dismiss}
                                    maxLength={400}
                                    underlineColorAndroid='transparent'
                                    onChangeText={(text) => this.onOpinionChange(text)}
                                    value={this.state.opinion}
                                />
                            </View>
                            <View style={{ marginTop: '10%' }}>
                                <MyButton
                                    title='Gönder'
                                    onPress={this.sendButton.bind(this)}
                                    color='#731873' />
                            </View>

                        </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    textInputStyle: {
        // alignSelf: 'stretch',
        color: 'black',
        backgroundColor: theme.COLORS.WHITE,
        borderTopColor: '#ededed',
        marginRight: '5%',
        marginLeft: '5%',
        marginTop: '5%',
        borderRadius: 5,
        fontSize: 16,
        opacity: 1,
        padding: 13,
        alignItems: 'flex-start',
        textAlignVertical: 'top'
    },
    container: {
        backgroundColor: 'white',
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        shadowOpacity: 5,
        zIndex: 2,
        borderRadius: 10,
        opacity: 0.7,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 4,
    },
});