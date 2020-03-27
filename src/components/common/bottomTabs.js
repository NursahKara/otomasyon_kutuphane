import React, { Component } from 'react';
import {StyleSheet,View,Text, Alert} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import App from '../../App';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../../screens/home';
import ProfileScreen from '../../screens/profile';
import SettingsScreen from '../../screens/settings';
import ScanBarcodeScreen from '../../screens/settings';
import OpinionsScreen from '../../screens/opinions';
import DrawerMenu from './drawer';
import profileDrawerMenu from './drawers/profileDrawer';
import opinionDrawerMenu from './drawers/opinionDrawer';
import suggestionDrawerMenu from './drawers/suggestionDrawer';
import settingDrawerMenu from './drawers/settingDrawer';

const TabNavigator=createMaterialBottomTabNavigator(
{
    Home:{
        screen:DrawerMenu,
        navigationOptions:{
            tabBarIcon:({tintColor})=>(
                <View>
                    <Icon style={[{color:tintColor}]} size={25} name='home'/>
                </View>
            ),
        }
    },
    Profile:{
        screen:profileDrawerMenu,
        navigationOptions:{
            tabBarIcon:({tintColor})=>(
                <View>
                    <Icon style={[{color:tintColor}]} size={25} name='music'/>
                </View>
            ),
        }
    },
   
    Map:{
        screen:suggestionDrawerMenu,
        navigationOptions:{
            // tabBarIcon:({tintColor})=>(
            //     <View>
            //         <Icon style={[{color:tintColor}]} size={25} name='music'/> 
            //     </View>
            // ),
            tabBarIcon: ({ tintColor }) => (
                <Icon name = {"bars"} color={tintColor} size={25}/>
                ),
            activeColor:'#ffffff',
            inactiveColor:'#fff',
            barStyle:{
            backgroundColor:'#581845',
            }
        }
    },
    Settings:{
        screen:settingDrawerMenu,
        navigationOptions:{
            tabBarIcon:({tintColor})=>(
                <View>
                    <Icon style={[{color:tintColor}]} size={25} name='music'/>
                </View>
            ),
            headerLeft:()=>(
                <Icon.Button name={'bars'} size={25} backgroundColor='#009387' onPress={()=>{
                    navigation.openDrawer()
                }}></Icon.Button>
            ),
            
        }
    },
},
{
    initialRouteName:'Home',
    activeColor:'#581845',
    inactiveColor:'#581845',
    barStyle:{
        backgroundColor:'#6948f4',
    },
    
});

  const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
  })
  export default createAppContainer(TabNavigator);

  //iconlar calismiyor 
  //fontawesome duzeltilecek
