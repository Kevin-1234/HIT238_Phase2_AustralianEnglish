import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { globalStyles } from "../styles/global";
import AsyncStorage from "@react-native-community/async-storage";
import PhraseItem from "../components/phraseItem";

export default function PhraseNote({ navigation }) {
  const [phraseList, setPhraseList] = useState([]);

  const getData = async () => {
    try {
      let phrases = JSON.parse(await AsyncStorage.getItem("phrases"));
      setPhraseList(phrases);
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const pressHandler = (item) => {
    return navigation.navigate("Detail", item);
  };

  if (phraseList === null) {
    return (
      <View>
        <Text style={{fontSize:38, alignSelf: 'center', marginTop: '60%'}}>No phrase notes found!</Text>
      </View>
    );
  } else {
    return (
      <View style={globalStyles.container}>
        <FlatList
          style={styles.list}
          data={phraseList}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <PhraseItem item={item} pressHandler={pressHandler} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    flex: 1,
  },
});
