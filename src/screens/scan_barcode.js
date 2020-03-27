
import * as React from 'react';
import { View, Text, Button ,SafeAreaView} from 'react-native';
import CustomHeader from './CustomHeader';

export class ScanBarcodeScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title="Scan Barcode" navigation={navigation}/>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Scan Barcode!</Text>  
            </View>
          </SafeAreaView>
        );
    }
}
