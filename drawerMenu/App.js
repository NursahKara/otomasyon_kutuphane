import React, { Component } from 'react';
import { View, Image, TouchableOpacity,StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Profile from './screens/profile';
import Opinions from './screens/opinions';
import Suggestions from './screens/suggestions';
import scanBarkode from './screens/scan_barcode';
import Settings from './screens/settings';
import Icon from 'react-native-vector-icons';

class NavigationDrawer extends Component {
    toggleDrawer = () => {
      //Props to open/close the drawer
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            <Icon name='bars' size={32} onPress={()=> this.props.navigation.navigate('DrawerOpen')}  
            title='DrawerOpen'/>      
          </TouchableOpacity>
        </View>
      );
    }
  }
  
  const Profile_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        title: 'Profile',
        headerLeft: <NavigationDrawer navigationProps={navigation} />,
        headerStyle: {
        backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });
  
  const Opinions_StackNavigator = createStackNavigator({
    //All the screen from the Screen2 will be indexed here
    Second: {
      screen: Opinions,
      navigationOptions: ({ navigation }) => ({
        title: 'Opinions',
        headerLeft: <NavigationDrawer navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });
  
  const Suggestions_StackNavigator = createStackNavigator({
    //All the screen from the Screen3 will be indexed here
    Third: {
      screen: Suggestions,
      navigationOptions: ({ navigation }) => ({
        title: 'Suggestions',
        headerLeft: <NavigationDrawer navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });

  const ScanBarkode_StackNavigator = createStackNavigator({
    //All the screen from the Screen3 will be indexed here
    Fourth: {
      screen: scanBarkode,
      navigationOptions: ({ navigation }) => ({
        title: 'scanBarkode',
        headerLeft: <NavigationDrawer navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });
  const Settings_StackNavigator = createStackNavigator({
    //All the screen from the Screen3 will be indexed here
    Fifth: {
      screen: Settings,
      navigationOptions: ({ navigation }) => ({
        title: 'Settings',
        headerLeft: <NavigationDrawer navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });
  
  const DrawerNavigatorExample = createDrawerNavigator({
    //Drawer Options and indexing
    Profile: {
      //Title
      screen: Profile_StackNavigator,
      navigationOptions: {
      drawerLabel: 'Profile',
      },
    },
    Opinions: {
      //Title
      screen: Opinions_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Opinions',
      },
    },
    Suggestions: {
        //Title
        screen: Suggestions_StackNavigator,
        navigationOptions: {
          drawerLabel: 'Suggestions',
        },
      },
    scanBarkode: {
        //Title
        screen: ScanBarkode_StackNavigator,
        navigationOptions: {
          drawerLabel: 'scanBarkode',
        },
      },
    Settings: {
      //Title
      screen: Settings_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Settings',
      },
    },
  });
  
  export default createAppContainer(DrawerNavigatorExample);