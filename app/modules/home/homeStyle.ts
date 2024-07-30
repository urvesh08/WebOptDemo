import {StyleSheet} from 'react-native';
import {
  Colors,
  GlobalMetrics,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: moderateScale(25),
    marginBottom: moderateScale(10),
  },
  titleText: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: moderateScale(22),
  },
  iconAndInputContaine: {
    width: '80%',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(20),
    paddingHorizontal: moderateScale(20),
  },
  searchAndFilterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  searchIcon: {
    height: moderateScale(20),
    width: moderateScale(20),
  },
  outerTxtInput: {
    width: '100%',
  },
  searchInput: {
    width: '95%',
    backgroundColor: Colors.white,
    fontSize: moderateScale(17),
    borderColor: Colors.gradient,
    borderRadius: moderateScale(10),
    marginHorizontal: moderateScale(10),
    paddingVertical: GlobalMetrics.isIos
      ? moderateScale(15)
      : moderateScale(10),
    color: Colors.black,
  },
  filterIcon: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
  filterMenu: {
    width: '40%',
    elevation: 20,
    marginTop: GlobalMetrics.isIos ? 0 : moderateScale(50),
    backgroundColor: Colors.black,
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(20),
  },
  menuText: {
    textAlign: 'center',
    color: Colors.white,
    textAlignVertical: 'center',
    fontSize: moderateScale(20),
  },
  list: {
    flexGrow: 1,
  },
  paginationContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
  },
  pageButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: moderateScale(10),
    height: moderateScale(40),
    borderRadius: moderateScale(5),
    backgroundColor: Colors.darkGray,
    paddingHorizontal: horizontalScale(20),
  },
  pageButtonActive: {
    backgroundColor: Colors.darkOragne,
  },
  pageButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: moderateScale(15),
  },
  separator: {
    height: 1,
    backgroundColor: Colors.white,
    marginVertical: verticalScale(5),
  },
  noDatacontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '500',
    fontSize: moderateScale(16),
    color: Colors.placeholder,
  },
});

export default styles;
