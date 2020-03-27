import  React,{Component} from 'react';
import { Text, View ,SafeAreaView,Image,TouchableOpacity,ScrollView,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
// import {CustomHeader,CustomDrawerContent} from './screens';
// import {HomeScreen} from './screens/home';
// import {SuggestionsScreen} from './screens/suggestions';
// import {OpinionsScreen} from './screens/opinions';
// import {SettingsScreen} from './screens/settings';
// import {ScanBarcodeScreen} from './screens/scan_barcode';
// import {ProfileScreen} from './screens/profile';

function CustomHeader({title ,isHome,navigation}){
  return(
    <View style={{flexDirection:'row',height:50}}>
      <View style={{flex:1,justifyContent:'center'}}>
      {
        isHome? 
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
              <Image style={{width:30,height:30,marginLeft:10}}
                source={require('../assest/images/menu.png')}
                resizeMode="contain"
              />
        </TouchableOpacity>
         
        :
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
                          onPress={()=>navigation.goBack()}
        >
          <Image style={{width:20,height:20,marginLeft:10}}
                 source={require('../assest/images/backFat.png')}
                 resizeMode="contain"
          />
          <Text>Back</Text>
        </TouchableOpacity>
      }
      </View>
     
      <View style={{flex:1,justifyContent:'center'}}>
        <Text style={{textAlign:'center'}}>{title}</Text>
      </View>
      <View style={{flex:1}}></View>
    </View>
  )
}

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Home" isHome={true} navigation={navigation}/>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home!</Text>  
      <TouchableOpacity style={{marginTop:20}} onPress={()=> navigation.navigate('Opinions')}>
        <Text>Go To Opinions</Text>
      </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}
function OpinionsScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Opinions" navigation={navigation}/>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Opinions!</Text>  
      </View>
    </SafeAreaView>
  );
}

function SettingsScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Settings" isHome={true} navigation={navigation}/>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Settings!</Text>  
      <TouchableOpacity style={{marginTop:20}} onPress={()=> navigation.navigate('ScanBarcode')}>
        <Text>Go Settings Detail</Text>
      </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}
function ScanBarcodeScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Scan Barcode" navigation={navigation}/>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Scan Barcode!</Text>  
      </View>
    </SafeAreaView>
  );
}
function SuggestionsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1}}>
    <CustomHeader title="Suggestions" navigation={navigation}/>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text>Suggestions!</Text>  
    </View>
  </SafeAreaView>
  );
}


function CustomDrawerContent(props){
  return(
    <SafeAreaView style={{flex:1}}>
      <View style={{height:150,alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../assest/images/user.png')}
               style={{height:120,width:120,borderRadius:60}}
        />
      </View>
      <ScrollView style={{marginLeft:5}}>
      <TouchableOpacity style={{marginTop:20}} onPress={()=>props.navigation.navigate('MenuTab')}>
        <Text>Menu Tab</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:20}} onPress={()=>props.navigation.navigate('Suggestions')}>
        <Text>Suggestions</Text>
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
 </Tab.Navigator>
  )
}
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return(
      <Drawer.Navigator initialRouteName="MenuTab" drawerContent={props=>CustomDrawerContent(props)}>
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Suggestions" component={SuggestionsScreen} />
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