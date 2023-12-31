/* eslint-disable prettier/prettier */
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ContactList = () => {
    const contacts = [
       {
            uid: 1,
            name: 'rohit sharma',
            savedOn: 'sim',
            imageUrl: 'https://source.unsplash.com/random/?user/50x50'
       },
       {
            uid: 2,
            name: 'Payal Singh',
            savedOn: 'phone',
            imageUrl: 'https://source.unsplash.com/random/?user/50x50'
       },
       {
            uid: 3,
            name: 'Aman Kumar',
            savedOn: 'phone',
            imageUrl: 'https://source.unsplash.com/random/?user/50x50'
       },
       {
            uid: 4,
            name: 'Shailesh Shukla',
            savedOn: 'sim',
            imageUrl: 'https://source.unsplash.com/random/?user/50x50'
       },
       {
            uid: 5,
            name: 'Abhishek',
            savedOn: 'sim',
            imageUrl: 'https://source.unsplash.com/random/?user/50x50'
       }
    ]
  return (
    <View>
      <Text style={styles.headingTitle}>Contact List</Text>
      <ScrollView scrollEnabled={false} style={styles.container}>
        {contacts.map(({uid, name, savedOn, imageUrl})=>(
            <View key={uid} style={styles.contactCard}>
                <Image source={{
                    uri: imageUrl,
                }}
                style={styles.userImage}
                />
                <View>
                    <Text style={styles.contactName}>{name}</Text>
                    <Text style={styles.contactSavedOn}>{savedOn}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default ContactList;

const styles = StyleSheet.create({
    headingTitle:{
        fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#fff',
    textTransform: 'capitalize',
    },
    container: {
        paddingHorizontal: 16,
    },
    contactCard:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
         gap:8,
         marginBottom: 8 
    },
    userImage:{
        width: 60,
        height: 60,
        borderRadius: 50
    },
    contactName:{
        color: '#fff',
        fontWeight: '600',
        textTransform: 'capitalize'
    },
    contactSavedOn:{},
});
