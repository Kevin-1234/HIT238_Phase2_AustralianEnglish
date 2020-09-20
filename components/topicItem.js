import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Image,ImageBackground} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

// receive the an 'item' and a function that fires when each item is pressed from the parent file
export default function TopicItem({item, pressHandler}) {

  const itemTitle = item.title;
  const images = { 
    'At the resturant'  : require('../assets/images/attheresturant.jpg'),
    'Families'  : require('../assets/images/families.jpg'),
    'Holidays'  : require('../assets/images/holidays.jpg'),
    'In the kitchen'  : require('../assets/images/inthekitchen.jpg'),
    'Travelling'  : require('../assets/images/travelling.jpg'),
    'The weather'  : require('../assets/images/theweather.jpg'),
  };
  const image = images[itemTitle];
  
  return (

  <Card containerStyle={styles.card}>
    <Card.Title style={styles.itemTitle}>{item.title}</Card.Title>
    <Card.Divider/>
    <Card.Image source={image} style={styles.cardImage} >
    </Card.Image >
    <Text style={styles.des}>{item.description}</Text>
    <Button onPress={() => pressHandler(item)}
     title='Start'/>
  </Card>
                  
  )
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
    marginVertical: 12,
    marginHorizontal: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 1,
    borderRadius: 8
  },

  cardImage: {
    width: '100%',
    height:200
  },

  itemTitle: { 
    color: '#000000',
    fontSize: 24,  
  },

  bgImage: {
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',   
  },

  des: {
    marginTop: 10,
    marginBottom: 10
  }
});