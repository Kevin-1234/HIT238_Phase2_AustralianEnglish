import React from 'react';
import { StyleSheet, View, Text, Button, TouchableHighlight, ImageBackground } from 'react-native';
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

        <View>
            <Button onPress={slangsButton} title="Slang Notes"/>
            <Button onPress={phrasesButton} title="Phrase Notes"/>
            <Button onPress={topicsButton} title="Topic Notes"/>
        </View>

    );

}