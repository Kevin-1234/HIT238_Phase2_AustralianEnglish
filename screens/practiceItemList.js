import React, {useState, Component} from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Header, View, DeckSwiper, Button, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

slangList= [
    {
        title: "Mash",
        key: '1',
        definition: "Potatoes that have been boiled and crushed into a soft mass, often with butter and milk.",
        imageS: require("../assets/images/sb_mash.png"),
        imageL: require("../assets/images/l_mash.png"),
        audio: "../assets/audios/mash.mp3"
    },
    

  ] ;

export default class DeckSwiperAdvancedExample extends Component {
    
   
      render(){

        return (
            <Container>
            
            <View>
              <DeckSwiper
                ref={(c) => this._deckSwiper = c}
                dataSource={slangList}
                renderEmpty={() =>
                  <View style={{ alignSelf: "center" }}>
                    <Text style={{marginTop:'10%'}}>Over</Text>
                  </View>
                }
                renderItem={item =>
                  <Card style={{ elevation: 3 }}>
                    <CardItem>
                      <Left>
                        
                        <Body>
                          <Text style={{ alignSelf: "center", fontSize: 32, fontWeight:'600' }}>Dead Horse</Text>
                          <Text note></Text>
                        </Body>
                      </Left>
                    </CardItem>
                                         
                    <Grid>
                    
                    <Row>
                  
                    <Col style={styles.column}>
                    <TouchableOpacity >
                        <CardItem cardBody style={styles.cardItem}>
                        
                            <Image style={styles.image}  source={item.imageS} />
                            
                            </CardItem> 
                            </TouchableOpacity>      
                        </Col>
                        
                        <Col style={styles.column}>
                    <TouchableOpacity >
                        <CardItem cardBody style={styles.cardItem}>
                        
                            <Image style={styles.image}  source={item.imageS} />
                            
                            </CardItem> 
                            </TouchableOpacity>      
                        </Col>
                        
                    </Row>
                    <Row>
                  
                    <Col style={styles.column}>
                    <TouchableOpacity >
                        <CardItem cardBody style={styles.cardItem}>
                        
                            <Image style={styles.image}  source={item.imageS} />
                            
                            </CardItem> 
                            </TouchableOpacity>      
                        </Col>
                        
                        <Col style={styles.column}>
                    <TouchableOpacity >
                        <CardItem cardBody style={styles.cardItem}>
                        
                            <Image style={styles.image}  source={item.imageS} />
                            
                            </CardItem> 
                            </TouchableOpacity>      
                        </Col>
                        
                    </Row>
                    
     
                    </Grid>
                    <CardItem>
                        <Text>Note:Choose the correct picture for the slang</Text>
                    </CardItem>
                  </Card>
                }
              />
            </View>
            <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
              <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                <Icon name="arrow-back" style={{paddingRight: 14}}/>
                <Text>Swipe Left</Text>
              </Button>
              <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                <Icon name="arrow-forward" style={{paddingLeft: 14}}/>
                <Text>Swipe Right</Text>
              </Button>
            </View>
          </Container>
           
    
        );
      }
    

}

const styles = StyleSheet.create({
    list:{
     marginTop: 20,
     flex: 1,
    },

    column:{
        marginHorizontal:5,
        marginVertical:5,
        height: 200,
        
        borderRadius: 5,
        shadowColor: '#000000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 1,
    },
    cardItem: {

        borderRadius: 5,
    },
    image:{
        
      
        height:200, 
        width: '100%', 
        flex: 1,
        borderRadius: 5,

        
    }
 
   });