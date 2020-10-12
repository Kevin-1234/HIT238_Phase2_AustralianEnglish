import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Button, Text } from 'native-base';
export default function Practice({navigation}) {
    
   
    const startPractice = () => {
        return (
            navigation.navigate('Practice Item List')
          );

    }
    return (
        <View style={styles.container}>
           
         <Text style={styles.slogan}>You have learned <Text style={styles.emphasize}>3</Text> slang words</Text>
          <Button large rounded style={styles.buttons} onPress={() => startPractice()}>
            <Text>Start practicing</Text>
          </Button>
  
      </View>
       

    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        alignItems: 'center',
        justifyContent: 'center',
      },
      slogan:{
        fontSize: 30,
        marginBottom: 70
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