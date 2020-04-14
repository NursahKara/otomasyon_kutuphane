import React, {Component} from 'react';
import {StyleSheet,Text,TouchableOpacity,View,FlatList,SafeAreaView} from 'react-native';
import CustomHeader from './CustomHeader';
import {connect} from 'react-redux';
import Book from './book';

class SelectedBook extends Component{
    renderItem({item}){
        return(
          <Book book={item}/>
        )
    }
    render(){
        const {books}=this.props
        return(
            <View>
                <SafeAreaView style={{ flex: 1}}>
                    <CustomHeader title="SelectBook" isHome={false} bg_white={true} navigation={this.props.navigation}/>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <FlatList
                    data={books}
                    renderItem={this.renderItem}
                    keyExtractor={(item)=>item.isbn}
                    />         
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}


const mapStateToProps=state=>{  //tek state ise boyle , birden fazla state olunca (state)
   return{
       books:state.books
   }
}
export default connect(mapStateToProps)(SelectedBook); //connect reduceri  birbirine baglamak icin