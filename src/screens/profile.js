import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export class ProfileScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
          
            {/* <Button title='Go to Details' onPress={()=>this.props.navigation.navigate('Details')}></Button> */}
          </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#313131'
    }
})
