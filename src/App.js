/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import TestComp from '/components/TestComp';
import Colors from '/helpers/Colors';
const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.primary}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <TestComp />
      </SafeAreaView>
    </View>
  );
};

export default App;
