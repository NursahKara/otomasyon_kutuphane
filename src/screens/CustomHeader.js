import React,{Component} from 'react';
import {Text,View,SafeAreaView,Image,TouchableOpacity,ScrollView} from 'react-native';

export default class CustomHeader extends Component{
    render(){
        return(
          <View style={{flexDirection:'row',height:50}}>
      <View style={{flex:1,justifyContent:'center'}}>
      {
        this.props.isHome? 
        <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
              <Image style={{width:30,height:30,marginLeft:10}}
                source={require('../../assest/images/menu.png')}
                resizeMode="contain"
              />
        </TouchableOpacity>
        :
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
                          onPress={()=>this.props.navigation.goBack()}
        >
        <Image style={{width:20,height:20,marginLeft:10}}
                source={require('../../assest/images/backFat.png')}
                resizeMode="contain"
        />
          <Text>Back</Text>
        </TouchableOpacity>
      }
     
      </View>
      <View style={{flex:1,justifyContent:'center'}}>
      {
            this.props.bg_white?
            <Text style={{textAlign:'center'}}>
            {this.props.title}
            </Text>
            :
            <Text style={{textAlign:'center', color:'white'}}>
            {this.props.title}
            </Text>
        }
       
      </View>
      <View style={{flex:1}}></View>
    </View>
        )
    }
}