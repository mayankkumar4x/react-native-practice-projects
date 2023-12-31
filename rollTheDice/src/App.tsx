import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
const App = () => {
  const [diceImage, setDiceImage] = useState(DiceOne);

  const diceRoll = () => {
    const number = Math.floor(Math.random() * 6) + 1;
    switch (number) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
    }
    ReactNativeHapticFeedback.trigger('clockTick', options);
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <Image source={diceImage} style={styles.diceImageStyle} />
        <TouchableOpacity style={styles.rollDiceBtn} onPress={diceRoll}>
          <Text style={styles.rollDiceBtnText}>Roll Dice</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rollDiceBtn: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f3f3f3',
    borderRadius: 6,
  },
  rollDiceBtnText: {
    color: '#003566',
    fontWeight: '500',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  textStyle: {
    color: 'green',
  },
  diceImageStyle: {
    height: 200,
    width: 200,
  },
});

export default App;
