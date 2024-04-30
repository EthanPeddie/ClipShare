import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';

import {AddScreenRouteProps} from '../../navigations/types';
import {styles} from './PreviewStyles';

const PreviewScreen = () => {
  const {video} = useRoute<AddScreenRouteProps>().params || {};
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  const handlePublic = () => {
    console.log(title, description);
  };

  const handleTitle = (text: string) => {
    setTitle(text);
  };
  const handleDescription = (text: string) => {
    setDescription(text);
  };

  const renderVideo = () => (
    <Video
      source={{uri: video}}
      style={styles.video}
      repeat
      paused={false}
      resizeMode="cover"
    />
  );

  const renderTextInput = (
    placeholder: string,
    multiline = false,
    onChangeText: (text: string) => void,
  ) => (
    <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      multiline={multiline}
      textAlignVertical={multiline ? 'top' : 'center'}
      style={[styles.textInput, multiline && styles.textInputMultiline]}
    />
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.videoContainer}>{video && renderVideo()}</View>
      <View style={styles.inputContainer}>
        {renderTextInput('Title', false, handleTitle)}
        {renderTextInput('Description', true, handleDescription)}
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePublic}>
        <Text style={styles.buttonText}>Public</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PreviewScreen;
