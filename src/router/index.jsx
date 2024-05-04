import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Beranda, Splash, Akun, Pesanan } from '../screens';
import { BottomNavigasi } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigasi {...props} />}>
      <Tab.Screen name="Beranda" component={Beranda} />
      <Tab.Screen name="Pesanan" component={Pesanan} />
      <Tab.Screen name="Akun" component={Akun} />
    </Tab.Navigator>

  )
}


const Router  = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default Router 

const styles = StyleSheet.create({})