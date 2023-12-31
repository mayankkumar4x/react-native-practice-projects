/* eslint-disable prettier/prettier */

import { StyleSheet, Text, View, Image, Linking, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

const ActionCard = () => {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };

  return (
    <View>
      <Text style={styles.headingTitle}>Blog Posts</Text>
      <ScrollView horizontal={true}>
        <View style={styles.card}>
          <Image
              style={styles.cardImage}
              source={{
                  uri: 'https://source.unsplash.com/random/?blockchain',
              }}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            <Text style={styles.cardDate}>12 july, 2023</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo hic eveniet id sint veritatis incidunt neque, eaque molestiae ut ab.</Text>
            <TouchableOpacity style={styles.button} onPress={() => openWebsite('https://google.com')}>
              <Text style={styles.buttonText}>Read more</Text>
            </TouchableOpacity>
          </View>
        </View>
      <View style={styles.card}>
        <Image
            style={styles.cardImage}
            source={{
                uri: 'https://source.unsplash.com/random/technology',
            }}
        />
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            <Text style={styles.cardDate}>12 july, 2023</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo hic eveniet id sint veritatis incidunt neque, eaque molestiae ut ab.</Text>
            <TouchableOpacity style={styles.button} onPress={() => openWebsite('https://google.com')}>
              <Text style={styles.buttonText}>Read more</Text>
            </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Image
            style={styles.cardImage}
            source={{
                uri: 'https://source.unsplash.com/random/?mobiles, apps',
            }}
        />
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            <Text style={styles.cardDate}>12 july, 2023</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo hic eveniet id sint veritatis incidunt neque, eaque molestiae ut ab.</Text>
            <TouchableOpacity style={styles.button} onPress={() => openWebsite('https://google.com')}>
              <Text style={styles.buttonText}>Read more</Text>
            </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Image
            style={styles.cardImage}
            source={{
                uri: 'https://source.unsplash.com/random/?hacking',
            }}
        />
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            <Text style={styles.cardDate}>12 july, 2023</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo hic eveniet id sint veritatis incidunt neque, eaque molestiae ut ab.</Text>
            <TouchableOpacity style={styles.button} onPress={() => openWebsite('https://google.com')}>
              <Text style={styles.buttonText}>Read more</Text>
            </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default ActionCard;


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
        width: 350,
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
    cardContent:{
        padding: 10,
    },

    button:{
      padding: 10,
      backgroundColor: '#E74292',
      alignItems: 'center',
      width: 110,
      borderRadius: 10,
    },
    buttonText:{
      color: '#fff',
      textTransform: 'uppercase',
    },
});
