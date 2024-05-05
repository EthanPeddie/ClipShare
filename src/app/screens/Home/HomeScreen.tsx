import {View, FlatList, Dimensions} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import {supabase} from '../../utils/supabase';
import PostLists from './PostLists/PostLists';

interface UserProps {
  name: string;
  email: string;
  image: string;
}

export interface Posts {
  id: number;
  description: string;
  title: string;
  user_id: number;
  video: string;
  Users: UserProps;
}

const HomeScreen = () => {
  const [posts, setPosts] = useState<Posts[]>();
  const flatListRef = useRef<FlatList>(null);
  const {height} = Dimensions.get('window');
  const bottomTabHeight = useBottomTabBarHeight();
  const fullHeight = height - bottomTabHeight;
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    retrieveData();
  }, []);
  const retrieveData = async () => {
    try {
      setLoading(true);
      let {data, error} = await supabase
        .from('PostLists')
        .select('*,Users(name,email,image)')
        .order('id', {ascending: false});

      if (data) {
        console.log(data);
        setPosts(data);
        setLoading(false);
      }
      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const scrollToIndex = (index: any) => {
    flatListRef.current?.scrollToIndex({animated: true, index});
  };
  return (
    <FlatList
      ref={scrollToIndex}
      pagingEnabled
      data={posts}
      onRefresh={retrieveData}
      refreshing={loading}
      snapToInterval={fullHeight}
      renderItem={({item, index}) => (
        <View key={index}>
          <PostLists data={item} />
        </View>
      )}
    />
  );
};

export default HomeScreen;
