import  React, {Component} from 'react';
import {  View } from 'react-native';
import {Button,Text,Container,Header,Left,Body,Right,Icon,Title} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

class CustomHeader extends Component{
    render(){
        return(
        
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Right>
                </Header>
           
        )
    }
}
class HomeScreen extends Component {
    render(){
        return (
            <View style={{ flex: 1}}>
                <CustomHeader/>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Home!</Text>
              <Button light onPress={()=>this.props.navigation.navigate('ProfileScreen')}>
                  <Text>Go to profile</Text>
              </Button>
                </View>
              
            </View>
          );
    }

}
class ProfileScreen extends Component {
    render(){
        return (
            <View style={{ flex: 1}}>
                <CustomHeader/>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Profile!</Text>
                </View>
            </View>
          );
    }
   
  }

class SettingsScreen extends Component {
    render(){
        return (
            <View style={{ flex: 1}}>
            <CustomHeader/>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Settings!</Text>
          <Button light>
              <Text>Go to opinions</Text>
          </Button>
            </View>
        </View>
          );
    }
  
}

class OpinionsScreen extends Component {
    render(){
        return (
            <View style={{ flex: 1}}>
                <CustomHeader/>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>opinions!</Text>
                </View>
            </View>
          );
    }
   
  }

  const ProfileStack =createStackNavigator(); 
  const ProfileStackScreen =({navigation})=>(
    <ProfileStackScreen.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <ProfileStackScreen.Screen name='Profile' component={ProfileScreen} options={{
            title:'Profile',
            headerLeft:()=>(
                <Icon.Button name={'bars'} size={25} backgroundColor='black' onPress={()=>{
                    navigation.openDrawer()
                }}></Icon.Button>
            )
        }}/>
    </ProfileStackScreen.Navigator>
);
const HomeStack =createStackNavigator(); 
const HomeStackScreen =({navigation})=>(
  <HomeStackScreen.Navigator screenOptions={{
      headerStyle:{
          backgroundColor:'#009387',
      },
      
      headerTintColor:'#fff',
      headerTitleStyle:{
          fontWeight:'bold'
      }
  }}>
      <HomeStackScreen.Screen name='Home' component={HomeScreen} options={{
          title:'Home',
          headerLeft:()=>(
              <Icon.Button name={'bars'} size={25} backgroundColor='black' onPress={()=>{
                  navigation.openDrawer()
              }}></Icon.Button>
          )
      }}/>
  </HomeStackScreen.Navigator>
);
const SettingsStack =createStackNavigator(); 
const SettingsStackScreen =({navigation})=>(
  <SettingsStackScreen.Navigator screenOptions={{
      headerStyle:{
          backgroundColor:'#009387',
      },
      
      headerTintColor:'#fff',
      headerTitleStyle:{
          fontWeight:'bold'
      }
  }}>
      <SettingsStackScreen.Screen name='Settings' component={SettingsScreen} options={{
          title:'Settings',
          headerLeft:()=>(
              <Icon.Button name={'bars'} size={25} backgroundColor='black' onPress={()=>{
                  navigation.openDrawer()
              }}></Icon.Button>
          )
      }}/>
  </SettingsStackScreen.Navigator>
);
const OpinionsStack =createStackNavigator(); 
const OpinionsStackScreen =({navigation})=>(
  <OpinionsStackScreen.Navigator screenOptions={{
      headerStyle:{
          backgroundColor:'#009387',
      },
      
      headerTintColor:'#fff',
      headerTitleStyle:{
          fontWeight:'bold'
      }
  }}>
      <OpinionsStackScreen.Screen name='Opinions' component={OpinionsScreen} options={{
          title:'Opinions',
          headerLeft:()=>(
              <Icon.Button name={'bars'} size={25} backgroundColor='black' onPress={()=>{
                  navigation.openDrawer()
              }}></Icon.Button>
          )
      }}/>
  </OpinionsStackScreen.Navigator>
);



 
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
        <Tab.Screen name="Opinions" component={OpinionsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}