import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated

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
  Button,
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
    },
    {
      title: "Dead Horse",
      key: "2",
      image1Title: "dh",
      image1: require("../assets/images/deadhorsetest-dh.jpg"),
      image2Title: "Red Chilli",
      image2: require("../assets/images/deadhorsetest-redchilli.jpg"),
      image3Title: "Strawberry Sauce",
      image3: require("../assets/images/deadhorsetest-strawberrysauce.jpg"),
      image4Title: "Dead Horse",
      image4: require("../assets/images/deadhorsetest-tomatosauce.jpg"),
    },
  ]);
  var [itemIndex, setItemIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const [itemTtile, setItemTtile] = useState(practiceItems[itemIndex].title);
  const [itemPicture1, setItemPicture1] = useState(practiceItems[itemIndex].image1);
  const [itemPicture2, setItemPicture2] = useState(practiceItems[itemIndex].image2);
  const [itemPicture3, setItemPicture3] = useState(practiceItems[itemIndex].image3);
  const [itemPicture4, setItemPicture4] = useState(practiceItems[itemIndex].image4);
  

  const fadeAnim1 = useRef(new Animated.Value(1)).current;
  const fadeAnim2 = useRef(new Animated.Value(1)).current;
  const fadeAnim3 = useRef(new Animated.Value(1)).current;
  const fadeAnim4 = useRef(new Animated.Value(1)).current;
  const fadeAnimItem = useRef(new Animated.Value(0)).current;

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
    }else{

      Animated.timing(fadeAnimItem, {
        toValue: 1,
        duration: 100,
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
    }else{

      Animated.timing(fadeAnimItem, {
        toValue: 0,
        duration: 100,
      }).start();
    }
  };

  const switchPicture = (itemTitle, state) => {
    if (itemTitle === practiceItems[itemIndex].title) {

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
          setItemPicture1(practiceItems[itemIndex].image1);
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
          setItemPicture2(practiceItems[itemIndex].image2);
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
          setItemPicture3(practiceItems[itemIndex].image3);
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
          setItemPicture4(practiceItems[itemIndex].image4);
        }, 600);

        setTimeout(() => {
          fadeIn(state);
        }, 700);
      }
    }
  };


  const onNext = () => {
    if(itemIndex === practiceItems.length - 1)
    {
      setItemIndex((itemIndex = 0));

    }else{

      setItemIndex((itemIndex += 1));
    }
    fadeOut();
    setTimeout(() => {
      setItemTtile(practiceItems[itemIndex].title);
    setItemPicture1(practiceItems[itemIndex].image1);
    setItemPicture2(practiceItems[itemIndex].image2);
    setItemPicture3(practiceItems[itemIndex].image3);
    setItemPicture4(practiceItems[itemIndex].image4);

    },150);
    
    setTimeout(() => {fadeIn();}, 150);
    setDisabled(false);
  };

  const onPrevious = () => {
    if (itemIndex === 0){    
      setItemIndex((itemIndex = practiceItems.length - 1));
    }else{

      setItemIndex((itemIndex -= 1));
    }
    fadeOut();
    setTimeout(() => {
      setItemTtile(practiceItems[itemIndex].title);
    setItemPicture1(practiceItems[itemIndex].image1);
    setItemPicture2(practiceItems[itemIndex].image2);
    setItemPicture3(practiceItems[itemIndex].image3);
    setItemPicture4(practiceItems[itemIndex].image4);

    }, 150);
    setTimeout(() => {fadeIn();}, 150);
    setDisabled(false);
  };

  return (
    <Container>
      <Content>
      <Animated.View
                    style={[
                      styles.fadingContainer,
                      {
                        opacity: fadeAnimItem, 
                        borderRadius: 5,
                        
                      },
                    ]}
                  >
        <Card style={{ elevation: 3, borderRadius: 5,backgroundColor: '#ff8c00',marginTop: '8%', width:'95%',height: 500, alignSelf:'center' }}>
        
          <CardItem style={{backgroundColor: 'chocolate'}}>
            <Left>
              <Body>
                <Text
                  style={{
                    paddingTop: '6%',
                    alignSelf: "center",
                    fontSize: 32,
                    fontWeight: "600",
                    color: '#f0ffff',
                  }}
                >
                  {itemTtile}
                </Text>
                <Text note></Text>
              </Body>
            </Left>
          </CardItem>
                  
          <Grid>
            <Row style={styles.row}>
              <Col style={styles.column}>
                <TouchableOpacity
                  disabled={disabled}
                  activeOpacity={1.0}
                  onPress={() =>
                    switchPicture(practiceItems[itemIndex].image1Title, itemPicture1)
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
                    switchPicture(practiceItems[itemIndex].image2Title, itemPicture2)
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
            <Row style={styles.row}>
              <Col style={styles.column}>
                <TouchableOpacity
                  disabled={disabled}
                  activeOpacity={1.0}
                  onPress={() =>
                    switchPicture(practiceItems[itemIndex].image3Title, itemPicture3)
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
                    switchPicture(practiceItems[itemIndex].image4Title, itemPicture4)
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
          
          <CardItem style={{backgroundColor:'#d2691e'}}>
            <Text style={{color:'#f0ffff'}}>Note: Choose the correct picture</Text>
          </CardItem>
        </Card>
        </Animated.View>

        <View style={styles.buttonRow}>
         

          <Button iconLeft  style={{marginHorizontal:50}} onPress={onPrevious}>
    <Icon name="arrow-back" />
    <Text>Previous</Text>
  </Button>
  <Button iconRight style={{marginHorizontal:50}} onPress={onNext}>
    <Icon name="arrow-forward" style={{paddingLeft: 34, paddingRight:0}}/>
    <Text>Next</Text>
  </Button>
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

    marginHorizontal: 2,
    marginVertical: 2,
    height: 150,
    width: '45%',
    
    
    borderRadius: 5,
    shadowColor: "#000000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 1,
  },
  row: {
   
    alignItems:'center',
    justifyContent: "space-around",
  },
  cardItem: {
    
    borderRadius: 5,
  },
  image: {
    
    height: 160,
    width: 100,
    flex: 1,
    borderRadius: 5,
  },
  fadingContainer: {
   
    
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
  },
  buttonRow: {
    alignSelf: 'center',
    flexDirection: "row",
    marginVertical: '15%',
  },
});
