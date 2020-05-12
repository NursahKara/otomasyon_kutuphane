import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, ScrollView, Dimensions, Keyboard } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Input, MyButton } from '../components/common';
import { connect } from 'react-redux';
import { Block, theme } from "galio-framework";
import { changeName, changeSurname, changeNick, changeGender, changeBirthday, sendInformationProfile } from '../actions';
import CustomHeader from './CustomHeader';
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-date-picker';
import CalendarPicker from 'react-native-calendar-picker';
import { Dropdown } from 'react-native-material-dropdown';
const { width, height } = Dimensions.get("screen");

class SignUpScreen extends React.Component {
  state = {
    date: new Date(),
  }
  onChange = date => this.setState({ date })
  onChangeName(name) {
    this.props.changeName(name);
  }
  changeSurname(surname) {
    this.props.changeSurname(surname);
  }
  changeNick(nick) {
    this.props.changeNick(nick);
  }
  changeBirthday(birthday) {
    this.props.changeBirthday(birthday);
  }
  changeGender(gender) {
    this.props.changeGender(gender);
  }
  sendInformationProfile() {
    const { name, surname, nick, gender, birthday } = this.props;
    this.props.sendInformationProfile(name, surname, nick, gender, birthday);
    Actions.checkbox();
  }
  render() {
    let data = [{
      value: 'Kadın',
    }, {
      value: 'Erkek',
    }];

    const { error, loading } = this.props;
    const errorMsg = error ? (
      <Text style={styles.errorStyle}>
        {error}
      </Text>
    ) : null;
    return (


      <View style={{ backgroundColor: '#7A617A', flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <TextInput
              style={styles.textInputStyle}
              placeholder='Ad'
              placeholderTextColor='black'
              underlineColorAndroid='transparent'
              onChangeText={this.onChangeName.bind(this)}
            />
            <TextInput
              style={styles.textInputStyle}
              placeholder='Soyad'
              placeholderTextColor='black'
              underlineColorAndroid='transparent'
              onChangeText={this.changeSurname.bind(this)}
              returnKeyType='done'
              onSubmitEditing={Keyboard.dismiss}
            />
            {/* <TextInput 
                    style={styles.textInputStyle} 
                    placeholder='Nick' 
                    placeholderTextColor='black' 
                    underlineColorAndroid='transparent'
                    onChangeText={this.changeNick.bind(this)}
                    /> */}
            <Dropdown
              label='Cinsiyet'
              data={data}
              onChangeText={this.changeGender.bind(this)}
              dropdownOffset={{ 'top': 3 }}
              pickerStyle={{ borderBottomColor: 'transparent', borderWidth: 0 }}
              containerStyle={styles.textInputStyle}
            />
            {/* <TextInput 
                    style={styles.textInputStyle} 
                    placeholder='Birthday' 
                    placeholderTextColor='black' 
                    underlineColorAndroid='transparent'
                    onChangeText={this.changeBirthday.bind(this)}
                    /> */}
            {/* 
            <DatePicker
              onChange={this.onChange}
              value={this.state.date}
              dateFormat="MMMM d, yyyy h:mm aa"
            /> */}

            {/* <View>
          <Text onChangeText={this.changeBirthday.bind(this)}>SELECTED DATE:{ startDate }</Text>
        </View> */}
            <View style={{ marginTop: '10%' }}>
              <MyButton spinner={loading}
                title='Kaydet'
                onPress={this.sendInformationProfile.bind(this)}
                color='#731873'
              />
            </View>

          </View>
        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    alignSelf: 'stretch',
    color: 'black',
    padding: 13,
    backgroundColor: 'white',
    borderTopColor: '#ededed',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 5,
    borderRadius: 5,
    fontSize: 16,
    opacity: 1

  },
  textStyle: {
    color: '#d8d8d8',
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    marginLeft: 13
  },

  dropdown: {
    width: '80%',
  },
  container: {
    justifyContent: 'center',
    height: height / 1.5,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
    borderRadius: 10,
    opacity: 0.7,
    margin: 15,
    marginTop: height / 8
  },
});

const mapStateToProps = state => {
  const { name, surname, nick, gender, birthday, loading, error } = state.profileInformation;
  return {
    name, surname, nick, gender, birthday, loading, error, sendInformationProfile
  }
}
export default connect(mapStateToProps, {
  changeName, changeSurname, changeNick, changeGender, changeBirthday, sendInformationProfile
})(SignUpScreen);

  //birthday, gender eklenecek.
  //profilde kitap önerisi çıkarabilmek için kitap türleri arasında seçim yapma sayfasına yönlendirilebilir.