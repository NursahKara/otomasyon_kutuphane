
import * as React from 'react';
import { View, Text, Button ,SafeAreaView,TouchableOpacity} from 'react-native';
import CustomHeader from './CustomHeader';

export default class SettingsScreen extends React.Component{
    render(){
        return(
          <SafeAreaView style={{ flex: 1}}>
          <CustomHeader title="Settings" isHome={true} navigation={this.props.navigation}/>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text>Settings!</Text>  
          <TouchableOpacity style={{marginTop:20}} onPress={()=>this.props.navigation.navigate('ScanBarcode')}>
            <Text>Go Settings Detail</Text>
          </TouchableOpacity>
          </View>
          
        </SafeAreaView>
        );
    }
}
