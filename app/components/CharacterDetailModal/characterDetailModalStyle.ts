import {StyleSheet} from 'react-native';
import {Colors, moderateScale} from '../../theme';

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    padding: moderateScale(20),
    minHeight: moderateScale(300),
    backgroundColor: Colors.white,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  outerDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  descriptionContainer: {
    flex: 1,
    width: '90%',
    marginLeft: moderateScale(30),
  },
  modalImage: {
    width: moderateScale(120),
    height: moderateScale(120),
    borderRadius: moderateScale(10),
  },
  modalTitle: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: moderateScale(22),
    marginVertical: moderateScale(10),
  },
  descriptionText: {
    fontWeight: '500',
    color: Colors.black,
    fontSize: moderateScale(15),
  },
  closeButton: {
    marginVertical: moderateScale(20),
    borderRadius: moderateScale(5),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    backgroundColor: Colors.darkBackground,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: moderateScale(16),
  },
});
