import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [randomColor, setRandomColor] = useState('#000000');
  const hexColorString = '1234567890ABCDEF';
  let color = '#';
  const generateColor = () => {
    for (let i = 0; i < 6; i++) {
      color += hexColorString[Math.floor(Math.random() * 16)];
    }
    setRandomColor(color);
  };
  return (
    <>
      <View style={[styles.mainContainer, {backgroundColor: randomColor}]}>
        <TouchableOpacity
          style={styles.bgButtonChanger}
          onPress={generateColor}>
          <Text style={styles.btnText}>Generate Color</Text>
          <Text style={styles.btnText}>{randomColor}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgButtonChanger: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    margin: 10,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  btnText: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default App;
