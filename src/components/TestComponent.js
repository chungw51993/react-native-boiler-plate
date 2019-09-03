import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import TestContainer from '../containers/TestContainer';

const welcome = Platform.select({
  ios: 'Boiler Plate Successfully Created\nStart Programming!',
  android: 'Boiler Plate Successfully Created\nStart Programming!',
});

const styles = StyleSheet.create({
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  test: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class TestComponent extends Component {
  render() {
    const { test, actions } = this.props;
    const { testAction } = actions;
    return (
      <View>
        <Text style={styles.welcome}>{welcome}</Text>
        <Text style={styles.test}>{test.on}</Text>
        <Button title="Check Redux" onPress={() => testAction()} />
      </View>
    );
  }
}

export default TestContainer(TestComponent);
