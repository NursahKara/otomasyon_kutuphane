import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Opinions extends Component {
    static navigationOptions={
        drawerLabel:'Görüşler',
        drawerIcon:({tintColor})=>(
            <Icon name='comment'  size={24} />
        )
    }
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Opinions </Text>
        <Button onPress={()=> this.props.navigation.goBack()}
                title="Go back home"/>
                <Button style={styles.drawerbuttonstyle} onPress={()=> this.props.navigation.navigate('DrawerOpen')}
                title="DrawerOpen"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
  drawerbuttonstyle:{
    backgroundColor:'#e8e8e8',
    },
    iconstyle:{
        paddingLeft:8,
        paddingRight:70
        
    }
});