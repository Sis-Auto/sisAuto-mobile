import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import SettingsScreen from './Settings';
  
const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, animationEnabled: false }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false, animationEnabled: false }} />
    </Stack.Navigator>
  );
}
