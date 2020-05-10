import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    Dimensions,
    ScrollView,
    ImageBackground,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Input, MyButton } from '../components/common';
import { emailRegister, passwordRegister, sendInformationRegister } from '../actions/index';
import { connect } from 'react-redux';
import { Block, theme } from "galio-framework";
import CustomHeader from './CustomHeader';
import { getDatabase } from '../components/common/database';
import Icon from 'react-native-vector-icons/FontAwesome';

getDatabase().ref('register')
const { width, height } = Dimensions.get("screen");
class Register extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    onRegisterButtonClicked() {
        const { email, password } = this.props;
        this.props.sendInformationRegister(email, password);
        
    }
    handleClick() {
        this.setState({
            clicked: !this.state.clicked
        });
    }
    onEmailRegister(text) {
        this.props.emailRegister(text);
    }
    onPasswordRegister(text) {
        this.props.passwordRegister(text);
    }
    render() {
        const name = this.state.clicked ? 'eye' : 'eye-slash'
        const isSecureTextEntry = this.state.clicked ? false : true
        const { error, loading } = this.props;
        const errorMsg = error ? (
            <Text style={styles.errorStyle}>
                {error}
            </Text>
        ) : null;

        return (
            <Block flex>
                <ImageBackground
                    source={require('../../assest/themes/register-bg.png')}
                    style={styles.ImageContainer}
                >
                    <CustomHeader title="Kayıt Ol!" bg_white={false} navigation={this.props.navigation} />
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ width, marginTop: '20%' }}
                    >
                        <Block style={styles.loginContainer}>
                            <View style={{ marginTop: '25%', marginLeft: 17, marginRight: 17, marginBottom: 25 }}>
                                <TextInput
                                    style={styles.textInputStyle}
                                    placeholder='Email'
                                    placeholderTextColor='black'
                                    underlineColorAndroid='transparent'
                                    onChangeText={this.onEmailRegister.bind(this)}
                                    value={this.props.email}
                                />
                                <View style={styles.passwordContainer}>
                                    <TextInput
                                        style={styles.textInputStyle}
                                        placeholder='Şifre'
                                        placeholderTextColor='black'
                                        underlineColorAndroid='transparent'
                                        secureTextEntry={isSecureTextEntry}
                                        onChangeText={this.onPasswordRegister.bind(this)}
                                        value={this.props.password}
                                    />
                                    <View style={{ alignItems: 'flex-end', justifyContent: 'center', marginRight: 10 }}>
                                        <TouchableOpacity onPress={this.handleClick}>
                                            <Icon
                                                name={name}
                                                color='#000'
                                                size={19}

                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {errorMsg}
                            </View>
                            <MyButton spinner={loading}
                                title='Kayıt Ol'
                                onPress={this.onRegisterButtonClicked.bind(this)}
                                color='#731873' />

                        </Block>
                    </ScrollView>
                </ImageBackground>
            </Block>
        )
    }
}
const styles = StyleSheet.create({
    errorStyle: {
        fontSize: 20,
        color: 'red',
        paddingTop: 15,
        alignSelf: 'center'
    },
    loginContainer: {
        justifyContent: 'center',
        height: height / 1.5,
        backgroundColor: theme.COLORS.WHITE,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        shadowOpacity: 0.2,
        zIndex: 2,
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
        borderRadius: 10,
        opacity: 0.5,
        margin: 12
    },
    signUpTextStyle: {
        color: 'white',
        fontSize: 20
    },
    signUpContainer: {
        opacity: 1,
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '40%',
        backgroundColor: '#E8C1C1',
        borderRadius: 2,
    },
    ImageContainer: {
        flex: 1,
        padding: 0,
        zIndex: 1
    },
    textInputStyle: {
        alignSelf: 'stretch',
        color: 'black',
        padding: 13,
        borderRadius: 5,
        fontSize: 16,
        flexDirection: 'row',
        height: 50,
        width: 'auto',
        borderColor: '#E5E5E8',
        borderBottomWidth: 1,
        alignItems: 'center',
        flexGrow: 2,
        fontSize: 17,
        paddingLeft: 10
    },
    passwordContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
    },


});
const mapStateToProps = state => {
    const { email, password, loading, error } = state.registerInformationRed;
    return {
        email, password, loading, error
    }
}


export default connect(mapStateToProps, { emailRegister, passwordRegister, sendInformationRegister })(Register);