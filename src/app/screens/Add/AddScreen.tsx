import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import {createThumbnail} from 'react-native-create-thumbnail';

import video_icon from '../../../assets/images/video_icon.png';
import {styles} from './AddStyles';
import {AddScreenNavigationProps} from '../../navigations/types';

const AddScreen = () => {
  const navigation = useNavigation<AddScreenNavigationProps>();

  const openVideoPicker = async () => {
    try {
      const results = await launchImageLibrary({
        mediaType: 'video',
        quality: 0.8,
      });
      if (results.assets && results.assets.length > 0) {
        console.log(results.assets[0].uri);
        videoThumbnail(results.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const videoThumbnail = async (videoUrl: string | undefined) => {
    try {
      if (videoUrl) {
        const thumbnail = await createThumbnail({
          url: videoUrl,
          timeStamp: 10000,
        });

        if (thumbnail) {
          console.log(thumbnail.path);

          navigation.navigate('Preview', {
            video: videoUrl,
            thumbnail: thumbnail.path,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={video_icon} style={styles.image} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>No videos yet!</Text>
        <Text style={styles.subTitle}>
          Explore the moments Upload your first video
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={openVideoPicker}>
        <Text style={styles.buttonText}>UPLOAD</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddScreen;
