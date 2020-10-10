import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import {globalStyles} from '../styles/global';
import { Container, Header, Content, Button, Text } from 'native-base';
import { color } from 'react-native-reanimated';
export default function Practice({navigation}) {
    const [slangList, setSlangList] = useState(  );
   
    const startPractice = () => {
        return (
            navigation.navigate('Practice Item List')
          );

    }
    return (
        <View style={styles.container}>
           
         <Text style={styles.slogan}>You have learned <Text style={styles.emphasize}>8</Text> slang words</Text>
          <Button large rounded style={styles.buttons} onPress={() => startPractice()}>
            <Text>Start practicing</Text>
          </Button>
  
      </View>
       

    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      slogan:{
        fontSize: 20,
        marginBottom: 30
      },
      emphasize:{
        fontSize: 52,
        color: 'blue'
      },
    buttons:{
        marginBottom: '25%',
        alignSelf: 'center'
     
    },
    
   });