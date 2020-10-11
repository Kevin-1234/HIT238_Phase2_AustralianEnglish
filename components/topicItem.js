import React from 'react'
import { StyleSheet, TouchableHighlight, Image,ImageBackground} from 'react-native';
import {  ListItem } from 'react-native-elements';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';
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
    
  // <Card containerStyle={styles.card}>
  //   <Card.Title style={styles.itemTitle}>{item.title}</Card.Title>
  //   <Card.Divider/>
  //   <Card.Image source={image} style={styles.cardImage} >
  //   </Card.Image >
  //   <Text style={styles.des}>{item.description}</Text>
  //   <Button onPress={() => pressHandler(item)}
  //    title='Start'/>
  // </Card>

  <Card style={{ elevation: 2, marginTop: 100 }}>
    <CardItem>
      
        
        <Body>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </Body>
          
        
      
    </CardItem>
    <TouchableHighlight activeOpacity={0.5}
  underlayColor="#696969"   
  onPress={() => pressHandler(item)}>
    <CardItem cardBody>
      <Image style={{ height: 300, flex: 1 }} source={item.image} />
    </CardItem>
    </TouchableHighlight>
    <CardItem>
      <Text>{item.description}</Text>
    </CardItem>
    <CardItem>
              <Left>
                <Button textStyle={{color: '#87838B'}} onPress={() => pressHandler(item)}>
                  <Icon name="play" />
                  <Text>Start Learning</Text>
                </Button>
              </Left>
            </CardItem>
  </Card>

    

  );
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
    fontFamily: 'Roboto-bold',
    color: '#000000',
    fontSize: 28, 
    alignSelf: 'center', 
  },

  bgImage: {
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',   
  },

  des: {
    fontFamily: 'Roboto-medium',
    marginTop: 10,
    marginBottom: 10
  },
  item: {
    borderEndWidth: 0 ,


  }
});