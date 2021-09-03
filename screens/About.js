import React, { Component, useState } from 'react'
import { View, Text, SafeAreaView, Platform, StatusBar, ImageBackground } from 'react-native'
import * as Font from 'expo-font'
import {AboutLoading} from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'



const About = () => {

  return (
    <View style={styles.container}>
     <ImageBackground style={styles.topImg} source={require('../assets/virus.jpg')} resizeMode="cover">
       <View style={styles.topBox}>
         <Text style={styles.title}>ABOUT</Text>
       </View>
     </ImageBackground>
     <View style={styles.statusBox}>
       <Text style={styles.statusTitle2}>DEVELOPED BY NOOR RAIHAN</Text>
     </View>
    </View>
  );  
}


const styles = {
   container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
   },

   topBox: {
    backgroundColor:'rgba(196,4,57,0.9)',
    height: 350,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
   },

   topImg: {
     position:'absolute',
     width: '100%',
     zIndex: -1
   },

   title: {
    color: '#FFFFFF',
    // fontFamily: 'Heavitas',
    paddingTop: '5%',
    paddingLeft: '5%',
    fontSize: 25,
    fontWeight: 'bold'
   },

   statusBox: {
    backgroundColor: 'white',
    justifyContent: 'center',
    height: '100%',
    width: '85%',
    marginTop: '17%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowRadius: 5,
    elevation: 5,
    borderRadius: 30,
   },

   detailBox: {
    backgroundColor: 'white',
    height: '40%',
    width: '85%',
    marginTop: '5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowRadius: 5,
    elevation: 5,
    borderRadius: 30,
   },

   statusTitle: {
     textAlign: 'center',
     fontSize: 20,
     paddingTop: '5%',
     fontWeight: 'bold',
     color: '#5A5A5A'
   },

   statusTitle2: {
    textAlign: 'left',
    fontSize: 20,
    paddingTop: '5%',
    paddingLeft: '10%',
    fontWeight: 'bold',
    color: '#000'
  },

   subHead: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000'
   }
};

export default About;

