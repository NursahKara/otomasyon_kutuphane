
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class opinions extends React.Component{
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>opinions Screen</Text>
            <Button title='Go to Details' onPress={()=>this.props.navigation.navigate('profile')}></Button>
          </View>
        );
    }
}
export default opinions;