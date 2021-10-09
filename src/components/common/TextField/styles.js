import { StyleSheet, Dimensions } from 'react-native';
import { themeStyleSheet } from '../../../constants';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
	inputContainer: {
		height: 60,
		borderWidth: 1,
		justifyContent: 'center',
		borderRadius: 5,
		backgroundColor: themeStyleSheet.white
	},
	textStyle: {
		marginLeft: 10,
		fontSize: 18,
		paddingVertical: 0,
		color: 'black',
		width: width * 0.7
	},
	labelStyle: {
		marginLeft: 10,
		fontSize: 10,
		marginBottom: 5,
	},
	error: {
		color: themeStyleSheet.red,
		fontSize: 12,
	},
	innerTextInput: {
		flexDirection: 'row',
		alignItems: 'center',
		width: width * 0.8,
		justifyContent: 'space-between'
	}
});

export default styles;
