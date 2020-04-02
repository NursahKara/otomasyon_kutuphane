import * as React from 'react';
import _ from 'lodash';
import firebase from 'firebase';
import { View, Text, Button, StyleSheet,SafeAreaView,TextInput,FlatList } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Input, MyButton} from '../components/common';
import {connect} from 'react-redux';
import {changeName, changeSurname,changeNick,sendInformationProfile} from '../actions';
import CustomHeader from './CustomHeader';
import {fetchProfileInformations} from '../actions';
import {Card} from '../components/common/card';

 class ProfileScreen extends React.Component{
    componentDidMount(){
        this.props.fetchProfileInformations();
    }
    renderItem({item}){
        return(
           <View>
                <Text style={styles.textStyle}>{item.email}</Text>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Text style={styles.textStyle}>{item.surname}</Text>
                <Text style={styles.textStyle}>{item.nick}</Text>
                <Text style={styles.textStyle}>{item.gender}</Text>
                <Text style={styles.textStyle}>{item.birthday}</Text>          
              </View>
        )
    }
    render(){
        const {profileInformationList}=this.props;
        return(
            <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title="Profile" isHome={true} bg_white={true} navigation={this.props.navigation}/>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
           <FlatList data={profileInformationList}
                    renderItem={this.renderItem}
                   // keyExtractor={(item)=>item.uid}
                    />

       
            </View>
          </SafeAreaView>
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
    // textStyle:{
    //     color:'#d8d8d8',
    //     fontSize:18,
    //     justifyContent:'center',
    //     alignItems:'center',
    //      marginTop:35,
    //      marginLeft:13
    // },
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
        width:'auto',
        borderColor:'#E5E5E8',
        borderBottomWidth:1,
        alignItems:'center',
        flexGrow:2,
        fontSize:17,
        paddingLeft:20
    },
  });

  const mapStateToProps=state=>{
    const currentUser=firebase.auth().currentUser;

    // const profileInformationList=_.map(state.profileInformationList,(val,uid)=>{
    //     return {...val,uid}
    // })
    const profileInformationList=_.filter(state.profileInformationList,val=>val.email===currentUser.email);
    return {
        profileInformationList
    }
}
export default connect(mapStateToProps,{
    fetchProfileInformations
})(ProfileScreen);
