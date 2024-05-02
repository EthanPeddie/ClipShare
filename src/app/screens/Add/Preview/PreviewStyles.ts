import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';
import font from '../../../config/font';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light,
  },
  videoContainer: {
    marginVertical: 20,
  },
  video: {
    width: 300,
    height: 250,
    borderRadius: 10,
  },
  inputContainer: {
    alignItems: 'center',
  },
  textInput: {
    borderRadius: 10,
    width: 300,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontFamily: font['outfit-medium'],
    fontSize: 15,
    color: colors.black,
  },
  textInputMultiline: {
    height: 100,
    marginTop: 20,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: colors.light,
    fontFamily: font['outfit-bold'],
  },
});
