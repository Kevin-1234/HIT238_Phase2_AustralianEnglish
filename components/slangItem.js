import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View, Image,ImageBackground} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function SlangItem({item, pressHandler}) {


  const itemTitle = item.title;
  const images = { 
    'Mash'  : require('../assets/images/sb_mash.png'),
    'Avo'  : require('../assets/images/sb_avo.png'),
    'Dog Eye'  : require('../assets/images/sb_dogeye.png'),
    'Dead Horse'  : require('../assets/images/sb_deadhorse.png'),
    'Flat White'  : require('../assets/images/sb_flatwhite.png'),
    'Banger'  : require('../assets/images/sb_banger.png'),
  };
  const image = images[itemTitle];

   
 
  
  return (
    
    <TouchableOpacity style={styles.item} onPress={() => pressHandler(item)}>
    <ImageBackground source={image} style={styles.backgroundImageSize} imageStyle={ styles.backgroundImage}>
      <View style={styles.itemText}>    
        <Text style={styles.itemTitle}>{item.title}</Text>
           
      </View>
      </ImageBackground>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 12,
    marginHorizontal: 15,
    backgroundColor: 'linear-gradient(rgba(0,0,0,1), rgba(0,0,0,1))',
    opacity: 1,
    borderRadius: 6
  },

 
  backgroundImageSize:{

    height: 150,
    width: 150,

  },
  backgroundImage:{  
    opacity: 0.5,
    borderRadius: 6
  },
  itemText: {
    alignSelf:'center',
    marginTop: '40%'
  },
  itemTitle: {
    color: '#f0f8ff',
    fontSize: 24,
    marginLeft: 10,
  }
});