import  React,{Component} from 'react';
import { View, Text, Button ,SafeAreaView,TouchableOpacity,ScrollView,StyleSheet,ImageBackground,Dimensions} from 'react-native';
import CustomHeader from './CustomHeader';
import BookList from '../components/bookList';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers';
import { Block, theme } from "galio-framework";
const { width, height } = Dimensions.get("screen");

export default class RecentReleases extends Component{
    render(){
        return(
            <Block flex style={{backgroundColor:'#c0c0c0'}}>
            <ImageBackground
                source={require('../../assest/themes/baloncuklu.jpg')}
                style={styles.ImageContainer}
                >
            <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title="En Son Eklenenler" isHome={false} bg_white={true} navigation={this.props.navigation}/>
            <Provider store={createStore(reducers)}>
                <ScrollView>
                <BookList/>
                </ScrollView>
              </Provider> 
          
          </SafeAreaView>
          </ImageBackground>
          </Block>
        );
    }
}
const styles=StyleSheet.create({
    textStyle:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: 'transparent',
      fontSize:20
    },
    textContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20
    },
    ImageContainer: {
        flex:1,
         padding: 0,
         zIndex: 1,
       },
 
})
  

