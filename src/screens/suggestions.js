import  React,{Component} from 'react';
import { View, Text, Button ,SafeAreaView,TouchableOpacity} from 'react-native';
import CustomHeader from './CustomHeader';

export class SuggestionsScreen extends Component{
    render(){
        return(
            <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title="Suggestions" isHome={true} navigation={navigation}/>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Suggestions!</Text> 
            </View>
          </SafeAreaView>
        );
    }
}
