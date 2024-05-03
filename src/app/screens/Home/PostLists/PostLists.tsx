/* eslint-disable react-native/no-inline-styles */
import {View, Dimensions, Pressable} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../../config/colors';
import {Posts} from '../HomeScreen';

interface PostLists {
  data: Posts;
}

const PostLists = ({data}: PostLists) => {
  const {width, height} = Dimensions.get('window');
  const bottomTab = useBottomTabBarHeight();
  const FullHeight = height - bottomTab;

  const [paused, setPaused] = useState<boolean>(false);

  const togglePlayPause = () => {
    setPaused(!paused);
  };
  return (
    <Pressable style={{flex: 1}} onPress={togglePlayPause}>
      <Video
        source={{uri: data.video}}
        style={{width, height: FullHeight}}
        resizeMode="cover"
        paused={paused}
        onError={error => console.error('Video playback error:', error)}
      />
      {paused === true && (
        <View
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: [{translateX: -15}, {translateY: -15}],
          }}>
          <Ionicons
            name="play"
            size={40}
            color={colors.light}
            style={{backgroundColor: colors.transnp, padding: 10}}
          />
        </View>
      )}
    </Pressable>
  );
};

export default PostLists;
