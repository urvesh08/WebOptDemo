import {StyleSheet} from 'react-native';
import {Colors, moderateScale, verticalScale} from '../../theme';

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: moderateScale(9),
    padding: moderateScale(10),
    borderRadius: moderateScale(8),
  },
  image: {
    width: '100%',
    height: moderateScale(150),
    borderRadius: moderateScale(10),
  },
  info: {
    marginTop: moderateScale(8),
  },
  name: {
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.black,
    fontSize: moderateScale(18),
    marginVertical: verticalScale(5),
  },
  imageContainer: {
    elevation: 15,
  },
});
