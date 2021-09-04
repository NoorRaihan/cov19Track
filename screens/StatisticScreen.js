import React, { Component, useState } from 'react'
import { View, Text, SafeAreaView, Platform, StatusBar, ImageBackground, Dimensions } from 'react-native'
import * as Font from 'expo-font'
import {StatisticScreenLoading} from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LineChart, BarChart } from "react-native-chart-kit"

const data = {
  labels: ["30/8", "31/8", "1/9", "2/9", "3/9", "4/9", "5/9"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 150, 200],
    }
  ],
  legend: ["New confirmed cases"] // optional
};

const chartConfig = {
  backgroundGradientFrom: "#ffff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#ffff",
  backgroundGradientToOpacity: 0,
  decimalPlaces: 0,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
};


const StatisticScreen = () => {

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.topImg} source={require('../assets/virus.jpg')} resizeMode="cover">
       <View style={styles.topBox}>
         <Text style={styles.title}>STATISTIC</Text>
       </View>
      </ImageBackground>

      <View style={styles.statusBox}>
        <Text style={styles.statusTitle2}>COVID-19 CASES IN MALAYSIA</Text>
        <Text style={styles.statussmallTitle2}>New confirmed cases in one week</Text>
        <LineChart data={data} width={350} height={200} chartConfig={chartConfig} bezier/>
      </View>

      <View style={styles.detailBox}>
       <Text style={styles.statusTitle2}>TESsT</Text>
      <View>

       </View>
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
    height: '40%',
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
    textAlign: 'center',
    fontSize: 15,
    paddingTop: '5%',
    fontWeight: 'bold',
    color: '#000'
  },

  statussmallTitle2: {
    textAlign: 'center',
    fontSize: 12,
    color: '#000'
  },

   subHead: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000'
   },

};

export default StatisticScreen;

