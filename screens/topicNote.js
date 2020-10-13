import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

import { View, Text } from "native-base";
import AsyncStorage from "@react-native-community/async-storage";
import TopicItem from "../components/topicItem";

export default function TopicNote({ navigation }) {
  const [topicList, setTopicList] = useState([]);

  const getData = async () => {
    try {
      let topics = JSON.parse(await AsyncStorage.getItem("topics"));

      setTopicList(topics);
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(topicList);

  const pressHandler = (item) => {
    return navigation.navigate("Detail", item);
  };
  if (topicList === null) {
    return (
      <View>
        <Text style={{fontSize:38, alignSelf: 'center', marginTop: '60%'}}>No topic notes found!</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {/* each item in 'data' is cycled through*/}
        <FlatList
          style={styles.list}
          numColumns={1}
          data={topicList}
          renderItem={({ item }) => (
            <TopicItem item={item} pressHandler={pressHandler} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
  heading: {
    fontSize: 38,
    marginTop: "40%",
    alignSelf: "center",
  },
});
