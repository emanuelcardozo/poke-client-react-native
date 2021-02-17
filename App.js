/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

import Main from './components/Main'

const App: () => React$Node = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 8 }}> 
        <Main />
      </SafeAreaView>
    </View>
  );
};

export default App;
