import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import { Audio, Video } from "expo-av";
import { Root, Button, Text, Toast } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-community/async-storage";

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
    };
    this.itemTitle = this.props.route.params.title;
    // hard code the paths of images, videos and audios because 'require()' does not accept a variable
    this.images = {
      Mash: require("../assets/images/l_mash.png"),
      Avo: require("../assets/images/l_avo.png"),
      "Dog Eye": require("../assets/images/l_dogeye.png"),
      "Dead Horse": require("../assets/images/l_deadhorse.png"),
      "Flat White": require("../assets/images/l_flatwhite.png"),
      Banger: require("../assets/images/l_banger.png"),
      Esky: require("../assets/images/l_esky.png"),
      Cuppa: require("../assets/images/l_cuppa.png"),
      "Fairy Floss": require("../assets/images/l_fairyfloss.png"),
      "Walking a Mile in Someone's Shoes": require("../assets/images/walk.png"),
      "Throw Caution to the Wind": require("../assets/images/throw.png"),
      "Down the Track": require("../assets/images/down.png"),
      "Go Down a Storm": require("../assets/images/go.png"),
      "Draw a Blank on Something": require("../assets/images/draw.png"),
      "Have Your Finger in Many Pies": require("../assets/images/manypies.jpg"),
      "Spill the Beans": require("../assets/images/spillbeans.jpg"),
    };

    this.audios = {
      Mash: require("../assets/audios/mash.mp3"),
      Avo: require("../assets/audios/avo.mp3"),
      "Dog Eye": require("../assets/audios/dogeye.mp3"),
      "Dead Horse": require("../assets/audios/deadhorse.mp3"),
      "Flat White": require("../assets/audios/flatwhite.mp3"),
      Banger: require("../assets/audios/banger.mp3"),
      Esky: require("../assets/audios/esky.mp3"),
      Cuppa: require("../assets/audios/cuppa.mp3"),
      "Fairy Floss": require("../assets/audios/fairyfloss.mp3"),
    };

    this.videos = {
      "At the resturant": require("../assets/videos/attheresturant.mp4"),
      Families: require("../assets/videos/families.mp4"),
      Holidays: require("../assets/videos/holidays.mp4"),
      Travelling: require("../assets/videos/travelling.mp4"),
      "The weather": require("../assets/videos/theweather.mp4"),
      "In the kitchen": require("../assets/videos/inthekitchen.mp4"),
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
      playThroughEarpieceAndroid: false,
    });
    this.sound = new Audio.Sound();
    const status = {
      shouldPlay: false,
    };
    if (this.audio) {
      this.sound.loadAsync(this.audio, status, false);
    }
  }

  // play the audio and reset after playing
  async playSound() {
    await this.sound.playAsync();
    await this.sound.setPositionAsync(0);
  }

  // save data to async storage
  storeData = async (item) => {
    var DBKey = "";
    if (this.audio) {
      DBKey = "slangs";
    } else if (this.props.route.params.videoUrl) {
      DBKey = "topics";
    } else {
      DBKey = "phrases";
    }

    let existingItem = false;
    const existingItems = await AsyncStorage.getItem(DBKey);
    const itemToSave = item;

    let newItemList = JSON.parse(existingItems);
    if (!newItemList) {
      newItemList = [];
    }

    newItemList.forEach((element) => {
      if (element.title === itemToSave.title) {
        existingItem = true;
      }
    });

    if (!existingItem) {
      newItemList.push(itemToSave);
      try {
        await AsyncStorage.setItem(DBKey, JSON.stringify(newItemList));
        Toast.show({
          text: "Secucessfully saved to the notebook!",
          buttonText: "Okay",
          type: "success",
        });
      } catch (e) {
        console.log("There was an error!");
        // saving error
      }
    } else {
      Toast.show({
        text: "Item is already existed!",
        buttonText: "Okay",
        type: "warning",
      });
    }
  };

  removeData = async (item) => {
    var DBKey = "";
    if (this.audio) {
      DBKey = "slangs";
    } else if (this.props.route.params.videoUrl) {
      DBKey = "topics";
    } else {
      DBKey = "phrases";
    }
    const existingItems = await AsyncStorage.getItem(DBKey);

    let newItemList = JSON.parse(existingItems);
    if (!newItemList) {
      newItemList = [];
    }

    let ifExisted = false;
    newItemList.forEach((element) => {
      if (element.title === item.title) {
        let index = newItemList.indexOf(element);
        newItemList.splice(index, 1);
        ifExisted = true;
      }
    });
    if (!ifExisted) {
      Toast.show({
        text: "Item is not existed in the notebook!",
        buttonText: "Okay",
        type: "warning",
      });
    } else {
      try {
        await AsyncStorage.setItem(DBKey, JSON.stringify(newItemList));
        Toast.show({
          text: "Secucessfully removed from the notebook!",
          buttonText: "Okay",
          type: "success",
        });
      } catch (e) {
        console.log("There was an error!");
        // saving error
      }
    }
  };

  render() {
    // if the item recieved from the parent screen contains audio (slangs), return this view
    if (this.audio) {
      return (
        <View style={globalStyles.container}>
          <Image source={this.image} style={styles.image}></Image>
          <Text style={[globalStyles.titleText, styles.title]}>
            {this.props.route.params.title}
          </Text>
          <TouchableOpacity onPress={this.playSound.bind(this)}>
            <ImageBackground
              source={require("../assets/images/speaker.png")}
              style={styles.bgImage}
            ></ImageBackground>
          </TouchableOpacity>

          <Text style={[globalStyles.titleText, styles.definition]}>
            {this.props.route.params.definition}
          </Text>
          <Root>
            <View style={[styles.buttonRow]}>
              <Button
                success
                style={styles.button}
                onPress={() => this.storeData(this.props.route.params)}
              >
                <Text>Save</Text>
              </Button>

              <Button
                danger
                style={styles.button}
                onPress={() => this.removeData(this.props.route.params)}
              >
                <Text>Remove</Text>
              </Button>
            </View>
          </Root>
        </View>
      );
      // if the item recieved from the parent screen contains video (topics), return this view
    } else if (this.props.route.params.videoUrl) {
      return (
        <View style={styles.container}>
          <LinearGradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              height: "120%",
            }}
          />
          <Text
            style={{
              color: "#f8f8ff",
              alignSelf: "center",
              fontSize: 38,
              fontWeight: "600",
              paddingTop: "15%",
            }}
          >
            {this.itemTitle}
          </Text>
          <Video
            ref={(ref) => {
              this.player = ref;
            }}
            fullscreen
            source={this.video}
            useNativeControls
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{
              width: "100%",
              height: 300,
              marginTop: "18%",
              borderRadius: 6,
              alignSelf: "center",
            }}
          />
          <Root>
            <View style={[styles.buttonRow]}>
              <Button
                success
                style={styles.button}
                onPress={() => this.storeData(this.props.route.params)}
              >
                <Text>Save</Text>
              </Button>

              <Button
                danger
                style={styles.button}
                onPress={() => this.removeData(this.props.route.params)}
              >
                <Text>Remove</Text>
              </Button>
            </View>
          </Root>
        </View>
      );
    }
    // else (phrases), return this view
    else {
      return (
        <View style={globalStyles.container}>
          <Image source={this.image} style={styles.image}></Image>
          <Text style={[styles.title]}>{this.props.route.params.title}</Text>
          <Text style={[styles.definition]}>
            {this.props.route.params.definition}
          </Text>
          <Root>
            <View style={[styles.buttonRow]}>
              <Button
                success
                style={styles.button}
                onPress={() => this.storeData(this.props.route.params)}
              >
                <Text>Save</Text>
              </Button>

              <Button
                danger
                style={styles.button}
                onPress={() => this.removeData(this.props.route.params)}
              >
                <Text>Remove</Text>
              </Button>
            </View>
          </Root>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginTop: "10%",
    width: "100%",
    height: 240,
    borderRadius: 8,
  },

  title: {
    fontFamily: "Roboto-bold",
    fontSize: 36,
    marginTop: "5%",
    marginBottom: "5%",
  },

  definition: {
    fontFamily: "Roboto-medium",
    fontSize: 22,
  },

  bgImage: {
    marginBottom: "5%",
    width: 48,
    height: 48,
  },
  buttonRow: {
    alignSelf: "center",

    flexDirection: "row",
    marginVertical: "20%",
  },
  button: {
    marginHorizontal: 50,
    width: 100,
    justifyContent: "center",
  },
});
