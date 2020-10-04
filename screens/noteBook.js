import React from 'react';
import { StyleSheet, View, Text, Button, TouchableHighlight, ImageBackground } from 'react-native';
import {globalStyles} from '../styles/global';

export default function Notebook({navigation}) {
    const slangsButton = () => {   
        navigation.push('Slang Notes');
      }


    return (

        <View>
            <Button onPress={slangsButton} title="Slangs"/>
        </View>

    );

}