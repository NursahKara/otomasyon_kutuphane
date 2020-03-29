import  React,{Component} from 'react';
import { Text, View ,SafeAreaView,Image,TouchableOpacity,ScrollView,Button} from 'react-native';

export default class CustomDrawerContent extends Component{
    render(){
        return(
          <SafeAreaView style={{flex:1}}>
          <View style={{height:150,alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../../assest/images/user.png')}
                   style={{height:120,width:120,borderRadius:60}}
            />
          </View>
          <ScrollView style={{marginLeft:5}}>
          <TouchableOpacity style={{marginTop:20}} onPress={()=>props.navigation.navigate('MenuTab')}>
            <Text>Menu Tab</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:20}} onPress={()=>props.navigation.navigate('Profile')}>
            <Text>Profile</Text>
          </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
        )
    }
}