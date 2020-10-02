import React from 'react';
import { StyleSheet,  FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import {globalStyles} from '../styles/global';
import TopicItem from '../components/topicItem';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';


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

  // const itemTitle = item.title;
  // const images = { 
  //   'At the resturant'  : require('../assets/images/attheresturant.jpg'),
  //   'Families'  : require('../assets/images/families.jpg'),
  //   'Holidays'  : require('../assets/images/holidays.jpg'),
  //   'In the kitchen'  : require('../assets/images/inthekitchen.jpg'),
  //   'Travelling'  : require('../assets/images/travelling.jpg'),
  //   'The weather'  : require('../assets/images/theweather.jpg'),
  // };
  // const image = images[itemTitle];
 
  return (
    // <ImageBackground source={require('../assets/images/phrases-bg.jpg')} style={styles.backgroundImage}>
    //   <View style={globalStyles.container}>
    //     {/* each item in 'data' is cycled through*/}
    //     <FlatList style={styles.list} data={topics} renderItem={({ item }) => (
    //       <TopicItem item={item}  pressHandler={pressHandler} />
    //     )} />
    //   </View>
    // </ImageBackground>

    <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={topics}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.title}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.description}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
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