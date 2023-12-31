/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FlatCards = () => {
  return (
    <View>
        <Text style={styles.headingTitle}>Flat Cards</Text>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
              <Text>Green</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
              <Text>Blue</Text>
          </View>
          <View style={[styles.card, styles.cardFour]}>
              <Text>Pink</Text>
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  headingTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#fff',
    textTransform: 'capitalize',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 5,
  },
  cardOne: {
    backgroundColor: '#ef5354',
  },
  cardTwo: {
    backgroundColor: '#50dbb4',
  },
  cardThree: {
    backgroundColor: '#5da3fa',
  },
   cardFour: {
    backgroundColor: '#eda2ea',
  },
});

export default FlatCards;
