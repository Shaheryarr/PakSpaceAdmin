import {StyleSheet, Dimensions} from 'react-native';
import {themeStyleSheet} from '../../../constants';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 35,
    overflow: 'hidden',
  },
  containerSecondary: {
    height: height * 0.07,
    paddingHorizontal: 25,
    width: width * 0.8,
    backgroundColor: themeStyleSheet.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    elevation: 1,
  },
  containerRed: {
    height: height * 0.07,
    paddingHorizontal: 25,
    width: width * 0.8,
    backgroundColor: themeStyleSheet.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    elevation: 1,
  },
  textStyleWhite: {
    fontSize: 16,
    fontWeight: 'bold',
    color: themeStyleSheet.white,
  },
  textStyleSecondary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: themeStyleSheet.white,
  },
  containerPrimary: {
    height: height * 0.05,
    paddingHorizontal: 25,
    width: width * 0.8,
    backgroundColor: themeStyleSheet.mainColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    elevation: 1,
  },
  containerPrimaryDisabled: {
    height: height * 0.05,
    paddingHorizontal: 25,
    width: width * 0.8,
    backgroundColor: themeStyleSheet.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    elevation: 1,
    borderWidth: 2,
    borderColor: themeStyleSheet.lightgray,
  },
  textStylePrimary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: themeStyleSheet.white,
  },
  textStylePrimaryDisabled: {
    fontSize: 16,
    fontWeight: 'bold',
    color: themeStyleSheet.lightgray,
  },
});

export default styles;
