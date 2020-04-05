// In App.js in a new project

import  React,{Component} from 'react';
import { View, Text ,ScrollView,StyleSheet,Button,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './deneme';


class App extends Component{
 
render(){
  return(
    <View style={{height:100}}>
<ScrollView horizontal={true} >
  <TouchableOpacity style={styles.textStyle} >
    <Text>Kategoriler</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.textStyle}>   
     <Text>Son Çıkanlar</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.textStyle}>
    <Text>En Çok Okunanlar</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.textStyle}>
    <Text>En Çok Beğenilenler</Text>
    </TouchableOpacity>

 
</ScrollView>
</View>
  )
}
}
const styles=StyleSheet.create({
  container:{
      width:'auto',
      height:100,
      
      
  },
  textStyle:{
    margin:20,
    padding:20,
    alignItems:'center',
    borderColor:'black',
    borderWidth:2
  }
})
export default App;