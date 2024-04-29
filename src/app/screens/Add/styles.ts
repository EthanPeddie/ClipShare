import {StyleSheet} from 'react-native';
import colors from '../../config/colors';
import font from '../../config/font';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: colors.primary,
    borderRadius: 100,
  },
  textContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  title: {
    color: colors.primary,
    fontFamily: font['outfit-bold'],
    fontSize: 25,
  },
  subTitle: {
    fontFamily: font['outfit-medium'],
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.primary,
    width: 165,
    paddingVertical: 10,
    borderRadius: 30,
    paddingHorizontal: 5,
  },
  buttonText: {
    color: colors.light,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: font['outfit-medium'],
  },
});
