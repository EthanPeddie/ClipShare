import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type AddStackParamList = {
  Home: undefined;
  Preview: {video: string; thumbnail: string} | undefined;
};

export type AddScreenNavigationProps = StackNavigationProp<
  AddStackParamList,
  'Preview'
>;

export type AddScreenRouteProps = RouteProp<AddStackParamList, 'Preview'>;
