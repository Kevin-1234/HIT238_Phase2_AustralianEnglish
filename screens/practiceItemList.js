import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Button,
} from "react-native";
import {
  Container,
  Header,
  View,
  Content,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

slangList = [
  {
    title: "Mash",
    key: "1",
    definition:
      "Potatoes that have been boiled and crushed into a soft mass, often with butter and milk.",
    imageS: require("../assets/images/sb_mash.png"),
    imageL: require("../assets/images/l_mash.png"),
    audio: "../assets/audios/mash.mp3",
  },
];

export default function PracticeItemList({ navigation }) {
  const [practiceItems, setPracticeItems] = useState([
    {
      title: "Avo",
      key: "1",
      image1Title: "Apple",
      image1: require("../assets/images/avotest-apple.jpg"),
      image2Title: "Avo",
      image2: require("../assets/images/avotest-avocado.jpg"),
      image3Title: "Cucumber",
      image3: require("../assets/images/avotest-cucumber.jpg"),
      image4Title: "Watermelon",
      image4: require("../assets/images/avotest-watermelon.jpg"),
      imageCorrect: require("../assets/images/tick.png"),
      imageWrong: require("../assets/images/wrong.png"),
    },
    {
      title: "Dead Horse",
      key: "2",
      definition:
        "It means tomato sauce, which is any of a very large number of sauces made primarily from tomatoes.",
      imageS: require("../assets/images/sb_deadhorse.png"),
      imageL: require("../assets/images/l_deadhorse.png"),
      audio: "../assets/audios/deadhorse.mp3",
    },
  ]);
  var [itemIndex, setItemIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const [itemPicture1, setItemPicture1] = useState(practiceItems[0].image1);
  const [itemPicture2, setItemPicture2] = useState(practiceItems[0].image2);
  const [itemPicture3, setItemPicture3] = useState(practiceItems[0].image3);
  const [itemPicture4, setItemPicture4] = useState(practiceItems[0].image4);
  

  const fadeAnim1 = useRef(new Animated.Value(1)).current;
  const fadeAnim2 = useRef(new Animated.Value(1)).current;
  const fadeAnim3 = useRef(new Animated.Value(1)).current;
  const fadeAnim4 = useRef(new Animated.Value(1)).current;

  // const fadeIn = () => {
  //     // Will change fadeAnim value to 1 in 5 seconds
  //     Animated.timing(fadeAnim, {
  //       toValue: 1,
  //       duration: 100,
  //     }).start();
  //     //setItemPicture(require("../assets/images/sb_mash.png"));
  //   };

  //   const fadeOut = (state) => {

  //       Animated.timing(fadeAnim, {
  //       toValue: 0,
  //       duration: 100,
  //     }).start();

  // await setItemPicture(require("../assets/images/sb_deadhorse.png"));
  // await Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 150,
  //   }).start();

  //};

  //   const promiseA = new Promise(fadeOut);
  //   const switchPicture = async () => {
  //     await promiseA.then(setItemPicture(require("../assets/images/sb_deadhorse.png")));

  //   }

  const fadeIn = (state) => {
    if (state === itemPicture1) {
      Animated.timing(fadeAnim1, {
        toValue: 1,
        duration: 50,
      }).start();
    } else if (state === itemPicture2) {
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 50,
      }).start();
    } else if (state === itemPicture3) {
      Animated.timing(fadeAnim3, {
        toValue: 1,
        duration: 50,
      }).start();
    } else if (state === itemPicture4) {
      Animated.timing(fadeAnim4, {
        toValue: 1,
        duration: 50,
      }).start();
    }
  };

  const fadeOut = (state) => {
    if (state === itemPicture1) {
      Animated.timing(fadeAnim1, {
        toValue: 0,
        duration: 100,
      }).start();
    } else if (state === itemPicture2) {
      Animated.timing(fadeAnim2, {
        toValue: 0,
        duration: 100,
      }).start();
    } else if (state === itemPicture3) {
      Animated.timing(fadeAnim3, {
        toValue: 0,
        duration: 100,
      }).start();
    } else if (state === itemPicture4) {
      Animated.timing(fadeAnim4, {
        toValue: 0,
        duration: 100,
      }).start();
    }
  };

  const switchPicture = (itemTitle, state) => {
    if (itemTitle === practiceItems[0].title) {

      if (state === itemPicture1) {
        fadeOut(state);
        setTimeout(() => {
          setItemPicture1(require("../assets/images/tick.png"));
        }, 100);
        setTimeout(() => {
          fadeIn(state);
        }, 150);

        //setItemPicture(require("../assets/images/sb_mash.png"));
      } else if (state === itemPicture2) {
        fadeOut(state);
        setTimeout(() => {
          setItemPicture2(require("../assets/images/tick.png"));
        }, 100);
        setTimeout(() => {
          fadeIn(state);
        }, 150);
      } else if (state === itemPicture3) {
        fadeOut(state);
        setTimeout(() => {
          setItemPicture3(require("../assets/images/tick.png"));
        }, 100);

        setTimeout(() => {
          fadeIn(state);
        }, 150);
      } else if (state === itemPicture4) {
        fadeOut(state);

        setTimeout(() => {
          setItemPicture4(require("../assets/images/tick.png"));
        }, 100);

        setTimeout(() => {
          fadeIn(state);
        }, 150);
      }

      setDisabled(true);
      
    } else {
      if (state === itemPicture1) {
        fadeOut(state);
        setTimeout(() => {
          setItemPicture1(require("../assets/images/wrong.png"));
        }, 100);

        setTimeout(() => {
          fadeIn(state);
        }, 150);

        setTimeout(() => {
          fadeOut(state);
        }, 500);

        setTimeout(() => {
          setItemPicture1(practiceItems[0].image1);
        }, 600);

        setTimeout(() => {
          fadeIn(state);
        }, 700);
      } else if (state === itemPicture2) {
        fadeOut(state);
        setTimeout(() => {
          setItemPicture2(require("../assets/images/wrong.png"));
        }, 100);

        setTimeout(() => {
          fadeIn(state);
        }, 150);

        setTimeout(() => {
          fadeOut(state);
        }, 500);

        setTimeout(() => {
          setItemPicture2(practiceItems[0].image2);
        }, 600);

        setTimeout(() => {
          fadeIn(state);
        }, 700);
      } else if (state === itemPicture3) {
        fadeOut(state);
        setTimeout(() => {
          setItemPicture3(require("../assets/images/wrong.png"));
        }, 100);

        setTimeout(() => {
          fadeIn(state);
        }, 150);

        setTimeout(() => {
          fadeOut(state);
        }, 500);

        setTimeout(() => {
          setItemPicture3(practiceItems[0].image3);
        }, 600);

        setTimeout(() => {
          fadeIn(state);
        }, 700);
      } else if (state === itemPicture4) {
        fadeOut(state);
        setTimeout(() => {
          setItemPicture4(require("../assets/images/wrong.png"));
        }, 100);

        setTimeout(() => {
          fadeIn(state);
        }, 150);

        setTimeout(() => {
          fadeIn(state);
        }, 150);

        setTimeout(() => {
          fadeOut(state);
        }, 500);

        setTimeout(() => {
          setItemPicture4(practiceItems[0].image4);
        }, 600);

        setTimeout(() => {
          fadeIn(state);
        }, 700);
      }
    }
  };

  const onNext = () => {
    setItemIndex((itemIndex += 1));
    console.log(itemIndex);
  };

  return (
    <Container>
      <Content>
        <Card style={{ elevation: 3 }}>
          <CardItem>
            <Left>
              <Body>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 32,
                    fontWeight: "600",
                  }}
                >
                  Dead Horse
                </Text>
                <Text note></Text>
              </Body>
            </Left>
          </CardItem>

          <Grid>
            <Row>
              <Col style={styles.column}>
                <TouchableOpacity
                  disabled={disabled}
                  activeOpacity={1.0}
                  onPress={() =>
                    switchPicture(practiceItems[0].image1Title, itemPicture1)
                  }
                >
                  <Animated.View
                    style={[
                      styles.fadingContainer,
                      {
                        opacity: fadeAnim1, // Bind opacity to animated value
                      },
                    ]}
                  >
                    <CardItem cardBody style={styles.cardItem}>
                      <Image style={styles.image} source={itemPicture1} />
                    </CardItem>
                  </Animated.View>
                </TouchableOpacity>
              </Col>

              <Col style={styles.column}>
                <TouchableOpacity
                  disabled={disabled}
                  activeOpacity={1.0}
                  onPress={() =>
                    switchPicture(practiceItems[0].image2Title, itemPicture2)
                  }
                >
                  <Animated.View
                    style={[
                      styles.fadingContainer,
                      {
                        opacity: fadeAnim2, // Bind opacity to animated value
                      },
                    ]}
                  >
                    <CardItem cardBody style={styles.cardItem}>
                      <Image style={styles.image} source={itemPicture2} />
                    </CardItem>
                  </Animated.View>
                </TouchableOpacity>
              </Col>
            </Row>
            <Row>
              <Col style={styles.column}>
                <TouchableOpacity
                  disabled={disabled}
                  activeOpacity={1.0}
                  onPress={() =>
                    switchPicture(practiceItems[0].image3Title, itemPicture3)
                  }
                >
                  <Animated.View
                    style={[
                      styles.fadingContainer,
                      {
                        opacity: fadeAnim3, // Bind opacity to animated value
                      },
                    ]}
                  >
                    <CardItem cardBody style={styles.cardItem}>
                      <Image style={styles.image} source={itemPicture3} />
                    </CardItem>
                  </Animated.View>
                </TouchableOpacity>
              </Col>

              <Col style={styles.column}>
                <TouchableOpacity
                  disabled={disabled}
                  activeOpacity={1.0}
                  onPress={() =>
                    switchPicture(practiceItems[0].image4Title, itemPicture4)
                  }
                >
                  <Animated.View
                    style={[
                      styles.fadingContainer,
                      {
                        opacity: fadeAnim4, // Bind opacity to animated value
                      },
                    ]}
                  >
                    <CardItem cardBody style={styles.cardItem}>
                      <Image style={styles.image} source={itemPicture4} />
                    </CardItem>
                  </Animated.View>
                </TouchableOpacity>
              </Col>
            </Row>
          </Grid>
          <CardItem>
            <Text>Note:Choose the correct picture for the slang </Text>
          </CardItem>
        </Card>

        <View style={styles.buttonRow}>
          <Button title="next" onPress={onNext} />
        </View>
      </Content>
      {/* <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
  <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
    <Icon name="arrow-back" style={{paddingRight: 14}}/>
    <Text>Swipe Left</Text>
  </Button>
  <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
    <Icon name="arrow-forward" style={{paddingLeft: 14}}/>
    <Text>Swipe Right</Text>
  </Button>
</View> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    flex: 1,
  },

  column: {
    marginHorizontal: 5,
    marginVertical: 5,
    height: 200,

    borderRadius: 5,
    shadowColor: "#000000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 1,
  },
  cardItem: {
    borderRadius: 5,
  },
  image: {
    height: 200,
    width: "100%",
    flex: 1,
    borderRadius: 5,
  },
  fadingContainer: {
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16,
  },
});
