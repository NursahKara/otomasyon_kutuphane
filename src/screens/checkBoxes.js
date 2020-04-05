import React, { Component } from 'react';
import { 
  Alert, 
  Image, 
  Platform, 
  StyleSheet, 
  Text, 
  TouchableHighlight, 
  View ,
  ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import {changeCheckbox,sendInformationCheckbox} from '../actions';
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';


class SelectedCheckboxes {
  constructor() {
    selectedCheckboxes = [];
  }

  addItem(option) {
    selectedCheckboxes.push(option);
  }

  fetchArray() {
    return selectedCheckboxes;
  }

}

class Checkbox extends Component {

  constructor() {
    super();
    this.state = { 
      checked: null 
    }
  }



  componentDidMount() {
    if (this.props.checked) {
      this.setState({ checked: true }, () => {
        this.props.checkedObjArr.addItem({
          'key': this.props.keyValue,
          'value': this.props.value,
          'label': this.props.label
        });
        // this.onChangeCheckbox.bind(this)
      });
    } else {
      this.setState({ 
        checked: false
      });
    }
  }
 
  stateSwitcher(key, label, value) {
    this.setState({ checked: !this.state.checked }, () => {
      if (this.state.checked) {
        this.props.checkedObjArr.addItem({ 
          'key': key,
          'value': value,
          'label': label
        });
  
      } else {
        this.props.checkedObjArr.fetchArray().splice(
          this.props.checkedObjArr.fetchArray().findIndex(y => y.key == key), 1
        );
      }
    });
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.stateSwitcher.bind(this, this.props.keyValue, this.props.label, this.props.value)} 
        underlayColor="transparent"
        style={{ marginVertical: 20 }}>

        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center' }}>
            <View style={{
              padding: 4, 
              width: this.props.size, 
              height: this.props.size, 
              backgroundColor: this.props.color
            }}>
              {
                (this.state.checked)
                  ?
                  (<View style={styles.selectedUI}>
                    <Image source={require('../../assest/images/check-black.png')} style={styles.checkboxTickImg} />
                  </View>)
                  :
                  (<View style={styles.uncheckedCheckbox} />)
              }
          </View>
          <Text style={[styles.checkboxLabel, { color: this.props.labelColor }]}>
            {this.props.label}
          </Text>
        </View>

      </TouchableHighlight>
    );
  }
}
 class AppCheck extends Component {
  
    onChangeCheckbox(checkbox){
        this.props.changeCheckbox(checkbox);
    }  
    sendInformationCheckbox(){
        var pickedElements =  CheckedArrObject.fetchArray().map(res => res.label).join()
        const {checkbox}=this.props;
        this.props.sendInformationCheckbox(pickedElements);
          Actions.main();
        
    }
    constructor() {
        super();
        CheckedArrObject = new SelectedCheckboxes();
        this.state = { pickedElements: '' }
    }
    
  renderSelectedElements = () => {
    if (CheckedArrObject.fetchArray().length == 0) {
      Alert.alert('No Item Selected');
    } else {
      this.setState(() => {
        this.sendInformationCheckbox.bind(this);
        return { 
          pickedElements: CheckedArrObject.fetchArray().map(res => res.value).join()
        }
      });
    }
  }

  render() {
    return (
    <ScrollView > 
      <View style={styles.CheckboxContainer}>
        {/* <View style={{margin:5,flexDirection:'row'}}> */}
            <Checkbox size={30}
            keyValue={1}
            checked={false}
            color="#E81E63"
            labelColor="#000000"
            label="Anı"
            value="ani" 
            checkedObjArr={CheckedArrObject}
            onClick={this.onChangeCheckbox.bind(this)}/>

            <Checkbox size={30}
            keyValue={2}
            checked={false}
            color="#3F50B5"
            labelColor="#000000"
            label="Anlatı"
            value="anlati" 
            checkedObjArr={CheckedArrObject} />
        {/* </View>
        <View style={{flexDirection:'row',margin:5}}> */}
            <Checkbox size={30}
            keyValue={3}
            checked={false}
            color="#009688"
            labelColor="#000000"
            label="Araştırma-İnceleme"
            value="arastirma_inceleme" 
            checkedObjArr={CheckedArrObject} />

            <Checkbox size={30}
            keyValue={4}
            checked={false}
            color="#FF9800"
            labelColor="#000000"
            label="Bilim"
            value="bilim"
            checkedObjArr={CheckedArrObject} />        
        {/* </View>
        <View style={{flexDirection:'row',margin:5}}> */}
            <Checkbox size={30}
            keyValue={5}
            checked={false}
            color="#E81E63"
            labelColor="#000000"
            label="Biyografi"
            value="biyografi"
            checkedObjArr={CheckedArrObject} />

            <Checkbox size={30}
            keyValue={6}
            checked={false}
            color="#3F50B5"
            labelColor="#000000"
            label="Deneme"
            value="deneme"
            checkedObjArr={CheckedArrObject} />        
        {/* </View>
        <View style={{flexDirection:'row',margin:5}}> */}
            <Checkbox size={30}
            keyValue={7}
            checked={false}
            color="#009688"
            labelColor="#000000"
            label="Edebiyat"
            value="edebiyat"
            checkedObjArr={CheckedArrObject} />

            <Checkbox size={30}
            keyValue={8}
            checked={false}
            color="#FF9800"
            labelColor="#000000"
            label="Eğitim"
            value="egitim"
            checkedObjArr={CheckedArrObject} />        
        {/* </View>
        <View style={{flexDirection:'row',margin:5}}> */}
            <Checkbox size={30}
            keyValue={9}
            checked={false}
            color="#E81E63"
            labelColor="#000000"
            label="Felsefe"
            value="felsefe"
            checkedObjArr={CheckedArrObject} />

            <Checkbox size={30}
            keyValue={10}
            checked={false}
            color="#3F50B5"
            labelColor="#000000"
            label="Gençlik"
            value="genclik"
            checkedObjArr={CheckedArrObject} />        
        {/* </View>
        <View style={{flexDirection:'row',margin:5}}> */}
            <Checkbox size={30}
            keyValue={11}
            checked={false}
            color="#009688"
            labelColor="#000000"
            label="Gezi"
            value="gezi"
            checkedObjArr={CheckedArrObject} />

            <Checkbox size={30}
            keyValue={12}
            checked={false}
            color="#FF9800"
            labelColor="#000000"
            label="Hikaye"
            value="hikaye"
            checkedObjArr={CheckedArrObject} />        
        {/* </View>
        <View style={{flexDirection:'row',margin:5}}> */}
            <Checkbox size={30}
            keyValue={13}
            checked={false}
            color="#E81E63"
            labelColor="#000000"
            label="İnceleme"
            value="inceleme"
            checkedObjArr={CheckedArrObject} />

            <Checkbox size={30}
            keyValue={14}
            checked={false}
            color="#3F50B5"
            labelColor="#000000"
            label="İş Ekonomik-Hukuk"
            value="is_ekonomik_hukuk"
            checkedObjArr={CheckedArrObject} />        
        {/* </View>
        <View style={{flexDirection:'row',margin:5}}> */}
            <Checkbox size={30}
            keyValue={15}
            checked={false}
            color="#009688"
            labelColor="#000000"
            label="Kişisel Gelişim"
            value="kisisel_gelisim"
            checkedObjArr={CheckedArrObject} />

            <Checkbox size={30}
            keyValue={16}
            checked={false}
            color="#FF9800"
            labelColor="#000000"
            label="Konuşmalar"
            value="konusmalar"
            checkedObjArr={CheckedArrObject} />        
        {/* </View>
        <View style={{flexDirection:'row',margin:5}}> */}
            <Checkbox size={30}
            keyValue={17}
            checked={false}
            color="#E81E63"
            labelColor="#000000"
            label="Masal"
            value="masal"
            checkedObjArr={CheckedArrObject} />

            <Checkbox size={30}
            keyValue={18}
            checked={false}
            color="#3F50B5"
            labelColor="#000000"
            label="Mektup"
            value="mektup"
            checkedObjArr={CheckedArrObject} />        
        {/* </View>
        <View style={{flexDirection:'row',margin:5}}> */}
            <Checkbox size={30}
            keyValue={19}
            checked={false}
            color="#009688"
            labelColor="#000000"
            label="Mizah"
            value="mizah"
            checkedObjArr={CheckedArrObject} />

            <Checkbox size={30}
            keyValue={20}
            checked={false}
            color="#FF9800"
            labelColor="#000000"
            label="Öykü"
            value="oyku"
            checkedObjArr={CheckedArrObject} />        
        {/* </View>
        <View style={{flexDirection:'row',margin:5}}> */}
            <Checkbox size={30}
            keyValue={21}
            checked={false}
            color="#E81E63"
            labelColor="#000000"
            label="Psikoloji"
            value="psikoloji"
            checkedObjArr={CheckedArrObject} />

            <Checkbox size={30}
            keyValue={22}
            checked={false}
            color="#3F50B5"
            labelColor="#000000"
            label="Resimli Öykü"
            value="resimli_oyku"
            checkedObjArr={CheckedArrObject} />        
        {/* </View>
        <View style={{flexDirection:'row',margin:5}}> */}
            <Checkbox size={30}
            keyValue={23}
            checked={false}
            color="#009688"
            labelColor="#000000"
            label="Roman"
            value="roman"
            checkedObjArr={CheckedArrObject} />

            <Checkbox size={30}
            keyValue={24}
            checked={false}
            color="#FF9800"
            labelColor="#000000"
            label="Sağlık"
            value="saglik"
            checkedObjArr={CheckedArrObject} />        
        {/* </View>
        <View style={{flexDirection:'row',margin:5}}> */}
            <Checkbox size={30}
            keyValue={25}
            checked={false}
            color="#E81E63"
            labelColor="#000000"
            label="Sanat-Tasarım"
            value="sanat_tasarim"
            checkedObjArr={CheckedArrObject} />

            <Checkbox size={30}
            keyValue={26}
            checked={false}
            color="#3F50B5"
            labelColor="#000000"
            label="Sanat-Müzik"
            value="sanat_muzik"
            checkedObjArr={CheckedArrObject} />        
        {/* </View>
        <View style={{flexDirection:'row',margin:5}}> */}
            <Checkbox size={30}
            keyValue={27}
            checked={false}
            color="#009688"
            labelColor="#000000"
            label="Sinema Tarihi"
            value="sinema_tarihi"
            checkedObjArr={CheckedArrObject} />

            <Checkbox size={30}
            keyValue={28}
            checked={false}
            color="#FF9800"
            labelColor="#000000"
            label="Şiir"
            value="siir"
            checkedObjArr={CheckedArrObject} />        
        {/* </View>
        <View style={{flexDirection:'row',margin:5}}> */}
            <Checkbox size={30}
            keyValue={29}
            checked={false}
            color="#E81E63"
            labelColor="#000000"
            label="Tarih"
            value="tarih"
            checkedObjArr={CheckedArrObject} />

            <Checkbox size={30}
            keyValue={30}
            checked={false}
            color="#3F50B5"
            labelColor="#000000"
            label="Yemek Kitapları"
            value="yemek_kitaplari"
            checkedObjArr={CheckedArrObject}
             />        
        {/* </View> */}
        <TouchableHighlight style={styles.showSelectedButton} onPress={this.renderSelectedElements, this.sendInformationCheckbox.bind(this)}>
          <Text style={styles.buttonText}>Checked Items</Text>
        </TouchableHighlight>
        <Text style={{ fontSize: 22, color: "#000", marginTop: 25 }}> {this.state.pickedElements} </Text>
      </View>
      </ScrollView>
    );
  }
}
 
