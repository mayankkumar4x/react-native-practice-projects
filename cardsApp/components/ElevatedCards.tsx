/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingTitle}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>see</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>more</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>cards</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>cards</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>cards</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>cards</Text>
        </View>
    </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
    headingTitle:{
        fontSize: 20,
        color: '#fff',
        paddingHorizontal: 8,
        fontWeight: 'bold',
    },
    container:{
        padding: 8
    },
    card:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#cad5e2',
        borderRadius: 5,
        margin: 8,
    },
    elevatedCard:{},
});

export default ElevatedCards;
