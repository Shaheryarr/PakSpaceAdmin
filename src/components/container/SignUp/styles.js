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
    borderBottomRightRadius: 35,
  },
  bottomContainer: {
    height: '15%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subText: {
    color: themeStyleSheet.white,
    fontSize: 16,
  },
  mainText: {
    fontWeight: 'bold'
  },
  heading: {
    textAlign: 'left',
    width: width * 0.85,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
  },
  subHeading: {
    textAlign: 'left',
    width: width * 0.85,
    fontSize: 16,
    marginBottom: 30,
  },
});

export default styles;