import { BaseRouter } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import {globalStyles} from '../styles/global';
import { WebView } from 'react-native-webview';
import { Audio, Video } from "expo-av";
import VideoPlayer from 'expo-video-player'


//const soundObject = new Audio.Sound();

 
  //soundObject.loadAsync(require('../assets/audios/avo.mp3'));
    
   
  //soundObject.playAsync();
  // Your sound is playing!

  // Don't forget to unload the sound from memory
  // when you are done using the Sound object
   //soundObject.unloadAsync();

export default class Detail extends React.Component {

/*<Text style={globalStyles.titleText}>{navigation.getParam('title', 'defultValue')}</Text>
      <Text style={globalStyles.titleText}>{navigation.getParam('audio', 'defultValue')}</Text>
      <Text style={globalStyles.titleText}>{navigation.getParam('definition', 'defultValue')}</Text>*/
      constructor(props){
        super(props);
        this.itemTitle = this.props.route.params.title;
        // hard code the paths of images, videos and audios because 'require()' does not accept a variable
        this.images = { 
          'Mash'  : require('../assets/images/l_mash.png'),
          'Avo'  : require('../assets/images/l_avo.png'),
          'Dog Eye'  : require('../assets/images/l_dogeye.png'),
          'Dead Horse'  : require('../assets/images/l_deadhorse.png'),
          'Flat White'  : require('../assets/images/l_flatwhite.png'),
          'Banger'  : require('../assets/images/l_banger.png'),
          "Walking a Mile in Someone's Shoes"  : require('../assets/images/walk.png'),
          'Throw Caution to the Wind'  : require('../assets/images/throw.png'),
          'Down the Track'  : require('../assets/images/down.png'),
          'Go Down a Storm'  : require('../assets/images/go.png'),
          'Draw a Blank on Something'  : require('../assets/images/draw.png'),
        };

        this.audios = { 
          'Mash'  : require('../assets/audios/mash.mp3'),
          'Avo'  : require('../assets/audios/avo.mp3'),
          'Dog Eye'  : require('../assets/audios/dogeye.mp3'),
          'Dead Horse'  : require('../assets/audios/deadhorse.mp3'),
          'Flat White'  : require('../assets/audios/flatwhite.mp3'),
          'Banger'  : require('../assets/audios/banger.mp3'),
        };

      
        this.videos = {
          "At the resturant" : require('../assets/videos/attheresturant.mp4'),
          "Families" : require('../assets/videos/families.mp4'),
          "Holidays" : require('../assets/videos/holidays.mp4'),
          "Travelling" : require('../assets/videos/travelling.mp4'),
          "The weather" : require('../assets/videos/theweather.mp4'),
          "In the kitchen" : require('../assets/videos/inthekitchen.mp4'),
        };
        // the item info is passed from the parent screens
        this.image = this.images[this.itemTitle];
        this.audio = this.audios[this.itemTitle];
        this.video = this.videos[this.itemTitle];
      }
      // initialize audio 
      async componentDidMount() {
        Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: false,
          interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: true,
          interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
          playThroughEarpieceAndroid: false
        });
        this.sound = new Audio.Sound();
        const status = {
          shouldPlay: false
        };
        if (this.audio){
          this.sound.loadAsync(this.audio, status, false);
        }
      }

      // play the audio and reset after playing
      async playSound(){
        await this.sound.playAsync();
        await this.sound.setPositionAsync(0)
      }
     

render() {
  // if the item recieved from the parent screen contains audio (slangs), return this view
  if(this.audio){
    return (
      <View style={globalStyles.container}>
        <Image source={this.image} style={styles.image}></Image>
        <Text style={[globalStyles.titleText, styles.title]}>{this.props.route.params.title}</Text>
        <TouchableOpacity  onPress={this.playSound.bind(this)}>
          <ImageBackground source={require('../assets/images/speaker.png')} style={styles.bgImage}>
          </ImageBackground>
        </TouchableOpacity>
        <Text style={[globalStyles.titleText, styles.definition]}>{this.props.route.params.definition}</Text>
      </View>
    );
   // if the item recieved from the parent screen contains video (topics), return this view 
  }else if (this.props.route.params.videoUrl){ 
    return(
      <View style={styles.container}> 
        <Video
        ref={(ref) => {this.player = ref}}
        fullscreen
        source={this.video}
        useNativeControls
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: '100%', height: 300 }}
        />
      </View>
    );
  }
  // else (phrases), return this view 
  else{
    return (
      <View style={globalStyles.container}>
        <Image source={this.image} style={styles.image}></Image>
        <Text style={[globalStyles.titleText, styles.title]}>{this.props.route.params.title}</Text>
        <Text style={[globalStyles.titleText, styles.definition]}>{this.props.route.params.definition}</Text>
      </View>
      );
  }
}
}

const styles = StyleSheet.create({
  image: {
    marginTop: '10%',
    width: '100%',
    height: 240,
    borderRadius: 8,
  },

  title:{
  marginTop:'8%',
  },

  definition:{
    fontSize:22,
    marginTop: '10%',
  },

  bgImage:{
  width:48,
  height: 48,
  },

})