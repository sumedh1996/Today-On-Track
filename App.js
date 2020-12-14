import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Easing } from 'react-native';
import HomeScreen from './Screens/HomeScreen';

import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import HabitDetails from './Screens/HabitDetails';
enableScreens();


const Stack = createSharedElementStackNavigator();
const options = () => ({
  gestureEnabled: false,
  transitionSpec: {
    open: { animation: "timing", config: { duration: 500, easing: Easing.inOut(Easing.ease) } },
    close: { animation: "timing", config: { duration: 500, easing: Easing.inOut(Easing.ease) } }
  },
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress
      }
    }
  }
})
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen' headerMode="none">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="HabitDetails" component={HabitDetails} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
