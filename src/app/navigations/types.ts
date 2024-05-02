import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type AddStackParamList = {
  Add: undefined;
  Preview: {video: string; thumbnail: string};
};

export type AddScreenNavigationProps = StackNavigationProp<
  AddStackParamList,
  'Preview'
>;

export type AddScreenRouteProps = RouteProp<AddStackParamList, 'Preview'>;
