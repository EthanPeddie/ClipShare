import {StyleSheet, View} from 'react-native';
import React from 'react';
import LoginScreen from './src/app/screens/Login/LoginScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
