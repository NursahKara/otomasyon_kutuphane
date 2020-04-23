import * as React from 'react';
import _ from 'lodash';
import firebase from 'firebase';
import { View, Text,SafeAreaView,FlatList,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import CustomHeader from './CustomHeader';
import {fetchCheckboxInformations} from '../actions';
import { ScrollView } from 'react-native-gesture-handler';

 class FavoriteScreen extends React.Component{
    componentDidMount(){
        this.props.fetchCheckboxInformations();
    }
    renderItem({item}){
        function createTable() {
            var arr = item.checkbox;
            arr = arr.replace(",","\n");
            console.log(arr);
            return arr;    
        }
        return(
                <View>
                <Text> {createTable()}</Text>
                </View> 
        )
    }
    render(){
        const {checkboxListReducer}=this.props;
        return(
            <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title="Favorilerin" bg_white={true} navigation={this.props.navigation}/>
            <View style={{height:170}}>
            <View style={{margin:20,borderBottomWidth:0.3}}>
            <Text style={styles.textDesign}>Favori Kategorilerin</Text>
            </View>
            <View style={{flex:1,justifyContent:'center',marginLeft:20,alignItems:'center'}}>
                <ScrollView  horizontal={true} >
                    <View style={styles.cardDesign}>
                        <FlatList data={checkboxListReducer}
                                renderItem={this.renderItem}
                                
                                /> 
                    </View>
                    <View style={styles.cardDesign}>
                        <Text>Deneme1</Text>
                    </View>
                    <View style={styles.cardDesign}>
                        <Text>Deneme2</Text>
                    </View>
                
                    <View style={styles.cardDesign}>
                        <Text>Deneme3</Text>
                    </View>
                    <View style={styles.cardDesign}>
                        <Text>Deneme4</Text>
                    </View>
                </ScrollView>
            </View>
            </View>
            <View style={{height:170}}>
            <View style={{margin:20,borderBottomWidth:0.3}}>
            <Text style={styles.textDesign}>Favori Kitapların</Text>
            </View>
            <View style={{flex:1,justifyContent:'center',marginLeft:20}}>
                <ScrollView  horizontal={true} >
                    <View style={styles.cardDesign}>
                        <FlatList data={checkboxListReducer}
                                renderItem={this.renderItem}
                                
                                /> 
                    </View>
                    <View style={styles.cardDesign}>
                        <Text>Deneme1</Text>
                    </View>
                    <View style={styles.cardDesign}>
                        <Text>Deneme2</Text>
                    </View>
                
                    <View style={styles.cardDesign}>
                        <Text>Deneme3</Text>
                    </View>
                    <View style={styles.cardDesign}>
                        <Text>Deneme4</Text>
                    </View>
                </ScrollView>
            </View>
            </View>
          </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
    textDesign:{
        fontSize:16
    },
    cardDesign:{
        margin:3,
        borderWidth:0.2,
        borderColor:'gray',
        height:80,
        justifyContent:'center',
        alignItems:'center',
        padding:7,
        borderRadius:5,
        shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.11,
          shadowRadius: 15,
          elevation: 1,
          backgroundColor:'#F0F0F0'
    }
})
const mapStateToProps=state=>{
    const currentUser=firebase.auth().currentUser;

    // const checkboxListReducer=_.map(state.checkboxListReducer,(val,uid)=>{
    //     return {...val,uid}
    // })
     const checkboxListReducer=_.filter(state.checkboxListReducer,val=>val.email===currentUser.email)
   
    return {
        checkboxListReducer
    }
}
export default connect(mapStateToProps,{
    fetchCheckboxInformations
})(FavoriteScreen);
