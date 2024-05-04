import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';
import font from '../../../config/font';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  playIconContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -15}, {translateY: -15}],
  },
  playIcon: {
    backgroundColor: colors.transnp,
    padding: 10,
  },
  userContainer: {
    position: 'absolute',
    bottom: '15%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  userName: {
    color: colors.light,
    fontFamily: font['outfit-medium'],
    fontSize: 15,
  },
  descriptionContainer: {
    position: 'absolute',
    bottom: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 15,
  },
  descriptionText: {
    color: colors.light,
    fontFamily: font['outfit-medium'],
    fontSize: 18,
  },
  iconContainer: {
    position: 'absolute',
    bottom: '10%',
    right: '2%',
  },
  iconItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: colors.light,
    fontFamily: font['outfit-regular'],
  },
});
