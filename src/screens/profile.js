import * as React from 'react';
import _ from 'lodash';
import firebase from 'firebase';
import { View, Text, Button, StyleSheet,SafeAreaView,TextInput,FlatList,Dimensions,ImageBackground ,Image} from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Input, MyButton} from '../components/common';
import {connect} from 'react-redux';
import CustomHeader from './CustomHeader';
import {fetchProfileInformations} from '../actions';
import {fetchCheckboxInformations} from '../actions';
import {Card} from '../components/common/card';
import { Block, theme } from "galio-framework";
import { Right } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


 class ProfileScreen extends React.Component{
 
    componentDidMount(){
        this.props.fetchProfileInformations();
       
    }
    renderItem({item}){
        return(
                // <View>
                // <Text style={styles.textStyle}>{(item.checkbox !== undefined)?item.checkbox.split(',')[0]:''}</Text>  
                // </View>
                <View>
                    <View style={styles.welcomeText}>
                    <Text style={{fontWeight:'bold',fontSize:18}}>Merhaba {item.name}, Hoş Geldin!</Text>
                    </View>
                   <View>
                    <Text>Bilgilerin:</Text>
                    <Text style={styles.textStyle}>Email: {item.email}</Text>
                    <Text style={styles.textStyle}>Ad: {item.name}</Text>
                    <Text style={styles.textStyle}>Soyad: {item.surname}</Text>
                     <Text style={styles.textStyle}>Nick: {item.nick} </Text> 
                    {/* <Text style={styles.textStyle}>{item.gender}</Text> */}
                    {/* <Text style={styles.textStyle}>{item.birthday}</Text>   */}
                   
                    </View>
                </View>   
        )
    }
    render(){
        const {profileInformationList}=this.props;
        return(
            <Block flex>
            <ImageBackground
                source={require('../../assest/themes/mermer-beyaz.jpg')}
                style={styles.ImageContainer}

                >
            <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title="Profile" isHome={true} bg_white={true} navigation={this.props.navigation}/>
            <View style={{flex:1,justifyContent:'center',alignItems:'center' ,marginTop:'20%'}}>
           <FlatList data={profileInformationList}
                    renderItem={this.renderItem}
                    />
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Favori')}style={{justifyContent:'center',alignItems:'center'}} >
                        <Icon name="star"  size={50} color="#FFC400"/>
                        <Text>Favorilerim</Text>
                        </TouchableOpacity>
                        <Text style={{justifyContent:'flex-end',marginTop:40}}>Not: Nickini Kullanarak Yarışmalara Katılabilirsin:)</Text>
                    </View>
                   

       
            </View>
          </SafeAreaView>
          </ImageBackground>
            </Block>
        );
    }
}

const styles=StyleSheet.create({
    textInputStyle:{
        alignSelf:'stretch',
        color:'black',
        padding:13,
        backgroundColor:'#d8d8d8',
        borderTopColor:'#ededed',
        margin: 20,
        borderRadius:5,
        fontSize:16,
        height:70
    },
welcomeText:{
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    flexDirection:'row',
    marginBottom:25
},
    container:{
        flexDirection:'row'
    },
    textStyle:{
        alignSelf:'stretch',
        color:'black',
        padding:13,
        borderRadius:5,
        fontSize:16,
        flexDirection:'row',
        height:50,
        
        borderColor:'#E5E5E8',
        // borderBottomWidth:1,
        alignItems:'center',
        flexGrow:2,
        fontSize:17,
        paddingLeft:20,

    },
    ImageContainer: {
      flex:1,
       padding: 0,
       zIndex: 1,
       opacity:0.7
     },
     buttonWrapper:{
      marginTop:5,
      marginBottom:5,
      height:49,
      justifyContent:'center',
      fontSize: 18,
      marginLeft:'auto',
    
      alignItems:'flex-end',
      marginRight:20,
      borderRadius:10000,
      backgroundColor:'transparent',
      shadowColor:'black',
      
    
   }
  });


  const mapStateToProps=state=>{
    const currentUser=firebase.auth().currentUser;

    // const profileInformationList=_.map(state.profileInformationList,(val,uid)=>{
    //     return {...val,uid}
    // })
    // const checkboxReducer=_.filter(state.checkboxReducer,val=>val.email===currentUser.email&&val===checkbox)
    const profileInformationList=_.filter(state.profileInformationList,val=>val.email===currentUser.email);
    return {
        profileInformationList
    }
}
export default connect(mapStateToProps,{
    fetchProfileInformations
})(ProfileScreen);
