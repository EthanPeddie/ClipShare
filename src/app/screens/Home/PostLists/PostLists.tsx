/* eslint-disable react-native/no-inline-styles */
import {View, Dimensions, Pressable, Image, Text} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import colors from '../../../config/colors';
import {Posts} from '../HomeScreen';
import {styles} from './styles';

interface PostLists {
  data: Posts;
}

const PostLists = ({data}: PostLists) => {
  const {width, height} = Dimensions.get('window');
  const bottomTab = useBottomTabBarHeight();
  const FullHeight = height - bottomTab;

  const [paused, setPaused] = useState<boolean>(true);

  const togglePlayPause = () => {
    setPaused(!paused);
  };

  return (
    <Pressable style={styles.container} onPress={togglePlayPause}>
      <Video
        source={{uri: data.video}}
        style={{width, height: FullHeight}}
        resizeMode="cover"
        paused={paused}
        onError={error => console.error('Video playback error:', error)}
      />
      {/* Paused & Play  */}
      {paused === true && (
        <View style={styles.playIconContainer}>
          <Ionicons
            name="play"
            size={40}
            color={colors.light}
            style={styles.playIcon}
          />
        </View>
      )}
      {/* Paused & Play  */}

      {/* Users */}
      <View style={styles.userContainer}>
        <Image source={{uri: data.Users.image}} style={styles.userImage} />
        <Text style={styles.userName}>{data.Users.name}</Text>
      </View>
      {/* Users */}

      {/* Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{data.description}</Text>
      </View>
      {/* Description */}

      {/* Like Icon Container */}
      <View style={styles.iconContainer}>
        <View style={styles.iconItem}>
          <AntDesign name="like1" size={40} color={colors.light} />
          <Text style={styles.iconText}>Like</Text>
        </View>
        <View style={[styles.iconItem, {marginTop: 20}]}>
          <AntDesign name="dislike1" size={40} color={colors.light} />
          <Text style={styles.iconText}>Dislike</Text>
        </View>
        <View style={[styles.iconItem, {marginTop: 20}]}>
          <MaterialIcons name="chat" size={40} color={colors.light} />
          <Text style={styles.iconText}>0</Text>
        </View>
        <View style={[styles.iconItem, {marginTop: 20}]}>
          <FontAwesome5 name="share" size={40} color={colors.light} />
          <Text style={styles.iconText}>Share</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PostLists;
