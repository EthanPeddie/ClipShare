import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {supabase} from '../../utils/supabase';
import PostLists from './PostLists/PostLists';

export interface Posts {
  id: number;
  description: string;
  title: string;
  user_id: number;
  video: string;
}

const HomeScreen = () => {
  const [posts, setPosts] = useState<Posts[]>();
  useEffect(() => {
    retrieveData();
  }, []);
  const retrieveData = async () => {
    let {data, error} = await supabase
      .from('PostLists')
      .select('*')
      .range(0, 0);
    if (data) {
      console.log(data);
      setPosts(data);
    }
    if (error) {
      console.log(error);
    }
  };
  return (
    <FlatList
      data={posts}
      renderItem={({item, index}) => (
        <View key={index}>
          <PostLists data={item} />
        </View>
      )}
    />
  );
};

export default HomeScreen;
