import React, {Component} from 'react';
import { View, Text, Button ,SafeAreaView,StyleSheet,ScrollView,FlatList,TouchableOpacity} from 'react-native';
import CustomHeader from './CustomHeader';
import * as actions from '../actions';
import {Provider,connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';


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
                        renderItem={({ item }) => 
                        <TouchableOpacity style={styles.container}>
                            <View style={{alignItems: 'flex-start',flex: 5}}>
                                <Text style={styles.titleStyle}>{item}</Text>
                            </View>
                            <View style={{alignItems: 'flex-end',flex: 1}}>
                                <Icon
                                        name='chevron-right'
                                        color='black'
                                        size={15}
                                    />
                            </View>
                        </TouchableOpacity>
                    }/>
                </View>
            </ScrollView>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        height:30,
        marginTop:10,
        marginBottom:5,
        marginLeft:20,
        marginRight:20, 
        borderBottomWidth:0.2,
        borderColor:'gray',
        flexDirection:'row',
        flex:1,
        paddingLeft:10,
        alignItems:'center'
    },
    titleStyle:{
        fontSize:16,
        color:'black',
        justifyContent:'center',
        alignItems:'center'
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