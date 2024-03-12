import React from 'react'
import { Text, SafeAreaView, StyleSheet,Image } from 'react-native';
import Home from './screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from "./StackNavigator";

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
      <StackNavigator/>
      </NavigationContainer>
    )
  }
}