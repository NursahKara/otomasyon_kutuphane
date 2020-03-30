import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux';
import {fetchProfileInformations} from '../actions';

class Profile_Informations extends Component{
componentDidMount(){
    this.props.fetchProfileInformations();
}

    render(){
        return(
            <View></View>
        )
    }
}
const mapStateToProps=state=>{
    console.log(state);
    return {

    }
}
export default connect(mapStateToProps,{
    fetchProfileInformations
})(Profile_Informations);