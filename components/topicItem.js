import React from 'react'
import { StyleSheet, TouchableHighlight, Image,ImageBackground} from 'react-native';
import {  Card, CardItem, Text, Body, Icon, Button } from 'native-base';
// receive the an 'item' and a function that fires when each item is pressed from the parent file
export default function TopicItem({item, pressHandler}) {

 

  
  return (
    
 

  <Card style={{ elevation: 2, marginTop: 100, width: '90%', alignSelf:'center',borderRadius: 8, backgroundColor: '#dcdcdc'}}>
    <CardItem style={{backgroundColor: '#dcdcdc', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
      
        
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
    <CardItem style={{backgroundColor: '#dcdcdc'}}>
      <Text>{item.description}</Text>
    </CardItem>
    <CardItem style={{backgroundColor: '#dcdcdc', borderBottomLeftRadius: 8, borderBottomRightRadius: 8, alignSelf: 'center'}}>
              
                <Button textStyle={{color: '#87838B', alignSelf: 'center'}} onPress={() => pressHandler(item)}>
                  <Icon name="play" />
                  <Text>Start Learning</Text>
                </Button>
              
            </CardItem>
  </Card>

    

  );
}

const styles = StyleSheet.create({
 
  cardImage: {
    width: '100%',
    height:200
  },

  itemTitle: { 
    fontFamily: 'Roboto-bold',
    color: '#000000',
    fontSize: 38, 
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