Checkbox.propTypes = {
    keyValue: PropTypes.number.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    labelColor: PropTypes.string,
    checkedObjArr: PropTypes.object.isRequired
}

Checkbox.defaultProps = {
    size: 32,
    checked: false,
    value: 'Default',
    label: 'Default',
    color: '#cecece',
    labelColor: '000000',    
}

const styles = StyleSheet.create(
  {
    CheckboxContainer: {
      flex: 1,
      padding: 22,
      marginTop:5,
     //alignItems: 'center',
      justifyContent: 'center',
      paddingTop: (Platform.OS === 'ios') ? 25 : 0,
    },

    showSelectedButton: {
      padding: 20,
      marginTop: 25,
      alignSelf: 'stretch',
      backgroundColor: '#5D52FF',
    },

    buttonText: {
      fontSize: 20,
      color: '#ffffff',
      textAlign: 'center',
      alignSelf: 'stretch'
    },

    selectedUI: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    checkboxTickImg: {
      width: '85%',
      height: '85%',
      tintColor: '#ffffff',
      resizeMode: 'contain'
    },

    uncheckedCheckbox: {
      flex: 1,
      backgroundColor: '#ffffff'
    },

    checkboxLabel: {
      fontSize: 18,
      paddingLeft: 15,
      marginRight:15
    }
});

const mapStateToProps=state=>{
    const {checkbox} =state.checkboxReducer;
    return{
     checkbox,sendInformationCheckbox
    }
}
export default connect(mapStateToProps,{
  changeCheckbox,sendInformationCheckbox
})(AppCheck);