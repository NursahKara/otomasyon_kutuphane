import  React,{Component} from 'react';
import { Text, View ,SafeAreaView,Image,TouchableOpacity,ScrollView,Button,FlatList,TextInput,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/home';
import SuggestionsScreen from './screens/suggestions';
import OpinionsScreen from './screens/opinions';
import SettingsScreen from './screens/settings';
import ScanBarcodeScreen from './screens/scan_barcode';
import ProfileScreen from './screens/profile';
import Kategoriler from './screens/kategoriler';
import SonCikanlar from './screens/sonCikanlar';
import EnCokOkunanlar from './screens/enCokOkunanlar';
import EnCokBegenilenler from './screens/enCokBegenilenler';
import LoginForm from './components/loginForm';
import { Icon } from 'galio-framework';

function CustomDrawerContent(props){
  return(
    <SafeAreaView style={{flex:1}}>
      <View style={{height:150,alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../assest/images/user.png')}
               style={{height:120,width:120,borderRadius:60}}
        />
      </View>
      <ScrollView style={{marginLeft:20,marginTop:'15%'}}>
      <TouchableOpacity style={{marginTop:20}} onPress={()=>props.navigation.navigate('MenuTab')}>
        <Text style={{fontSize:16}}>Menu Tab</Text>
      
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:20}} onPress={()=>props.navigation.navigate('Profile')}>
        <Text style={{fontSize:16}}>Profile</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}
const Tab = createBottomTabNavigator();
const navOptionHandler =()=>({
  headerShown:false
})
const StackHome = createStackNavigator();
function HomeStack(){
  return(
    <StackHome.Navigator initialRouteName="Home">
    <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler}/>
    <StackHome.Screen name="Opinions" component={OpinionsScreen} options={navOptionHandler}/>
    <StackHome.Screen name="Kategoriler" component={Kategoriler} options={navOptionHandler}/>
    <StackHome.Screen name="EnCokBegenilenler" component={EnCokBegenilenler} options={navOptionHandler}/>
    <StackHome.Screen name="EnCokOkunanlar" component={EnCokOkunanlar} options={navOptionHandler}/>
    <StackHome.Screen name="SonCikanlar" component={SonCikanlar} options={navOptionHandler}/>
    </StackHome.Navigator>
  )
}
const StackSettings = createStackNavigator();
function SettingsStack(){
  return(
    <StackSettings.Navigator initialRouteName="Settings">
    <StackSettings.Screen name="Settings" component={SettingsScreen} options={navOptionHandler}/>
    <StackSettings.Screen name="ScanBarcode" component={ScanBarcodeScreen} options={navOptionHandler}/>
    </StackSettings.Navigator>
  )
}
const StackProfile = createStackNavigator();
function ProfileStack(){
  return(
    <StackSettings.Navigator initialRouteName="Profile">
    <StackSettings.Screen name="Profile" component={ProfileScreen} options={navOptionHandler}/>
   
    </StackSettings.Navigator>
  )
}
function TabNavigator(){
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
     tabBarIcon: ({ focused, color, size }) => {
       let iconName;

       if (route.name === 'Home') {
         iconName = focused
           ? require('../assest/images/home.png')
           : require('../assest/images/home-white.png')
       } else if (route.name === 'Settings') {
         iconName = focused 
         ? require('../assest/images/settings.png')
         : require('../assest/images/settings-white.png')
       }else if (route.name==='Profile'){
         iconName=focused
         ?require('../assest/images/user.png')
         :require('../assest/images/user-white.png')
       }

       // You can return any component that you like here!
       return <Image source={iconName} style={{width:20,height:20}} resizeMode="contain" size={size} color={color} />;
     },
   })}
   tabBarOptions={{
     activeTintColor: 'red',
     inactiveTintColor: 'black',
   }}
 >
   <Tab.Screen name="Home" component={HomeStack} />
   <Tab.Screen name="Settings" component={SettingsStack} />
   <Tab.Screen name="Profile" component={ProfileStack} />

 </Tab.Navigator>
  )
}
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return(
      <Drawer.Navigator drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginLeft: 30 },
        marginTop:'60%',
        initialRouteName:"MenuTab"
      }}
       drawerContent={props=>CustomDrawerContent(props)}>
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
  )
}
const StackApp =createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="HomeApp">
        <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}/>
      </StackApp.Navigator>
    </NavigationContainer>
  );
}


