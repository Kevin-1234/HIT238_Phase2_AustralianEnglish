import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import {globalStyles} from '../styles/global';
import TopicItem from '../components/topicItem';

export default function Home({navigation}) {
  const topics = [
    {
      
      title: "At the resturant",
      key: '1',
      videoUrl: "../assets/videos/attheresturant.mp4",
    },
    {
      title: "Families",
      key: '2',
      videoUrl: "../assets/videos/families.mp4",
    },
    {
      title: "Holidays",
      key: '3',
      videoUrl: "../assets/videos/holidays.mp4",
    },

    {
      title: "In the kitchen",
      key: '4',
      videoUrl: "../assets/videos/inthekitchen.mp4",
    },
    {
      title: "Travelling",
      key: '5',
      videoUrl: "../assets/videos/travelling.mp4",
    },
    {
      title: "The weather",
      key: '6',
      videoUrl: "../assets/videos/theweather.mp4",
    }
  ]
 

  const pressHandler = (item) => {
     

    return (
      navigation.navigate('Detail', item)
    );
  }

 
  return (
    
    
    <ImageBackground source={require('../assets/images/phrases-bg.jpg')} style={styles.backgroundImage}>
      
    <View style={globalStyles.container}>
    {/* each item in 'data' is cycled through*/}
  <FlatList style={styles.list} data={topics} renderItem={({ item }) => (
    
      <TopicItem item={item}  pressHandler={pressHandler} />
    
  )} />
</View>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  list:{

    marginTop: 20,
    flex: 1,
   },
   backgroundImage:{  
    width:'100%',
    height: '100%',
    
    borderRadius: 6
  },
});