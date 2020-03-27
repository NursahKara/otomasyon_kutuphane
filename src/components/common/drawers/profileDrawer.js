import React, { Component } from 'react';
import {StyleSheet,View,Text,SafeAreaView,ScrollView,Dimensions} from 'react-native';
import { NavigationContainer, StackActions ,DefaultTheme , DarkTheme,useTheme } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../../../screens/home';
import ProfileScreen from '../../../screens/profile';
import SettingsScreen from '../../../screens/settings';
import ScanBarcodeScreen from '../../../screens/settings';
import OpinionsScreen from '../../../screens/opinions';
import {createDrawerNavigator,DrawerItem} from '@react-navigation/drawer';
import SuggestionsScreen from '../../../screens/suggestions';

const MyTheme = {
    dark: true,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(150, 50, 255)',
      text: 'rgb(0, 8, 0)',
      border: 'rgb(199, 199, 204)',
    },
  };
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
                <Icon.Button name={'bars'} size={25} backgroundColor='#009387' onPress={()=>{
                    navigation.openDrawer()
                }}></Icon.Button>
            )
        }}/>
    </HomeStack.Navigator>
);

const ProfileStack =createStackNavigator();
const ProfileStackScreen =({navigation})=>(
    <ProfileStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'black',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <ProfileStack.Screen name='Profile' component={ProfileScreen} options={{
            title:'Profile',
            headerLeft:()=>(
                <Icon.Button name={'bars'} size={25} backgroundColor='#009387' onPress={()=>{
                    navigation.openDrawer()
                }}></Icon.Button>
            )
        }}/>
    </ProfileStack.Navigator>
);
const OpinionStack =createStackNavigator();
const OpinionStackScreen =({navigation})=>(
    <OpinionStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
       
    }}>
        <OpinionStack.Screen name='Opinions' component={OpinionsScreen} options={{
            title:'Opinions',
          
            headerLeft:()=>(
                <Icon.Button name={'bars'} size={25} backgroundColor='#009387' onPress={()=>{
                    navigation.openDrawer()
                }}></Icon.Button>
            )
        }}/>
    </OpinionStack.Navigator>
);
const SettingsStack =createStackNavigator();
const SettingsStackScreen =({navigation})=>(
    <SettingsStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        drawerIcon:({tintColor})=>(
            <Icon name='comment'  size={24} />
        ),
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <SettingsStack.Screen name='Settings' component={SettingsScreen} options={{
            title:'Settings',
            headerLeft:()=>(
                <Icon.Button name={'bars'} size={25} backgroundColor='#009387' onPress={()=>{
                    navigation.openDrawer()
                }}></Icon.Button>
            )
        }}/>
    </SettingsStack.Navigator>
);
const SuggestionsStack =createStackNavigator();
const SuggestionsStackScreen =({navigation})=>(
    <SuggestionsStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <SuggestionsStack.Screen name='Suggestions' component={SuggestionsScreen} options={{
            title:'Suggestions',
            headerLeft:()=>(
                <Icon.Button name={'bars'} size={25} backgroundColor='#009387' onPress={()=>{
                    navigation.openDrawer()
                }}></Icon.Button>
            )
        }}/>
    </SuggestionsStack.Navigator>
);
const ScanBarcodeStack =createStackNavigator();
const ScanBarcodeStackScreen =({navigation})=>(
    <ScanBarcodeStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <ScanBarcodeStack.Screen name='Suggestions' component={ScanBarcodeScreen} options={{
            title:'Suggestions',
            headerLeft:()=>(
                <Icon.Button name={'bars'} size={25} backgroundColor='black' onPress={()=>{
                    navigation.openDrawer()
                }}></Icon.Button>
            )
        }}/>
    </ScanBarcodeStack.Navigator>
);

const Drawer=createDrawerNavigator();
const DrawerMenu =()=>{
    return(
        <NavigationContainer theme={MyTheme}>
            <Drawer.Navigator initialRouteName="Profile" >
                <Drawer.Screen name="Home" component={HomeStackScreen}/>
                <Drawer.Screen name="Profile" component={ProfileStackScreen}/>
                <Drawer.Screen name="Opinions" component={OpinionStackScreen}/>
                <Drawer.Screen name="Settings" component={SettingsStackScreen}/>
                <Drawer.Screen name="Suggestions" component={SuggestionsStackScreen}/>
                <Drawer.Screen name="Scan Barcode" component={ScanBarcodeStackScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

const styles=StyleSheet.create({
    topImage:{
        paddingTop:50,
        backgroundColor:'black'
    }
});
export default DrawerMenu;

