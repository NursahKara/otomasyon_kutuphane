import React, {Component} from 'react';
import {View, Text, StyleSheet, ColorPropType} from 'react-native';
import {Input, MyButton} from './common';
import firebase from 'firebase';

class LoginForm extends Component{
 
    state={
        email:'',
        password:'',
        error: '',
        loading:false
    }
    onButtonClicked(){
        const {email,password}=this.state;
        this.setState({   //logine tıklandığında hata mesajını sıfırlar
            error:'',
            loading:true
        })
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=>{   //hata aldığı durum 
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFailed.bind(this));

        });
    }
    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            error: '',
            loading:false
        })
    }

    onLoginFailed(){
        this.setState({
            error:'Authentication failed.',
            loading:false 
        });
    }
    render(){
        const {error,loading}=this.state;
        const errorMsg = error ? (
<Text style={styles.errorStyle}>
    {error}
</Text>
        ) : null;
      
        return(
            <View style={{padding:30}}>
                <View>
                    <Input text='Email:' inputPlaceHolder='Enter Email'
                                        onChangeText={(text)=>{
                                                this.setState({
                                                email:text
                                            })
                                        }}
                                        value={this.state.email}/>
                </View>
                <View>
                <Input text='Password:' inputPlaceHolder='Enter Password'
                                        onChangeText={(text)=>{
                                                this.setState({
                                                password:text
                                            })
                                        }}
                                        secureTextEntry
                                        value={this.state.password}/>
                   
                </View>
{errorMsg}
                <MyButton spinner={loading}
                          title='Login'
                          onPress={this.onButtonClicked.bind(this)}
                          color='#E87B79'/>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    buttonWrapper:{
        marginTop:20,
        height:49,
        borderRadius:10,
        justifyContent:'center',
        fontSize: 18,
        backgroundColor:'#fff'
        
    },
    errorStyle:{
        fontSize:20,
        color:'red',
        paddingTop:15,
        alignSelf:'center'

    }
})
export default LoginForm;