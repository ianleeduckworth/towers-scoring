import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootDrawer } from './screens/RootStack';
import { HomeScreen } from './screens/Home/Home';
import { RulesScreen } from './screens/Rules/Rules';

export default function App() {
  const Drawer = RootDrawer;

  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Rules" component={RulesScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar />
    </>
  );
}
