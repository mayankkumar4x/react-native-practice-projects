import React from 'react';
import {Text, StyleSheet, useColorScheme, View} from 'react-native';

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Text style={colorScheme === 'dark' ? styles.whiteText : styles.darkText}>
        Hello I am Rohit
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkText: {
    color: 'dark', // Adjust the color as needed for dark mode
  },
  whiteText: {color: 'white', backgroundColor: 'black'},
});

export default App;
