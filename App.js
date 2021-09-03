import React, { Component, useState } from 'react'
import { View, Text, SafeAreaView, Platform, StatusBar, ImageBackground } from 'react-native'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

//import screens
import HomeScreen from './screens/HomeScreen'
import StatisticScreen from './screens/StatisticScreen'
import Symptoms from './screens/Symptoms'
import About from './screens/About'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer> 
      <Tab.Navigator barStyle={{ backgroundColor: '#EA0449' }} screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Statistic') {
            iconName = 'stats-chart';
          } else if(route.name === 'Status') {
            iconName = 'newspaper';
          } else if(route.name === 'About') {
            iconName = 'information-circle';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#f26690',
        tabBarStyle: {
          backgroundColor: '#EA0449'
        },
        headerShown: false
      })}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Statistic" component={StatisticScreen} />
        <Tab.Screen name="Status" component={Symptoms} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = {
   navContainer: {
      backgroundColor: 'red',
   },
};

export default App;

