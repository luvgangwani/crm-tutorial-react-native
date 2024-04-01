/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider, useSelector } from 'react-redux';
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/components/Navigation';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
