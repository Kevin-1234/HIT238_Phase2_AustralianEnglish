import React, {useState, useEffect } from 'react';
import { StyleSheet, FlatList, Button, TouchableHighlight, ImageBackground } from 'react-native';
import {globalStyles} from '../styles/global';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import TopicItem from '../components/topicItem';


export default function TopicNote({navigation}) {
    const [topicList, setTopicList] = useState([]);
      

   
    const getData = async () => {
        try {
           let topics = JSON.parse(await AsyncStorage.getItem('topics'));
          
           setTopicList(topics);
                        
        } catch(e) {
          // error reading value
        }
    } 
    useEffect( () => {
     getData();
     
    }, []);
     
    console.log(topicList);  

    const pressHandler = (item) => {
      return (
        navigation.navigate('Detail', item)
      );
    }
     if(topicList.length <= 0){
         return(
             <View>
                 <Text style={styles.heading}>No topic notes found!</Text>
             </View>          
         );
          
     }else{

        return (
            <View style={globalStyles.container}>
      
        {/* each item in 'data' is cycled through*/}
      <FlatList style={styles.list} numColumns={1} data={topicList} renderItem={({ item }) => (
          <TopicItem item={item} pressHandler={pressHandler} />
      )}/>
    </View>
        );

    }
    

}

const styles = StyleSheet.create({
    list:{
     marginTop: 20,
     flex: 1,
    },
    heading:{
        fontSize: 38,
        marginTop: '40%',
        alignSelf: 'center'
    }
   });