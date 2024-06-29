import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import Homepage from './screens/Homepage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen1 from './screens/SplashScreen1';
import SplashScreen2 from './screens/SplashScreen2';
import OnLoad from './screens/OnLoad';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
   <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='OnLoad' >
   <Stack.Screen 
    name='SplashScreen1'
    component={SplashScreen1}
     />
     <Stack.Screen 
    name='SplashScreen2'
    component={SplashScreen2}
     />
    <Stack.Screen 
    name='SplashScreen'
    component={SplashScreen}
     />
     <Stack.Screen 
    name='HomePage'
    component={Homepage}
     />     
          <Stack.Screen 
    name='OnLoad'
    component={OnLoad}
     />     
     
   </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
