/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import TestComp from '@components/TestComp';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <TestComp />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
