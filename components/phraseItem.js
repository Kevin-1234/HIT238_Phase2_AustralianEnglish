import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

// receive the an 'item' and a function that fires when each item is pressed from the parent file
export default function PhraseItem({ item, pressHandler }) {
  return (
    <TouchableOpacity style={styles.item} onPress={() => pressHandler(item)}>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 12,
    marginHorizontal: 15,
    backgroundColor: "#1A75CA",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 6,
  },

  itemTitle: {
    fontFamily: "Roboto-medium",
    color: "#f0f8ff",
    fontSize: 22,
  },
});
