/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import Carouse from './src/components/Carouse';

const Demo = ['blue', 'yellow', 'black'];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>华师匣子</Text>
      </View>
      <View style={styles.carouselContainer}>
        <Carouse images={Demo} />
      </View>
      <View style={styles.contentContainer} />
      <View style={styles.footerContainer} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    height: 40,
  },
  headerText: {
    fontSize: 25,
  },
  carouselContainer: {
    height: 180,
    width: '100%',
  },
  contentContainer: {
    height: 500,
    width: '100%',
  },
  footerContainer: {
    width: '100%',
    backgroundColor: 'black',
    height: 80,
  },
});

export default App;
