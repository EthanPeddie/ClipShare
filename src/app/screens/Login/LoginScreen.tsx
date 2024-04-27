import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import logo from '../../../assets/images/google.png';
import background from '../../../assets/images/background.jpg';
import font from '../../config/font';
import colors from '../../config/colors';

const LoginScreen = () => {
  const {width, height} = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Image
        source={background}
        style={[styles.backgroundImage, {width, height}]}
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>ClipShare</Text>
        <Text style={styles.subtitle}>
          Create, share, and discover short clips effortlessly!
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Image source={logo} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Sign In With Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  overlay: {
    backgroundColor: colors.transnp,
    position: 'absolute',
    top: 65,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  title: {
    fontSize: 40,
    fontFamily: font['outfit-bold'],
    color: colors.light,
  },
  subtitle: {
    fontFamily: font['outfit-regular'],
    fontSize: 20,
    textAlign: 'center',
    color: colors.light,
    marginTop: 10,
  },
  button: {
    backgroundColor: colors.white,
    width: 350,
    position: 'absolute',
    bottom: 60,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  buttonIcon: {
    width: 40,
    height: 40,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: font['outfit-medium'],
    textAlign: 'center',
  },
});

export default LoginScreen;
