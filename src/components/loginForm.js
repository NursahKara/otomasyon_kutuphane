import React, {Component} from 'react';
import {View, Text, StyleSheet, 
        ColorPropType,
        TouchableOpacity,
        Dimensions,
        ScrollView,
        Image,
        ImageBackground,
        Platform,TextInput
} from 'react-native';
import {Input, MyButton} from './common';
import firebase from 'firebase';
import {emailChanged,passwordChanged,loginUser} from '../actions/index';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { getDatabase } from './common/database';
import ProfileScreen from '../screens/profile';
import { Block, theme } from "galio-framework";
getDatabase().ref('login')
const { width, height } = Dimensions.get("screen");
class LoginForm extends Component{
//componentDidMount firebase connection

    onButtonClicked(){
        const {email,password}=this.props;
        this.props.loginUser(email,password);
    }

    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    render(){
        const {error,loading}=this.props;
        const errorMsg = error ? (
    <Text style={styles.errorStyle}>
        {error}
    </Text>
) : null;
      
        return(
            <Block flex>
                <ImageBackground
                    source={require('../../assest/themes/bg.png')}
                    style={styles.ImageContainer}
                    >
                      
                    <ScrollView 
                        showsVerticalScrollIndicator={false}
                        style={{ width, marginTop: '30%' }}
                        >
                            <Block  style={styles.loginContainer}>
                            {/* <Image source={require('../../assest/images/user.png')} style={{width:120,height:120,marginTop:-60,marginLeft:width/3,zIndex:2,borderWidth:3,borderColor:'black',borderRadius:100}}/> */}
                          <View style={{marginTop:'25%',marginLeft:17,marginRight:17,marginBottom:25}}>
                              
                                <TextInput 
                                    style={styles.textInputStyle} 
                                    placeholder='Enter Email' 
                                    placeholderTextColor='black' 
                                    underlineColorAndroid='transparent'
                                    onChangeText={this.onEmailChange.bind(this)}
                                    value={this.props.email}
                                    />
                                <TextInput 
                                    style={styles.textInputStyle} 
                                    placeholder='Enter Password' 
                                    placeholderTextColor='black' 
                                    underlineColorAndroid='transparent'
                                    secureTextEntry
                                    onChangeText={this.onPasswordChange.bind(this)}
                                    value={this.props.password}
                                    />
                                    
                                {errorMsg}
                                </View>
                                <MyButton spinner={loading}
                                        title='Login'
                                        onPress={this.onButtonClicked.bind(this)}
                                        color='#731873'/>
                                <Text style={styles.orText}>OR</Text>
                                <MyButton 
                                        title='Register'
                                        onPress={()=> this.props.navigation.navigate('Register')}
                                        color='#731873'/>
                               
                            </Block>
                    </ScrollView>
                </ImageBackground>
            </Block>
        )
    }
}
const styles=StyleSheet.create({
    errorStyle:{
        fontSize:20,
        color:'red',
        paddingTop:15,
        alignSelf:'center'
    },
    
    loginContainer:{
        justifyContent:'center',
        height:height/1.5,
        backgroundColor:theme.COLORS.WHITE,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        shadowOpacity: 0.2,
        zIndex: 2,
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
        borderRadius:10,
        opacity:0.5 ,
        margin:12 
    },
    signUpTextStyle:{
        color:'white',
        fontSize:20
    },
    signUpContainer:{
        opacity:1,
        flexDirection:'row',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        fontSize: 18,
        marginRight:'auto',
        marginLeft:'auto',
        width:'40%',
        backgroundColor:'#E8C1C1',
        borderRadius:2,
        
    },
    ImageContainer: {
       flex:1,
        padding: 0,
        zIndex: 1
      },
      orText:{
        marginRight:'auto',
        marginLeft:'auto',
        width:'40%',
        fontSize:16
      },
      textInputStyle:{
        alignSelf:'stretch',
        color:'black',
        padding:13,
        borderRadius:5,
        fontSize:16,
        flexDirection:'row',
        height:50,
        width:'auto',
        borderColor:'#E5E5E8',
        borderBottomWidth:1,
        alignItems:'center',
        flexGrow:2,
        fontSize:17,
        paddingLeft:20
    },
    textStyle:{
        color:'#d8d8d8',
        fontSize:18,
        justifyContent:'center',
        alignItems:'center',
         marginTop:35,
         marginLeft:13
    },
    container:{
        flexDirection:'row'
    }
     
});
const mapStateToProps = state =>{
    const{email,password,loading,error}=state.auth;
    return {
       email,password,loading,error
    }
}

  
export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginForm);