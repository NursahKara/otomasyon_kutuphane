import  React,{Component} from 'react';
import { View, Text, Button ,SafeAreaView,TouchableOpacity,ScrollView,StyleSheet} from 'react-native';
import CustomHeader from './CustomHeader';
import BookList from '../components/bookList';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers';
export default class MostRead extends Component{
    render(){
        return(
            <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title="En Çok Okunanlar" isHome={false} bg_white={true} navigation={this.props.navigation}/>
          {/* <View style={styles.textContainer}>
          <Text style={styles.textStyle}>En Çok Okunanlar!</Text>
          </View>
           */}
            <Provider store={createStore(reducers)}>
                <ScrollView>
                <BookList/>
                </ScrollView>
              </Provider> 
          
          </SafeAreaView>
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
    }
   
 
})
  

