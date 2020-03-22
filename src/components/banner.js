import React, {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';

class Banner extends Component{
    render(){
        return(
            <View style={styles.bannerContainer}>
            <Image
                style={styles.bannerImage}
                source={require('../../image/kutuphanefoto.jpg')}
            />
            </View>
        )
    }
}

const styles=StyleSheet.create({
bannerContainer:{
width:'auto',
height:'55%',
flex:4,
margin:0,
alignItems:'center'
},
bannerText:{
fontSize: 34,
color: '#fff'
},
bannerImage:{
width:'100%',
height:'55%'
}
});
export default Banner;