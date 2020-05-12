import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, 
      ScrollView, FlatList, TouchableOpacity, TouchableHighlight,
      Dimensions } from 'react-native';
import CustomHeader from './CustomHeader';
import * as actions from '../actions';
import { Provider, connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Alert,
  Image,
  Platform,
} from 'react-native';
import { Block, theme } from "galio-framework";
import PropTypes from 'prop-types';
import { changeCheckbox, sendInformationCheckbox } from '../actions';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get("screen");

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
          alignItems: 'center'
        }}>
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
  onChangeCheckbox(checkbox) {
    this.props.changeCheckbox(checkbox);
  }
  sendInformationCheckbox() {
    var pickedElements = CheckedArrObject.fetchArray().map(res => res.label)
    const { checkbox } = this.props;
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
      <View style={{ backgroundColor: '#7A617A', flex: 1 }}>
        <ScrollView>
        <View style={styles.container}>
            <FlatList
              data={distinctArray}
              renderItem={({ item }) =>
                <View style={{ marginLeft: 20 }}>
                  <Checkbox size={30}
                    checked={false}
                    color="#731873"
                    labelColor="#000000"
                    label={item}
                    value={item}
                    checkedObjArr={CheckedArrObject} />
                </View>
              } />
            <TouchableHighlight style={styles.showSelectedButton} onPress={this.renderSelectedElements, this.sendInformationCheckbox.bind(this)}>
              <Text style={styles.buttonText}>Kaydet</Text>
            </TouchableHighlight>
            <Text style={{ fontSize: 22, color: "#000", marginTop: 25 }}> {this.state.pickedElements} </Text>
          </View>
        </ScrollView>
      </View>

    )
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
      marginTop: 5,
      //alignItems: 'center',
      justifyContent: 'center',
      paddingTop: (Platform.OS === 'ios') ? 25 : 0,
    },

    showSelectedButton: {
      padding: 15,
      marginTop: 25,
      alignSelf: 'stretch',
      backgroundColor: '#731873',
      marginLeft: 55,
      marginRight: 55,
      borderRadius: 5
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
      marginRight: 15
    },
    container: {
      justifyContent: 'center',
      backgroundColor: theme.COLORS.WHITE,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 8,
      shadowOpacity: 0.2,
      zIndex: 2,
      borderRadius: 10,
      opacity: 0.93,
      margin: 15,
    },
    textInputStyle: {
      alignSelf: 'stretch',
      color: 'black',
      padding: 13,
      backgroundColor: 'white',
      borderTopColor: '#ededed',
      marginRight: 20,
      marginLeft: 20,
      borderRadius: 5,
      fontSize: 16,
      opacity: 1
  
    },
  });

const mapStateToProps = state => {
  const { checkbox } = state.checkboxReducer;
  return {
    checkbox, sendInformationCheckbox, books: state.books
  }
}

export default connect(mapStateToProps, {
  changeCheckbox, sendInformationCheckbox
})(AppCheck);