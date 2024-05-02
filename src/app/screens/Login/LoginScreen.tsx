import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {UserMetadata} from '@supabase/supabase-js';

import {supabase} from '../../utils/supabase';
import logo from '../../../assets/images/google.png';
import background from '../../../assets/images/background.jpg';
import {styles} from './styles';

type RootStackParamList = {
  navigate(arg0: string): unknown;
  Home: undefined;
};

const LoginScreen = () => {
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation<RootStackParamList>();

  // useEffect(() => {
  //   checkAuthentication();
  // }, []);

  // const checkAuthentication = async () => {
  //   const userToken = await AsyncStorage.getItem('userToken');
  //   if (userToken) {
  //     navigation.navigate('HomeTabNavigation');
  //   }
  // };

  const configureGoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId:
        '162355051324-5se238mbg61o201q79atuepcd60j32lm.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
      profileImageSize: 120,
    });
  };

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (!userInfo.idToken) {
        throw new Error('No ID token present!');
      }

      const {data, error} = await supabase.auth.signInWithIdToken({
        provider: 'google',
        token: userInfo.idToken,
      });

      if (data) {
        saveDataToSupabase(data.user?.user_metadata);
        await AsyncStorage.setItem(
          'userToken',
          data.session?.access_token || '',
        );
        navigation.navigate('HomeTabNavigation');
      }

      if (error) {
        console.log(error);
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

  configureGoogleSignIn();

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

export default LoginScreen;
