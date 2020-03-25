import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

const Card = (props) => {
    return(
        <View style = {styles.cardWrapper}>
            {props.children}  
        </View>
    )
}

const styles=StyleSheet.create({
    cardWrapper:{
        height:50,
        marginTop:5,
        marginBottom:5,
        marginLeft:13,
        marginRight:13,
        borderWidth:1,
        borderRadius:30,
        borderColor:'gray',
        alignItems:'center',
        justifyContent:'center',
    }
});

export {Card}