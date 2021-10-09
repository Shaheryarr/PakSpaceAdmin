import {StyleSheet, Dimensions} from 'react-native';
import {themeStyleSheet} from '../../../constants';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    width,
    height: height * 0.1,
    flexDirection: 'row',
    backgroundColor: themeStyleSheet.white,
  },
  firstIconContainer: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: themeStyleSheet.mainColor,
  },
  headingContainer: {
    height: '100%',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  heading: {
    fontSize: 18,
    fontWeight: '500',
    // color: themeStyleSheet.mainColor
  },
  secondIconContainer: {
    height: '100%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveContainer: {
    backgroundColor: themeStyleSheet.mainColor,
    height: '50%',
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  saveText: {
    color: themeStyleSheet.white,
  },
  leaderboard: {
    // fontSize: 12,
    color: themeStyleSheet.mainColor,
    textDecorationLine: 'underline',
  },
});

export default styles;
