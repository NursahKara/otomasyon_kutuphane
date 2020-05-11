
import React ,{Component} from 'react';
import { View, Text, Button,StyleSheet,SafeAreaView ,TouchableOpacity,ScrollView ,Dimensions,ImageBackground } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchBox from '../components/common/searchBox';
import BookList from '../components/bookList';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers';
import CustomHeader from './CustomHeader';
import { Block, theme } from "galio-framework";
import { Actions } from 'react-native-router-flux';
  

const { width, height } = Dimensions.get("screen");

export default class HomeScreen extends Component{
 
    render(){
        return(
          <Block flex style={{backgroundColor:'#c0c0c0'}}>
            <ImageBackground
                source={require('../../assest/themes/baloncuklu.jpg')}
                style={styles.ImageContainer}
                >
            <SafeAreaView style={{ flex: 1}}>
              <CustomHeader title="Ana Sayfa" isHome={true} bg_white={true} navigation={this.props.navigation}/>
              {/* <View style={{marginTop:7}}>
               <SearchBox/> 
              </View> */}
              
              <View style={{height:50}}>
                <ScrollView horizontal={true}>
                  <TouchableOpacity style={styles.textStyle}  onPress={()=>Actions.category()} >
                    <Text>Kategoriler</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.textStyle}  onPress={()=>this.props.navigation.navigate('RecentReleases')}>   
                    <Text>Son Çıkanlar</Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity style={styles.textStyle}  onPress={()=>this.props.navigation.navigate('MostRead')}>
                    <Text>En Çok Okunanlar</Text>
                  </TouchableOpacity> */}
                  <TouchableOpacity style={styles.textStyle}  onPress={()=>this.props.navigation.navigate('TopRated')}>
                    <Text>En Çok Beğenilenler</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
              <Provider store={createStore(reducers)}>
                <ScrollView>
                <BookList isFavoriteBook={true}/>
                </ScrollView>
              </Provider>
            </SafeAreaView>
            </ImageBackground>
          </Block>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1,
    },
    textStyle:{
      paddingLeft:13,
      padding:20,
      alignItems:'center',
      backgroundColor: 'transparent',
      
    },
    ImageContainer: {
      flex:1,
       padding: 0,
       zIndex: 1,
     },
 
})
  