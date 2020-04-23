import React, { Component } from 'react';
import{StyleSheet,Text,View,TextInput} from 'react-native';

class SearchBox extends Component{
    render(){
        const{textInputStyle}=styles;
        return(
            <View style={styles.container}>
               
                <TextInput style={styles.textInputStyle} placeholder='Ara...' placeholderTextColor='black' underlineColorAndroid='transparent'></TextInput>
            </View>
        )
    }
}
const styles=StyleSheet.create({
   textInputStyle:{
       alignSelf:'stretch',
       color:'black',
       padding:13,
       backgroundColor:'#d8d8d8',
       borderTopColor:'#ededed',
       marginRight: 20,
       marginLeft:20,
       marginTop:5,
       borderRadius:5,
       fontSize:16,
       flex:2
   },
   textStyle:{
       color:'#d8d8d8',
       fontSize:18,
       justifyContent:'center',
       alignItems:'center',
        marginTop:35,
        marginLeft:13
   },
   container:{
       flexDirection:'row'
   }
});
export default SearchBox;
