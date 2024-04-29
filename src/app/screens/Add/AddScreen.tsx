import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

import video_icon from '../../../assets/images/video_icon.png';

const AddScreen = () => {
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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>UPLOAD</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddScreen;
