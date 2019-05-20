import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Test extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text> Hey {this.props.name} ! </Text>
      </View>
    );
  }
}

export default class Main extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 400}}>
      <Test name='lel'></Test>
      <Test name='lol'></Test>
      <Test name='lal'></Test>
      </View>
    )
  }
}