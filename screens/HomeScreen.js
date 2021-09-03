import React, { Component, useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Platform, StatusBar, ImageBackground, Image, ScrollView } from 'react-native'
import * as Font from 'expo-font'
import moment from 'moment'
import {HomeScreenLoading} from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'



const HomeScreen = () => {
  const [currDate,setCurrDate] = useState('');

  useEffect(() => {
    var day = new Date().getDate();
    var moYear = moment().format('MMMM YYYY');

    setCurrDate(day + ' ' + moYear.toUpperCase());
  },[])

  return (
    <ScrollView>
      <View style={styles.container}>
        <ScrollView>
          
        </ScrollView>
      <ImageBackground style={styles.topImg} source={require('../assets/virus.jpg')} resizeMode="cover">
        <View style={styles.topBox}>
          <Text style={styles.title}>COVID-19 TRACK</Text>
        </View>
      </ImageBackground>

      <View style={styles.statusBox}>
        <Text style={styles.statusTitle}>COVID-19 IN MALAYSIA</Text>
        <Text style={styles.subHead}>{currDate}</Text>

        <View style={styles.wrap}>

          <View style={styles.wrapInner}>
            <Text style={styles.bigNumber}>23,564</Text>
            <Text>New confirmed cases</Text>
          </View>

          <View style={styles.wrapInner}>
            <Text style={styles.bigNumber}>21,448</Text>
            <Text>New recovered cases</Text>
          </View>

        </View>

        <View style={styles.wrapInner}>
          <Image style={styles.flag} source={require('../assets/flag-circle.png')}/>
        </View>

        <View style={styles.wrap}>

          <View style={styles.wrapInner}>
            <Text style={styles.bigNumber}>257,417</Text>
            <Text>Total active cases</Text>
          </View>

          <View style={styles.wrapInner}>
            <Text style={styles.bigNumber}>233</Text>
            <Text>New death cases</Text>
          </View>

        </View>
      </View>

      <View>
        <Text style={styles.statusTitle}>25,655</Text>
        <Text style={styles.subHead}>TOMORROW CASE PREDICTION</Text>
      </View>

      <View style={styles.detailBox}>
        <Text style={styles.statusTitle2}>CASES DETAILS</Text>
        
        <View style={styles.wrap}>
          <View style={styles.wrapInner}>
            <Text>New confirmed cases</Text>
          </View>
          <View style={styles.wrapInner}>
            <Text>23,564</Text>
          </View>
        </View>

        <View style={styles.wrap}>
          <View style={styles.wrapInner}>
            <Text>New recovered cases</Text>
          </View>
          <View style={styles.wrapInner}>
            <Text>23,564</Text>
          </View>
        </View>

        <View style={styles.wrap}>
          <View style={styles.wrapInner}>
            <Text>New death cases</Text>
          </View>
          <View style={styles.wrapInner}>
            <Text>23,564</Text>
          </View>
        </View>

        <View style={styles.wrap}>
          <View style={styles.wrapInner}>
            <Text>Total death cases</Text>
          </View>
          <View style={styles.wrapInner}>
            <Text>23,564</Text>
          </View>
        </View>

        <View style={styles.wrap}>
          <View style={styles.wrapInner}>
            <Text>Total recovered cases</Text>
          </View>
          <View style={styles.wrapInner}>
            <Text>23,564</Text>
          </View>
        </View>

        <View style={styles.wrap}>
          <View style={styles.wrapInner}>
            <Text>Total  cases</Text>
          </View>
          <View style={styles.wrapInner}>
            <Text>23,564</Text>
          </View>
        </View>

        <View style={styles.wrap}>
          <View style={styles.wrapInner}>
            <Text>Total active cases</Text>
          </View>
          <View style={styles.wrapInner}>
            <Text>23,564</Text>
          </View>
        </View>

      </View>
      </View>
    </ScrollView>
  );
};


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
    paddingRight: 20,
    paddingLeft: 20,
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
    paddingRight: 20,
    paddingLeft: 20,
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
    marginBottom: '5%',
    textAlign: 'left',
    fontSize: 20,
    paddingTop: '5%',
    paddingLeft: '3%',
    fontWeight: 'bold',
    color: '#000'
  },

   subHead: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000'
   },

   wrap: {
     padding: 10,
     flexDirection: 'row',
     flexWrap: 'wrap',
     height: '10%',
     justifyContent: 'space-between'
   },

   wrapInner: {
    alignItems: 'center',
   },

   bigNumber: {
     fontSize: 25,
     color: 'red',
     fontWeight: 'bold'
   },
   
   flag: {
     marginTop: '15%',
     width: 80,
     height:80,
     resizeMode: 'contain',
   },

   rightdir: {
     right:0
   }

};

export default HomeScreen;

