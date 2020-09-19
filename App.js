  
import React, {useState} from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home';
import Slangs from './screens/slangs';
import Phrases from './screens/phrases';
import Topics from './screens/topics';
import Detail from './screens/detail';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();

const HomeStack = () => {
  return(

      <Stack.Navigator >
       <Stack.Screen name="Home" component={Home}/>
       <Stack.Screen name="Slangs" component={Slangs}/>
       <Stack.Screen name="Phrases" component={Phrases}/>
       <Stack.Screen name="Topics" component={Topics}/>
       <Stack.Screen name="Detail" component={Detail}/>
     </Stack.Navigator>

  );

}
     
const BottomnNav = () => {

    return (
      <BottomTab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        style={{ backgroundColor: 'tomato' }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        
      </BottomTab.Navigator>
    );

  

}
 

const getFonts = () => {
  return Font.loadAsync(
    {
      'Roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    }
  );
}









export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
 

  // make sure font is loaded before rendering home screen
  if (fontsLoaded) {
    return (

    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        style={{ backgroundColor: 'tomato' }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        
      </BottomTab.Navigator>
    </NavigationContainer>
      // returns the screen in the stack
      
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }

}