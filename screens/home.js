import React , {useState}from 'react';
import { TextInput, StyleSheet, View, Text, Button, TouchableHighlight, ImageBackground } from 'react-native';
import {globalStyles} from '../styles/global';
import rot13 from 'rot-13';
export default function Home({navigation}) {

  
const slangsButton = () => {
    //navigation.navigate('Slangs');
    navigation.push('Slangs');
  }

const phrasesButton = () => {
    //navigation.navigate('Slangs');
    navigation.push('Phrases');
  }

const topicsButton = () => {
    //navigation.navigate('Slangs');
    navigation.push('Topics');
  }
  


 

  return (
    <ImageBackground source={require('../assets/images/homebackground.jpg')} style={styles.bgImage}>

      
      
      
    <View style={globalStyles.container}>
    <TouchableHighlight activeOpacity={0.6}
    underlayColor="#778899" style={styles.sectionButtons}  onPress={slangsButton}>
    
        <Text style={styles.buttonTitles} >Slangs</Text>
      
    </TouchableHighlight> 
    <TouchableHighlight activeOpacity={0.6}
    underlayColor="#778899" style={styles.sectionButtons}  onPress={phrasesButton}>
      <Text style={styles.buttonTitles} >Phrases</Text>
     </TouchableHighlight> 
     <TouchableHighlight activeOpacity={0.6}
    underlayColor="#778899" style={styles.sectionButtons}  onPress={topicsButton}>
      <Text style={styles.buttonTitles} >Topics</Text>
     </TouchableHighlight>
      
      
      </View>
      
      
      
      
      
    </ImageBackground>
    
  );
}



const styles = StyleSheet.create({
  sectionButtons: {
    marginTop: '12%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    
    height: 150,
    borderRadius: 8,
    alignItems:'center',
    justifyContent: 'center',
    
  },
  buttonTitles: {
  
    color: '#f0f8ff',
    fontSize: 32,
  },
  bgImage: {
    width:'100%',
    height: '100%',


  }
});