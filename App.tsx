import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootDrawer } from './screens/RootStack';
import { HomeScreen } from './screens/Home/Home';
import { AboutScreen } from './screens/About/About';

export default function App() {
  const Drawer = RootDrawer;

  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar />
    </>
  );
}
