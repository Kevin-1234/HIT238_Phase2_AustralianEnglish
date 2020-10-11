import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import {globalStyles} from '../styles/global';
import PhraseItem from '../components/phraseItem';

export default function Home({navigation}) {
  // the data set of phrases
  const phrases = [
    {
      title: "Draw a Blank on Something",
      key: '1',
      definition: "The expression 'to draw a blank on something' means to fail to recall a memory or to fail in some speculative effort. it's to fail to produce an answer for something or fail to remember something.",
      imageL: "assets/images/draw.png"
    },
    {
      title: "Throw Caution to the Wind",
      key: '2',
      definition: "If you 'throw caution to the wind', it is to act in a completely reckless manner, to do something without worrying about it, without worrying about the risk or the negative results that  come from doing that thing. So, it's often to take a risk and it has this element of carelessness. So, you've thrown caution, like the caution you should have, you've thrown it away to the wind, so that it blows.",
      imageL: "assets/images/throw.png"
    },
    {
      title: "Down the Track",
      key: '3',
      definition: "The expression ‘Down the track’ means in the future. I'm thinking about doing this down the track, in the future as if you're walking down that path and you'll worry about something else further down the path when you get down that track.",
      imageL: "assets/images/down.png"
    },
    {
      title: "Go Down a Storm",
      key: '4',
      definition: "The expression ‘to go down a storm’ means to be enthusiastically received by an audience. So, to be liked, to be whole-heartedly appreciated, to have great success. If something goes down a storm, it succeeds, or it is received incredibly well by a person or group of people.",
      imageL: "assets/images/go.png"
    },
    {
      title: "Walking a Mile in Someone's Shoes",
      key: '5',
      definition: "The expression 'to walk a mile in someone's shoes' means to consider someone else's feelings or experiences or challenges or thought process, to understand what it is like for this person.",
      imageL: "assets/images/walk.png"
    },
    {
      title: "Have Your Finger in Many Pies",
      key: '6',
      definition: "If you have your fingers in many pies, if you have a finger in every pie, It means that you're involved in many, sometimes too many, different things, you're involved in a lot of different activities or maybe you know about a lot of different things going on.",
      imageL: "assets/images/fingerspies.png"
    },
    {
      title: "Spill the Beans",
      key: '7',
      definition: "If you spill the beans, you reveal secret information accidentally or sometimes maliciously, you know, because you're being nasty, and often it ruins a surprise or another plan that someone has. You've revealed information and it's ruined a surprise. You've spilled the beans.",
      imageL: "assets/images/spillbeans.jpg"
    },
   


  ]

  // pass item to 'detail' screen and navigate to it
  const pressHandler = (item) => {
    return (
      navigation.navigate('Detail', item)
    );
  }

  return (
    <ImageBackground source={require('../assets/images/phrases-bg.jpg')} style={styles.backgroundImage}>
      <View style={globalStyles.container}>
        <FlatList style={styles.list} data={phrases} renderItem={({ item }) => (
          <TouchableOpacity>
            <PhraseItem item={item} pressHandler={pressHandler} />
          </TouchableOpacity>
        )}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },

  list:{
    marginTop: 20,
    flex: 1,
   },

 backgroundImage:{  
    width:'100%',
    height: '100%',
    borderRadius: 6
  },

});