import {StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/app/navigations/StackNavigation';

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
