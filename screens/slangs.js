import React, {useState}from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import {globalStyles} from '../styles/global';
import SlangItem from '../components/slangItem'
import rot13 from 'rot-13';
export default function Slangs({navigation}) {
 
   
 const slangs = [
    {
        title: "Mash",
        key: '1',
        definition: "Potatoes that have been boiled and crushed into a soft mass, often with butter and milk.",
        imageS: "../assets/images/sb_mash.png",
        imageL: "../assets/images/l_mash.png",
        audio: "../assets/audios/mash.mp3"
    },
    {
        title: "Dead Horse",
        key: '2',
        definition: "It means tomato sauce, which is any of a very large number of sauces made primarily from tomatoes.",
        imageS: "../assets/images/sb_deadhorse.png",
        imageL: "../assets/images/l_deadhorse.png",
        audio: "../assets/audios/deadhorse.mp3"
    },
    {
        title: "Banger",
        key: '3',
        definition: "Sausage",
        imageS: "../assets/images/sb_banger.png",
        imageL: "../assets/images/l_banger.png",
        audio: "../assets/audios/banger.mp3"
    },
    {
        title: "Avo",
        key: '4',
        definition: "A tropical fruit with hard, dark green skin, soft, light green flesh and a large seed inside.",
        imageS: "../assets/images/sb_avo.png",
        imageL: "../assets/images/l_avo.png",
        audio: "../assets/audios/avo.mp3"
    },
    {
        title: "Dog Eye",
        key: '5',
        definition: "Dog's eye is a pie with a filling of meat and/or other savory ingredients.",
        imageS: "../assets/images/sb_dogeye.png",
        imageL: "../assets/images/l_dogeye.png",
        audio: "../assets/audios/dogeye.mp3"
    },
    {
        title: "Flat White",
        key: '6',
        definition: "Coffee with milk or cream.",
        imageS: "../assets/images/sb_flatwhite.png",
        imageL: "../assets/images/l_flatwhite.png",
        audio: "../assets/audios/flatwhite.mp3"
    },

  ];   
  const pressHandler = (item) => {
    return (
      navigation.navigate('Detail', item)
    );
  }
  return (
    <View style={globalStyles.container}>
        {/* each item in 'data' is cycled through*/}
      <FlatList style={styles.list} numColumns={2} data={slangs} renderItem={({ item }) => (
          <SlangItem item={item} pressHandler={pressHandler} />
      )} />
    </View>
  );
}
const styles = StyleSheet.create({
 list:{

  marginTop: 20,
  flex: 1,
 }
});

