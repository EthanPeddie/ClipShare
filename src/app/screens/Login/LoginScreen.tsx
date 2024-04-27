import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {UserMetadata} from '@supabase/supabase-js';

import logo from '../../../assets/images/google.png';
import background from '../../../assets/images/background.jpg';
import font from '../../config/font';
import colors from '../../config/colors';
import {supabase} from '../../utils/supabase';

const LoginScreen = () => {
  const {width, height} = Dimensions.get('window');

  GoogleSignin.configure({
    webClientId:
      '162355051324-5se238mbg61o201q79atuepcd60j32lm.apps.googleusercontent.com',
    offlineAccess: true,
    forceCodeForRefreshToken: true,
    profileImageSize: 120,
  });

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo.idToken) {
        const {data, error} = await supabase.auth.signInWithIdToken({
          provider: 'google',
          token: userInfo.idToken,
        });
        if (data) {
          saveDataToSupabase(data.user?.user_metadata);
          // console.log(data.user?.user_metadata.full_name);
        }
        if (error) {
          console.log(error);
        }
      } else {
        throw new Error('No ID token present!');
      }
    } catch (error) {
      console.error('Google Sign-In error:', error);
    }
  };

  const saveDataToSupabase = async (users: UserMetadata | undefined) => {
    await supabase
      .from('Users')
      .insert({
        name: users?.full_name,
        email: users?.email,
        image: users?.avatar_url,
      })
      .select();
  };
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

      <TouchableOpacity style={styles.button} onPress={signInWithGoogle}>
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
