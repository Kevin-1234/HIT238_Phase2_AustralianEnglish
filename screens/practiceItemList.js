import React, {useState, Component} from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Header, View, DeckSwiper, Button, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
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
              <Content>
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
            
                <Image style={styles.image}  source={slangList[0].imageS} />
                
                </CardItem> 
                
                </TouchableOpacity>      
            </Col>
            
            <Col style={styles.column}>
        <TouchableOpacity >
            <CardItem cardBody style={styles.cardItem}>
            
                <Image style={styles.image}  source={slangList[0].imageS} />
                
                </CardItem> 
                </TouchableOpacity>      
            </Col>
            
        </Row>
        <Row>
      
        <Col style={styles.column}>
        <TouchableOpacity >
            <CardItem cardBody style={styles.cardItem}>
            
                <Image style={styles.image}  source={slangList[0].imageS} />
                
                </CardItem> 
                </TouchableOpacity>      
            </Col>
            
            <Col style={styles.column}>
        <TouchableOpacity >
            <CardItem cardBody style={styles.cardItem}>
            
                <Image style={styles.image}  source={slangList[0].imageS} />
                
                </CardItem> 
                </TouchableOpacity>      
            </Col>
            
        </Row>
        

        </Grid>
        <CardItem>
            <Text>Note:Choose the correct picture for the slang </Text>
        </CardItem>
        
      </Card>
                
              
           
      </Content>
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