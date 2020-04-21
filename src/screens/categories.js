import React, {Component} from 'react';
import { View, Text, Button ,SafeAreaView,StyleSheet,ScrollView,FlatList} from 'react-native';
import CustomHeader from './CustomHeader';
import * as actions from '../actions';
import {Provider,connect} from 'react-redux';


class Categories extends Component{
  
    render(){
        const { books } = this.props;
        const allCategories = [];
        books.forEach((book) => {
            book.categories.forEach((category) => {
                if (category != "")
                    allCategories.push(category);
            })
        });
        const distinctArray = [... new Set(allCategories.map(data => data))];  

        return (
            <ScrollView>
                <CustomHeader title="Kategoriler" bg_white={true} navigation={this.props.navigation} />
                <View >
                    <FlatList
                        data={distinctArray}
                        renderItem={({ item }) => <Text>{item}</Text>}
                    />
                </View>
            </ScrollView>
        )
    }
}
const styles=StyleSheet.create({
    titleStyle:{
        fontSize:16,
        color:'black'
    },
    authorStyle:{
        fontSize:12,
        color:'black'
    },
    descriptionStyles:{
        marginLeft:10,
        marginRight:10,
        fontSize:13,
        color:'black',
        textAlign:'justify'
    },
    cardStyle:{
        flex:3,
        flexDirection:"row",
        width:'30%'
    },
    cardWrapper:{
        height:'auto',
        marginTop:5,
        marginBottom:5,
        marginLeft:5,
        marginRight:5,
        borderWidth:0.2,
        borderColor:'gray',
        flexDirection:'row',
        flex:1
    },
    descriptionWrapper:{
        height:'auto',
        marginBottom:5,
        marginLeft:5,
        marginRight:5,
        borderLeftWidth:0.2,
        borderRightWidth:0.2,
        borderBottomWidth:0.2,
        borderColor:'gray',
        flexDirection:'row',
        flex:1
    },
    imageView: {
        width: 65,
        height: 65,
    },
})

const mapStateToProps = (state) => {
    return{
        books:state.books
    }
}

export default connect(mapStateToProps)(Categories);