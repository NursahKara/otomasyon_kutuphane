
import React, { Component } from 'react';
import {
    View, Text, Button, SafeAreaView,
    TouchableOpacity, TextInput, StyleSheet,
    Dimensions, Keyboard, ScrollView
} from 'react-native';
import CustomHeader from './CustomHeader';
import { Input, MyButton, Spinner } from '../components/common';
import { Block, theme } from "galio-framework";
const { width, height } = Dimensions.get("screen");

export default class OpinionsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Düşüncelerinizi Belirtin..."
        }
        this.handleChangeText = this.handleChangeText.bind(this);

    }
    handleChangeText() {
        this.setState({

        })
    }
    sendButton(){

    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Bize Yazın" bg_white={true} navigation={this.props.navigation} />
                <View style={{ backgroundColor: '#7A617A', flex: 1 }}>
                    <ScrollView style={{height:'100%'}}>
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
                                onChangeText={this.handleChangeText}
                                underlineColorAndroid='transparent'
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
                                onChangeText={this.handleChangeText}
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <View style={{ marginTop: '10%' }}>
                            <MyButton
                                title='Gönder'
                                onPress={this.sendButton}
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
        alignItems:'flex-start',
        textAlignVertical:'top'
    },
    container: {
        backgroundColor:'white',
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
