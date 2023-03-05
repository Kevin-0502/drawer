import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//importacion de las pantallas 
import Login from '../screens/Login';
import Drawer_Navigation from './Drawer';

export default function LoginNavigation() {

    const Stack=createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='Login' 
    screenOptions={{
      headerTintColor:'#fff',
      headerStyle:{
        backgroundColor: '#394263',
      },
    }}>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Main" component={Drawer_Navigation} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}