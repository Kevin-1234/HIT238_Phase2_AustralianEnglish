import React, {useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, Button, TouchableHighlight, ImageBackground } from 'react-native';
import {globalStyles} from '../styles/global';
import AsyncStorage from '@react-native-community/async-storage';
import SlangItem from '../components/slangItem';

//export default class SlangNote extends React.Component
export default function SlangNote({navigation}) {
    const [slangList, setSlangList] = useState( [] );

   
    const getData = async () => {
        try {
           let slangs = JSON.parse(await AsyncStorage.getItem('slangs'));
           setSlangList(slangs);              
        } catch(e) {
          // error reading value
        }
    } 
    useEffect(() => {
      getData()  
    }, []);
     
    

    const pressHandler = (item) => {
      return (
        navigation.navigate('Detail', item)
      );
    }
    return (
         
        <View style={globalStyles.container}>
            <FlatList style={styles.list} numColumns={2} data={slangList} renderItem={({ item }) => (
             <SlangItem item={item} pressHandler={pressHandler} />
         )}/>

        </View>
        
    );

}

const styles = StyleSheet.create({
    list:{
     marginTop: 20,
     flex: 1,
    }
   });