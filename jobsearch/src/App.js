/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={styles.heading}>Job Search App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: 'green',
  },
});

export default App;
