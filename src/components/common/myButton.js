import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {Spinner} from './spinner';
const MyButton =({spinner, title, color, onPress}) => {
    const content=spinner ?(
                <Spinner/>
    ): (
                   <Button onPress={onPress} 
                            color={color} 
                            title={title}/>
    )
    return(
        <View style={styles.buttonWrapper}>
            {content}
        </View>
    )
}
const styles=StyleSheet.create({
    buttonWrapper:{
        marginTop:5,
        marginBottom:5,
        height:49,
        justifyContent:'center',
        fontSize: 18,
        marginRight:'auto',
        marginLeft:'auto',
        width:'40%'

    }
})
export {MyButton}