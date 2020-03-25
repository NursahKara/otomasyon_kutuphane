import React, { Component } from 'react';
import {StyleSheet,View,Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import HomeScreen from '../../screens/home';
import App from '../../App';
import {createDrawerNavigator} from 'react-navigation-drawer';
import DrawerMenu from './drawer';


class ProfileScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Profile Screen</Text>
            </View>
        )
    }
}
class SettingsScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Settings Screen</Text>
            </View>
        )
    }
}
class DenemeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Deneme Screen</Text>
            </View>
        )
    }
}

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
        screen:ProfileScreen,
        navigationOptions:{
            tabBarIcon:({tintColor})=>(
                <View>
                    <Icon style={[{color:tintColor}]} size={25} name='music'/>
                </View>
            ),
        }
    },
    Settings:{
        screen:SettingsScreen,
        navigationOptions:{
            tabBarIcon:({tintColor})=>(
                <View>
                    <Icon style={[{color:tintColor}]} size={25} name='music'/>
                </View>
            ),
        }
    },
    Deneme:{
        screen:DenemeScreen,
        navigationOptions:{
            tabBarIcon:({tintColor})=>(
                <View>
                    <Icon style={[{color:tintColor}]} size={25} name='music'/> 
                </View>
            ),
            activeColor:'#ffffff',
            inactiveColor:'#ebaabd',
            barStyle:{backgroundColor:'#d13560'}
        }
    },
},
{
    initialRouteName:'Home',
    activeColor:'#ffffff',
    inactiveColor:'#bda1f7',
    barStyle:{backgroundColor:'#6948f4'}
}
);

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