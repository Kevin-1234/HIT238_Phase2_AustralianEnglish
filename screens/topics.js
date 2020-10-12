import React from 'react';
import { StyleSheet} from 'react-native';

import TopicItem from '../components/topicItem';
import { Container, DeckSwiper, Text} from 'native-base';
console.disableYellowBox = true;


export default function Home({navigation}) {
  // the data set of topics
  const topics = [
    {

      title: "At the resturant",
      key: '1',
      description: "We are going to talk about food and that is why we have come to a restaurant.....",
      videoUrl: "../assets/videos/attheresturant.mp4",
      image : require('../assets/images/attheresturant.jpg')
    },
    {
      title: "Families",
      key: '2',
      description: "We are going to talk about families, our partners, our children, our siblings and parents.....",
      videoUrl: "../assets/videos/families.mp4",
      image : require('../assets/images/families.jpg')
    },
    {
      title: "Holidays",
      key: '3',
      description: "To know more about Holidays!!! Go ahead to find out.....",
      videoUrl: "../assets/videos/holidays.mp4",
      image : require('../assets/images/holidays.jpg')
    },

    {
      title: "In the kitchen",
      key: '4',
      description: "Vocabulary for food and cooking can get technical, so, familiarise yourself with some commonly used words.....",
      videoUrl: "../assets/videos/inthekitchen.mp4",
      image : require('../assets/images/inthekitchen.jpg')
    },
    {
      title: "Travelling",
      key: '5',
      description: "I have been bitten by the travel bug, so, i am going to go the beach for a holiday.....",
      videoUrl: "../assets/videos/travelling.mp4",
      image : require('../assets/images/travelling.jpg')
    },
    {
      title: "The weather",
      key: '6',
      description: "Have you checkd the forecast today? let's talk about the temperature.....",
      videoUrl: "../assets/videos/theweather.mp4",
      image : require('../assets/images/theweather.jpg')
    }
  ]

  // pass item to 'detail' screen and navigate to it
  const pressHandler = (item) => {
    return (
      navigation.navigate('Detail', item)
    );
  }

  

  return (
    

    <Container>
        
        

        <DeckSwiper
            
            dataSource={topics}
            renderItem={item => (

              <TopicItem item={item} pressHandler={pressHandler} />
            )}
              
            
          />

              
<Text style={{position: "absolute", bottom: 80, alignSelf: 'center', fontSize:20, fontWeight: '600', color: '#b22222'}}>Swipe the card left or right to switch the topic</Text>

        
      </Container>
  );
}

const styles = StyleSheet.create({
  

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