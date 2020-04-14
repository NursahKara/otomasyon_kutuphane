import React, {Component} from 'react';
import {StyleSheet,Text,TouchableOpacity,View,FlatList} from 'react-native';
import CustomHeader from './CustomHeader';

export default class SelectedBook extends Component{
    render(){
        return(
            <View>
                <SafeAreaView style={{ flex: 1}}>
                    <CustomHeader title="SelectBook" isHome={false} bg_white={true} navigation={this.props.navigation}/>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text>Selected Book</Text>           
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}