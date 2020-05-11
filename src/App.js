import React, { Component } from 'react';
import {
  Text, View, SafeAreaView,
  Image, TouchableOpacity,
  ScrollView, Button, FlatList,
  TextInput, StyleSheet, Dimensions,
  Modal
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/home';
import OpinionsScreen from './screens/opinions';
import SettingsScreen from './screens/settings';
import ScanBarcodeScreen from './screens/scan_barcode';
import ProfileScreen from './screens/profile';
import Categories from './screens/categories';
import SuggestionsScreen from './screens/suggestions';
import RecentReleases from './screens/recentReleases';
import MostRead from './screens/mostRead';
import TopRated from './screens/topRated';
import FavoriteScreen from './screens/favorite';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';
import Graphics from './screens/graphics';
import ChangePassword from './screens/changePassword';
import FavoriteTypes from './screens/favoriteTypes';
import FavoriteBooks from './screens/favoriteBooks';
import { Actions } from 'react-native-router-flux';
const { width1, height1 } = Dimensions.get("screen");
function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../assest/images/books.jpg')}
          style={{ height: '100%', width: '100%' }}
        />
      </View>
      <ScrollView style={{ marginLeft: 25, marginTop: '30%' }}>
        <View style={{ marginBottom: 10, flex: 3 }}>
          <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row' }} onPress={() => props.navigation.navigate('Home')}>
            <View style={{ flex: 1 }}>
              <Icon name="home" size={25} />
            </View>
            <View style={{ flex: 5 }}>
              <Text style={{ fontSize: 16, marginLeft: 15 }}>Ana Sayfa</Text>
            </View>

          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 10, flex: 1 }}>
          <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row' }} onPress={() => props.navigation.navigate('Graphics')}>
            <View style={{ flex: 1 }}>
              <Icon name="rocket" size={25} />
            </View>
            <View style={{ flex: 5 }}>
              <Text style={{ fontSize: 16, marginLeft: 15 }}>Grafikler</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 10, flex: 1 }}>
          <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row' }} onPress={() => props.navigation.navigate('Profile')}>
            <View style={{ flex: 1 }}>
              <Icon name="user" size={25} />
            </View>
            <View style={{ flex: 5 }}>
              <Text style={{ fontSize: 16, marginLeft: 15 }}>Profil</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 10, flex: 1 }}>
          <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row' }} onPress={() => props.navigation.navigate('LogOut')}>
            <View style={{ flex: 1 }}>
              <Icon name="power-off" size={25} />
            </View>
            <View style={{ flex: 5 }}>
              <Text style={{ fontSize: 16, marginLeft: 15 }}>Çıkış Yap</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const Tab = createBottomTabNavigator();
const navOptionHandler = () => ({
  headerShown: false
})
const StackHome = createStackNavigator();
function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler} />
      <StackHome.Screen name="Opinions" component={OpinionsScreen} options={navOptionHandler} />
      <StackHome.Screen name="Categories" component={Categories} options={navOptionHandler} />
      <StackHome.Screen name="TopRated" component={TopRated} options={navOptionHandler} />
      <StackHome.Screen name="MostRead" component={MostRead} options={navOptionHandler} />
      <StackHome.Screen name="RecentReleases" component={RecentReleases} options={navOptionHandler} />
    </StackHome.Navigator>
  )
}
const StackSettings = createStackNavigator();
function SettingsStack() {
  return (
    <StackSettings.Navigator initialRouteName="Settings">
      <StackSettings.Screen name="Settings" component={SettingsScreen} options={navOptionHandler} />
      <StackSettings.Screen name="ScanBarcode" component={ScanBarcodeScreen} options={navOptionHandler} />
    </StackSettings.Navigator>
  )
}
const StackGraphics = createStackNavigator();
function GraphicsStack() {
  return (
    <StackGraphics.Navigator initialRouteName="Graphics">
      <StackGraphics.Screen name="Graphics" component={Graphics} options={navOptionHandler} />
    </StackGraphics.Navigator>
  )
}
const StackProfile = createStackNavigator();
function ProfileStack() {
  return (
    <StackProfile.Navigator initialRouteName="Profile">
      <StackProfile.Screen name="Profile" component={ProfileScreen} options={navOptionHandler} />
      <StackProfile.Screen name="Favorite" component={FavoriteScreen} options={navOptionHandler} />
      <StackProfile.Screen name="Graphics" component={Graphics} options={navOptionHandler} />
      <StackProfile.Screen name="Suggestions" component={SuggestionsScreen} options={navOptionHandler} />
      <StackProfile.Screen name="RecentReleases" component={RecentReleases} options={navOptionHandler} />
      <StackProfile.Screen name="MostRead" component={MostRead} options={navOptionHandler} />
      <StackProfile.Screen name="ChangePassword" component={ChangePassword} options={navOptionHandler} />
      <StackProfile.Screen name="FavoriteTypes" component={FavoriteTypes} options={navOptionHandler} />
      <StackProfile.Screen name="FavoriteBooks" component={FavoriteBooks} options={navOptionHandler} />

    </StackProfile.Navigator>
  )
}
function TabNavigator() {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Ana Sayfa') {
            iconName = focused
              ? require('../assest/images/home-blue.png')
              : require('../assest/images/home2.png')
          } else if (route.name === 'Grafikler') {
            iconName = focused
              ? require('../assest/images/graphic-color.png')
              : require('../assest/images/graphic.png')
          } else if (route.name === 'Profil') {
            iconName = focused
              ? require('../assest/images/man.png')
              : require('../assest/images/man-white.png')
          }

          return <Image source={iconName} style={{ width: 20, height: 20 }} resizeMode="contain" size={size} color={color} />;
        },
      })}
      tabBarComponent='TabBarBottomKeyboardAware'
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'white',
        }
      }}
    >
      <Tab.Screen name="Ana Sayfa" component={HomeStack} />
      <Tab.Screen name="Grafikler" component={GraphicsStack} />
      <Tab.Screen name="Profil" component={ProfileStack} />

    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

class signOut extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <View>
        <Modal transparent={true} visible={this.state.show}>
          <View style={{ backgroundColor: '#000000aa', flex: 1 }}>
            <View style={{ backgroundColor: '#ffffff', marginBottom: 425, marginTop: 100, marginLeft: 100, marginRight: 100, paddingTop: 25, borderRadius: 10, flex: 1 }}>
              <Button title="Çıkış Yap"
                onPress={() => this.setState({ show: false }), firebase.auth().signOut().then(() => Actions.auth())}
              />
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={props => CustomDrawerContent(props)}>
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="LogOut" component={signOut} />
    </Drawer.Navigator>
  )
}
const StackApp = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="HomeApp">
        <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler} />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}


