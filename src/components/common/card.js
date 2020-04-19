import React from 'react';
import {StyleSheet,View,Text,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width1, height1 } = Dimensions.get("screen");
const Card = (props) => {
    return(
        <View style = {styles.cardWrapper}>
            <View style={{alignItems:'flex-start',justifyContent:'center',flex:3,marginLeft:10}}>
                {props.children}
            </View>
            <View  style={{alignItems:'flex-end',marginRight:10,justifyContent:'center',flex:1}}>
            <Icon
                name='heart'
                color='gray'
                size={35}
                />  
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    cardWrapper:{
        height:60,
        marginTop:5,
        marginBottom:5,
        marginLeft:5,
        marginRight:5,
        borderWidth:0.2,
        borderColor:'gray',
        flexDirection:'row',
        flex:1
     
    
        
    }
});

export {Card}