import  React,{Component} from 'react';
import { View, Text, Button ,SafeAreaView,TouchableOpacity,ScrollView,StyleSheet} from 'react-native';
import CustomHeader from './CustomHeader';
import BookList from '../components/bookList';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers';
export default class SuggestionsScreen extends Component{
    render(){
        return(
            <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title="Önerilerimiz" isHome={false} bg_white={true} navigation={this.props.navigation}/>
          {/* <View style={styles.textContainer}>
          <Text style={styles.textStyle}>İşte Senin İçin Öneriler!</Text>
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
  
