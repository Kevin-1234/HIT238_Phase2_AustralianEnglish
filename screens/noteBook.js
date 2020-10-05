import React from 'react';
import { StyleSheet, View, Text, Button, TouchableHighlight, ImageBackground,TouchableOpacity, Image } from 'react-native';
import {globalStyles} from '../styles/global';

export default function Notebook({navigation}) {
    const slangsButton = () => {   
        navigation.push('Slang Notes');
      }
    const phrasesButton = () => {   
        navigation.push('Phrase Notes');
    }
    const topicsButton = () => {   
        navigation.push('Topic Notes');
    }  


    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={slangsButton}>
                <ImageBackground  source={require('../assets/images/notebookbutton.jpg')} style={styles.buttons} imageStyle={ styles.backgroundImage}>
                    <Text style={styles.cardTitle}>Slang Notes</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={phrasesButton}>
                <ImageBackground source={require('../assets/images/notebookbutton.jpg')} style={styles.buttons} imageStyle={ styles.backgroundImage}>
                <Text style={styles.cardTitle}>Phrase Notes</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={topicsButton}>
                <ImageBackground source={require('../assets/images/notebookbutton.jpg')} style={styles.buttons} imageStyle={ styles.backgroundImage}>
                <Text style={styles.cardTitle}>Topic Notes</Text>
                </ImageBackground>
            </TouchableOpacity>       
        </View>

    );

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: '15%',
        flexDirection: 'row',
        justifyContent: 'flex-start', 
        flexWrap:'wrap',
    },
    buttons:{
        marginTop: '15%',
        marginLeft: '23%',  
        height: 150,
        width: 110,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',   
        flexDirection: 'row'
     
    },
    cardTitle:{
        fontSize: 26,
        marginTop:'26%',
        marginLeft: '18%',
        
        color: '#f0f8ff'

    }
   

   });