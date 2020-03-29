import * as React from 'react';
import { View, Text, Button, StyleSheet,SafeAreaView,TextInput } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Input, MyButton} from '../components/common';
import {connect} from 'react-redux';
import {changeProfile, sendInformationProfile} from '../actions';
import CustomHeader from './CustomHeader';

 class ProfileScreen extends React.Component{
   
    onChangeInformation(information){
        this.props.changeProfile(information);
    }
    sendInformationProfile(){
        this.props.sendInformationProfile(this.props.information) 
    }
    
    render(){
        return(
            <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title="Profile" navigation={this.props.navigation}/>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TextInput 
                    style={styles.textInputStyle} 
                    placeholder='Name' 
                    placeholderTextColor='black' 
                    underlineColorAndroid='transparent'
                    onChangeText={this.onChangeInformation.bind(this)}
                 
                   
                    />
            <TextInput 
                    style={styles.textInputStyle} 
                    placeholder='Surname' 
                    placeholderTextColor='black' 
                    underlineColorAndroid='transparent'
                    />
            <TextInput 
                    style={styles.textInputStyle} 
                    placeholder='Nick' 
                    placeholderTextColor='black' 
                    underlineColorAndroid='transparent'
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
      const {information} =state.profileInformation;
      return{
        information,sendInformationProfile
      }
  }
  export default connect(mapStateToProps,{
    changeProfile,sendInformationProfile
  })(ProfileScreen);
