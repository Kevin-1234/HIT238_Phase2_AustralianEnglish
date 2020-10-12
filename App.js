import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import Slangs from "./screens/slangs";
import Phrases from "./screens/phrases";
import Topics from "./screens/topics";
import Detail from "./screens/detail";
import Notebook from "./screens/noteBook";
import SlangNote from "./screens/slangNote";
import PhraseNote from "./screens/phraseNote";
import TopicNote from "./screens/topicNote";
import Practice from "./screens/practice";
import PracticeItemList from "./screens/practiceItemList";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#20b2aa" },
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: "bold",
          color: "#f0ffff",
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Slang Words" component={Slangs} />
      <Stack.Screen name="Phrases" component={Phrases} />
      <Stack.Screen name="Topics" component={Topics} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

const NotebookStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#20b2aa" },
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: "bold",
          color: "#f0ffff",
        },
      }}
    >
      <Stack.Screen name="Notebook" component={Notebook} />
      <Stack.Screen name="Slang Notes" component={SlangNote} />
      <Stack.Screen name="Phrase Notes" component={PhraseNote} />
      <Stack.Screen name="Topic Notes" component={TopicNote} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

const PracticeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#20b2aa" },
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: "bold",
          color: "#f0ffff",
        },
      }}
    >
      <Stack.Screen name="Practice" component={Practice} />
      <Stack.Screen name="Practice Item List" component={PracticeItemList} />
    </Stack.Navigator>
  );
};

const getFonts = () => {
  return Font.loadAsync({
    "Roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // make sure font is loaded before rendering home screen
  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <BottomTab.Navigator
          initialRouteName="Home"
          activeColor="#f0ffff"
          barStyle={{ backgroundColor: "#20b2aa" }}
        >
          <BottomTab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarLabel: "Home",
              tabBarColor: "#f0ffff",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <BottomTab.Screen
            name="NotebookStack"
            component={NotebookStack}
            options={{
              tabBarLabel: "Notebook",
              tabBarColor: "#f0ffff",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="notebook-outline"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <BottomTab.Screen
            name="PracticeStack"
            component={PracticeStack}
            options={{
              tabBarLabel: "Practice",
              tabBarColor: "#f0ffff",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="school" color={color} size={26} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
      // returns the screen in the stack
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
