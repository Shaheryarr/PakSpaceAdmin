import { StyleSheet, Dimensions } from "react-native";
import { themeStyleSheet } from "../../../constants";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  notchContainer: {
    flex: 0,
    backgroundColor: themeStyleSheet.white,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: themeStyleSheet.mainColor
  },
  topContainer: {
    height: '85%',
    backgroundColor: themeStyleSheet.white,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35
  },
  bottomContainer: {
    // height: '15%',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subText: {
    color: themeStyleSheet.white,
    fontSize: 16
  },
  mainText: {
    fontWeight: 'bold'
  },
  secondaryContainer: {
    width: '90%',
    alignSelf: 'center',
    height: height * 0.12,
    justifyContent: 'space-around'
  },
  otpHeading: {
    fontWeight: '700',
    fontSize: 18
  },
  emailLink: {
    color: themeStyleSheet.skyBlue,
    textDecorationLine: 'underline'
  },
  otpContainer: {
    width: '90%',
  },
  codeContainer: {
    borderWidth: 3,
    borderRadius: 15,
  },
  mainOtpContainer: {
    height: height * 0.12,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 50
  }
});

export default styles;