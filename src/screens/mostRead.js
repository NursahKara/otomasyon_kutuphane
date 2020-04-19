
import * as React from 'react';
import { View, Text, Button ,SafeAreaView} from 'react-native';
import CustomHeader from './CustomHeader';

export default class MostRead extends React.Component{
    render(){
        return(
            <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title="En Çok Okunanlar" bg_white={true} navigation={this.props.navigation}/>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>En Çok Okunanlar</Text>  
            </View>
          </SafeAreaView>
        );
    }
}
