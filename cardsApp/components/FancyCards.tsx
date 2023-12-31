/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingTitle}>Trending Places</Text>
      <View style={styles.card}>
        <Image
            style={styles.cardImage}
            source={{
                uri: "https://source.unsplash.com/random/?jaipur"
            }}
        />
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Jaipur, Pink City</Text>
            <Text style={styles.cardDate}>12 july, 2023</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo hic eveniet id sint veritatis incidunt neque, eaque molestiae ut ab.</Text>
            <Text style={styles.cardCategory}>Historical Place</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCards;

const styles = StyleSheet.create({
    headingTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#fff',
    textTransform: 'capitalize',
    },
    card:{
        flex: 1,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    cardImage:{
        height: 300,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardTitle:{
        color: '#2C3335',
        paddingBottom:6,
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardDescription:{
        color: '#4C4B4B',
        paddingBottom:6,
        fontSize: 15,
    },
    cardDate:{
        paddingBottom:6,
        fontSize: 12,
        color: '#616C6F',
    },
    cardCategory:{
        color: '#4C4B4B',
        paddingBottom:6,
    },
    cardContent:{
        padding: 10,
    },
});
