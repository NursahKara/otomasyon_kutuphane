
import  React, {Component} from 'react';
import { View, Text, Button ,SafeAreaView,TouchableOpacity} from 'react-native';
import CustomHeader from './CustomHeader';

export class OpinionsScreen extends Component{
    render(){
        return(
            <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title="Opinions" navigation={navigation}/>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Opinions!</Text>  
            </View>
          </SafeAreaView>
        );
    }
}
  