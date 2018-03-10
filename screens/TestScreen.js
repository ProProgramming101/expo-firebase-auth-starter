import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { TestComponent } from './../components/AppComponents';
import * as firebase from 'firebase';

export default class TestScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onSignoutPress = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
      <View style={{paddingTop:20}}>
        <Text>Hello</Text>
        <TestComponent />

        <Button title="Signout" onPress={this.onSignoutPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
