import React, {useState}from 'react';
import { StyleSheet, FlatList} from 'react-native';
import SlangItem from '../components/slangItem';
import { Header, View, Item, Input, Icon } from 'native-base';




export default function Slangs({navigation}) {
 
  // the data set of slangs

  const slangData = [
    {
        title: "Mash",
        key: '1',
        definition: "Potatoes that have been boiled and crushed into a soft mass, often with butter and milk.",
        imageS: "../assets/images/sb_mash.png",
        imageL: "../assets/images/l_mash.png",
        audio: "../assets/audios/mash.mp3"
    },
    {
        title: "Dead Horse",
        key: '2',
        definition: "It means tomato sauce, which is any of a very large number of sauces made primarily from tomatoes.",
        imageS: "../assets/images/sb_deadhorse.png",
        imageL: "../assets/images/l_deadhorse.png",
        audio: "../assets/audios/deadhorse.mp3"
    },
    {
        title: "Banger",
        key: '3',
        definition: "Sausage",
        imageS: "../assets/images/sb_banger.png",
        imageL: "../assets/images/l_banger.png",
        audio: "../assets/audios/banger.mp3"
    },
    {
        title: "Avo",
        key: '4',
        definition: "A tropical fruit with hard, dark green skin, soft, light green flesh and a large seed inside.",
        imageS: "../assets/images/sb_avo.png",
        imageL: "../assets/images/l_avo.png",
        audio: "../assets/audios/avo.mp3"
    },
    {
        title: "Dog Eye",
        key: '5',
        definition: "Dog's eye is a pie with a filling of meat and/or other savory ingredients.",
        imageS: "../assets/images/sb_dogeye.png",
        imageL: "../assets/images/l_dogeye.png",
        audio: "../assets/audios/dogeye.mp3"
    },
    {
        title: "Flat White",
        key: '6',
        definition: "Coffee with milk or cream.",
        imageS: "../assets/images/sb_flatwhite.png",
        imageL: "../assets/images/l_flatwhite.png",
        audio: "../assets/audios/flatwhite.mp3"
    },

  {
    title: "Esky",
    key: '7',
    definition: "A portable insulated container for keeping food and drink cool.",
    imageS: "../assets/images/sb_esky.png",
    imageL: "../assets/images/l_esky.png",
    audio: "../assets/audios/esky.mp3"
},
{
  title: "Cuppa",
  key: '8',
  definition: "A cup of tea.",
  imageS: "../assets/images/sb_cuppa.png",
  imageL: "../assets/images/l_cuppa.png",
  audio: "../assets/audios/cuppa.mp3"
},
{
  title: "Fairy Floss",
  key: '9',
  definition: "A very light fluffy confection made from coloured spun sugar, usually held on a stick.",
  imageS: "../assets/images/sb_fairyfloss.png",
  imageL: "../assets/images/l_fairyfloss.png",
  audio: "../assets/audios/fairyfloss.mp3"
},

  ];
  const [slangList, setSlangList] = useState(slangData);
  const [search, setSearch] = useState('');
  const arrayholder = slangData;
  function SearchFilterFunction(text) {
    var newData = arrayholder;
    if(text){
        newData = arrayholder.filter(function(item) {
        //applying filter for the inserted text in search bar
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

    }
    //passing the inserted text in textinput
    setSlangList(newData);
    setSearch(text);
   
  }

  // pass item to 'detail' screen and navigate to it  
  const pressHandler = (item) => {
    return (
      navigation.navigate('Detail', item)
    );
  }


  return (
    <View style={styles.container} >
      
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={text => SearchFilterFunction(text)}
            value={search} />      
          </Item>     
        </Header>
        
        <FlatList style={styles.list} numColumns={2} data={slangList} renderItem={({ item }) => (
          <SlangItem item={item} pressHandler={pressHandler}  keyExtractor={(item, index) => index.toString()}/>
      )}/>
   
      
        
    </View>
  );
}



const styles = StyleSheet.create({
 list:{
   alignSelf: 'center',
   
    marginTop: 20,
  flex: 1,
 },
 container: {
  flex: 1,
  justifyContent: 'space-around',
},

});

