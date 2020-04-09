import * as React from 'react';
import _ from 'lodash';
import firebase from 'firebase';
import { View, Text,SafeAreaView,FlatList} from 'react-native';
import {connect} from 'react-redux';
import CustomHeader from './CustomHeader';
import {fetchCheckboxInformations} from '../actions';

 class FavoriteScreen extends React.Component{
    componentDidMount(){
        this.props.fetchCheckboxInformations();
    }
    
    renderItem({item}){
        function createTable() {
            let i
            for(i=0;i<item.checkbox.split(',').length;i++){
              (item.checkbox.split(',')[i]) 
            } 
            return item.checkbox.split(',')  
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
            <CustomHeader title="Favori" bg_white={true} navigation={this.props.navigation}/>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Favori</Text> 
            <FlatList data={checkboxListReducer}
                    renderItem={this.renderItem}
                    /> 
            </View>
          </SafeAreaView>
        );
    }
}


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
