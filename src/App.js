import  React,{Component} from 'react';
import { Text, View ,SafeAreaView,
         Image,TouchableOpacity,
         ScrollView,Button,FlatList,
         TextInput,StyleSheet,
         Modal} from 'react-native';
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
import FavoriteScreen from './screens/favorite';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { MyButton } from './components/common';
import SelectedBook from './screens/selectedBookPage';
//import LogOut from './screens/logOut';

function CustomDrawerContent(props){
  return(
    <SafeAreaView style={{flex:1}}>
      <View style={{height:150,alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../assest/images/user.png')}
               style={{height:120,width:120,borderRadius:60}}
        />
      </View>
      <ScrollView style={{marginLeft:20,marginTop:'15%'}}>
      <View>
        <TouchableOpacity style={{marginTop:20,flexDirection:'row'}} onPress={()=>props.navigation.navigate('MenuTab')}>
          <Icon name="home"  size={20} />
          <Text style={{fontSize:16,marginLeft:15}}>Home</Text>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity style={{marginTop:20,flexDirection:'row'}} onPress={()=>props.navigation.navigate('Profile')}>
          <Icon name="user-circle"  size={20}/>
          <Text style={{fontSize:16,marginLeft:15}}>Profile</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={{marginTop:20,flexDirection:'row'}} onPress={()=>props.navigation.navigate('LogOut')}>
          <Icon name="sign-out"  size={20} />
          <Text style={{fontSize:16,marginLeft:15}}>Log Out</Text>
        </TouchableOpacity>
      </View>
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
    <StackHome.Screen name="SelectedBook" component={SelectedBook} options={navOptionHandler}/>
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
    <StackSettings.Screen name="Favori" component={FavoriteScreen} options={navOptionHandler}/>
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

class signOut extends Component{
  constructor(){
    super();
    this.state={
      show:false
    }
  }
  render(){
    return(
     <View>
       <Modal transparent={true} visible={this.state.show}>
         <View style={{backgroundColor:'#000000aa',flex:1}}>
           <View style={{backgroundColor:'#ffffff',marginBottom:425,marginTop:100,marginLeft:100,marginRight:100,paddingTop:25,borderRadius:10,flex:1}}>
              <Button title="Çıkış Yap"
              onPress={()=>this.setState({show:false}),firebase.auth().signOut().then(()=>Actions.auth())}
                      /> 
           </View>
         </View>
       </Modal>
     </View>
    )
  }
}
function DrawerNavigator(){
  return(
      <Drawer.Navigator initialRouteName="MenuTab" drawerContent={props=>CustomDrawerContent(props)}>
        <Drawer.Screen  name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="LogOut" component={signOut}/>
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


