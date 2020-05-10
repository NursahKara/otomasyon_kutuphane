
import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView, TouchableOpacity, StyleSheet,TextInput, Alert } from 'react-native';
import CustomHeader from './CustomHeader';
import firebase from 'firebase';

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
        this.reauthenticate(this.state.currentPassword).then(()=>{
            var currentUser = firebase.auth().currentUser;
            currentUser.updatePassword(this.state.newPassword).then(() => {
                Alert.alert("password değişti")
            }).catch((error) => {
                Alert.alert(error.message)
            })
        }).catch((error)=>{
            Alert.alert(error.message)
        })
       
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Şifre Değiştir" bg_white={true} navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>


               
                    <View style={{height:60,width:'100%'}}>
                    <TextInput  style={styles.textInputStyle} 
                            value={this.state.currentPassword} 
                            placeholder='Mevcut Şifre' 
                            placeholderTextColor='black' 
                            onChangeText={(text) => { this.setState({ currentPassword: text }) }}  
                            underlineColorAndroid='transparent'/>
                    </View>
               <View style={{height:60 ,width:'100%' }}>
               <TextInput  style={styles.textInputStyle} 
                            value={this.state.currentPassword} 
                            placeholder='Yeni Şifre' 
                            placeholderTextColor='black' 
                            onChangeText={(text) => { this.setState({ newPassword: text }) }}
                            underlineColorAndroid='transparent'/>
               </View>
               
               


                    {/* <TextInput value={this.state.currentPassword} placeholder="Mevcut Şifre" onChangeText={(text) => { this.setState({ currentPassword: text }) }} />
                    <TextInput value={this.state.newPassword} placeholder="Yeni Şifre" onChangeText={(text) => { this.setState({ newPassword: text }) }} /> */}
                    <Button title="Değiştir" onPress={this.onChangePasswordPress} />
                </View>
            </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
   textInputStyle:{
       alignSelf:'stretch',
       color:'black',
       padding:13,
       backgroundColor:'#d8d8d8',
       borderTopColor:'#ededed',
       marginRight: 20,
       marginLeft:20,
       marginTop:5,
       borderRadius:5,
       fontSize:16,
      
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
       flex:1
   }
});