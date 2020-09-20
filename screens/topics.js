import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import {globalStyles} from '../styles/global';
import TopicItem from '../components/topicItem';

export default function Home({navigation}) {
  // the data set of topics
  const topics = [
    {
      
      title: "At the resturant",
      key: '1',
      description: "We are going to talk about food and that is why we have come to a restaurant.....",
      videoUrl: "../assets/videos/attheresturant.mp4",
    },
    {
      title: "Families",
      key: '2',
      description: "We are going to talk about families, our partners, our children, our siblings and parents.....",
      videoUrl: "../assets/videos/families.mp4",
    },
    {
      title: "Holidays",
      key: '3',
      description: "To know more about Holidays!!! Go ahead to find out.....",
      videoUrl: "../assets/videos/holidays.mp4",
    },

    {
      title: "In the kitchen",
      key: '4',
      description: "Vocabulary for food and cooking can get technical, so, familiarise yourself with some commonly used words.....",
      videoUrl: "../assets/videos/inthekitchen.mp4",
    },
    {
      title: "Travelling",
      key: '5',
      description: "I have been bitten by the travel bug, so, i am going to go the beach for a holiday.....",
      videoUrl: "../assets/videos/travelling.mp4",
    },
    {
      title: "The weather",
      key: '6',
      description: "Have you checkd the forecast today? let's talk about the temperature.....",
      videoUrl: "../assets/videos/theweather.mp4",
    }
  ]
 
  // pass item to 'detail' screen and navigate to it 
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