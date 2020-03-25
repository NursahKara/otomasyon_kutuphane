import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import opinions from './opinions';
import profile from './profile';
import barkode from './scan_barcode';
import settings from './settings';
import suggestions from './suggestions';
import BookList from '../components/bookList';
import Card from '../components/common/card';
import Header from '../components/common/header';


const Stack = createStackNavigator();
 
function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Header">
          <Stack.Screen name="opinions" component={opinions} />
          <Stack.Screen name="profile" component={profile} />
       
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default App;  
