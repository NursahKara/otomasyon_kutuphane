import  React,{Component} from 'react';
import { Text, View ,SafeAreaView,Image,TouchableOpacity,ScrollView,Button,FlatList,TextInput,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignUpScreen from '../screens/signUp';
import Register from '../screens/register';
import LoginForm from './loginForm';

const navOptionHandler =()=>({
    headerShown:false
  })

const StackLogin = createStackNavigator();
function LoginStack(){
  return(
    <StackLogin.Navigator initialRouteName="Login">
    <StackLogin.Screen name="Login" component={LoginForm} options={navOptionHandler}/>
    <StackLogin.Screen name="Register" component={Register} options={navOptionHandler}/>
    </StackLogin.Navigator>
  )
}
const StackApp =createStackNavigator();
export default function LoginNavigation() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="LoginApp">
        <StackApp.Screen name="LoginApp" component={LoginStack} options={navOptionHandler}/>
      </StackApp.Navigator>
    </NavigationContainer>
  );
}