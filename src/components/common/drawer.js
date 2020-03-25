import React, { Component } from 'react';
import {StyleSheet,View,Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import HomeScreen from '../../screens/home';
import {createDrawerNavigator} from '@react-navigation/drawer';

const HomeStack =createStackNavigator();
const HomeStackScreen =({navigation})=>(
    <HomeStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <HomeStack.Screen name='Home' component={HomeScreen} options={{
            title:'Home',
            headerLeft:()=>(
                <FontAwesome5.Button name={'bars'} size={25} backgroundColor='#009387' onPress={()=>{
                    navigation.openDrawer()
                }}></FontAwesome5.Button>
            )
        }}/>
    </HomeStack.Navigator>
);

const Drawer=createDrawerNavigator();
const DrawerMenu =()=>{
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeStackScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default DrawerMenu;

