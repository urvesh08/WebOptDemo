import {StyleSheet} from 'react-native';
import {Colors, moderateScale, verticalScale} from '../../theme';

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    elevation: 20,
    shadowOpacity: 0.3,
    margin: moderateScale(9),
    shadowColor: Colors.black,
    padding: moderateScale(10),
    backgroundColor: Colors.white,
    shadowRadius: moderateScale(5),
    borderRadius: moderateScale(10),
    shadowOffset: {width: 0, height: 2},
  },
  image: {
    width: '100%',
    height: moderateScale(140),
    borderRadius: moderateScale(10),
  },
  info: {
    marginTop: moderateScale(8),
  },
  name: {
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.black,
    fontSize: moderateScale(17),
    marginVertical: verticalScale(5),
  },
});
