import * as React from 'react';
import { View, Text, Button, StyleSheet,SafeAreaView,TextInput } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Input, MyButton} from '../components/common';
import {connect} from 'react-redux';
import {changeName, changeSurname,changeNick,sendInformationProfile} from '../actions';
import CustomHeader from './CustomHeader';
import { Actions } from 'react-native-router-flux';
 class SignUpScreen extends React.Component{
    onChangeName(name){
        this.props.changeName(name);
    }
    changeSurname(surname){
        this.props.changeSurname(surname);
    }
    changeNick(nick){
        this.props.changeNick(nick);
    }
    sendInformationProfile(){
        const {name,surname,nick}=this.props;
        this.props.sendInformationProfile(name,surname,nick);
        Actions.main();
    }
    
    render(){
        return(
            <SafeAreaView style={{ flex: 1}}>
            {/* <CustomHeader title="Sign Up!"  navigation={this.props.navigation}/> */}
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TextInput 
                    style={styles.textInputStyle} 
                    placeholder='Name' 
                    placeholderTextColor='black' 
                    underlineColorAndroid='transparent'
                    onChangeText={this.onChangeName.bind(this)}
                    />
            <TextInput 
                    style={styles.textInputStyle} 
                    placeholder='Surname' 
                    placeholderTextColor='black' 
                    underlineColorAndroid='transparent'
                    onChangeText={this.changeSurname.bind(this)}
                    />
            <TextInput 
                    style={styles.textInputStyle} 
                    placeholder='Nick' 
                    placeholderTextColor='black' 
                    underlineColorAndroid='transparent'
                    onChangeText={this.changeNick.bind(this)}
                    />
            <MyButton spinner={false}
                      title='Send'
                      onPress={this.sendInformationProfile.bind(this)}
                      color='#E87B79'
                      />
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
        margin: 20,
        borderRadius:5,
        fontSize:16,
        height:70
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

  const mapStateToProps=state=>{
      const {name,surname,nick} =state.profileInformation;
      return{
        name,surname,nick,sendInformationProfile
      }
  }
  export default connect(mapStateToProps,{
    changeName,changeSurname,changeNick,sendInformationProfile
  })(SignUpScreen);

  //birthday, gender eklenecek.
  //profilde kitap önerisi çıkarabilmek için kitap türleri arasında seçim yapma sayfasına yönlendirilebilir.
  