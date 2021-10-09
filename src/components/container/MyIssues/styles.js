import { StyleSheet, Dimensions } from "react-native";
import { themeStyleSheet } from "../../../constants";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		height: 400,
		width: 400,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	headingContainer: {
		height: height * 0.1,
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 0.5,
		borderColor: themeStyleSheet.lightgray,
		backgroundColor: themeStyleSheet.white,
		marginBottom: 10,
	},
	heading: {
		fontSize: 22,
		fontWeight: '700',
		color: themeStyleSheet.mainColor
	},
	profileContainer: {
		height: 45,
		width: 45,
		backgroundColor: themeStyleSheet.mainColor,
		borderRadius: 45 / 2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	profileText: {
		color: themeStyleSheet.white,
		fontSize: 16
	},
	notchContainer: {
		flex: 0,
		backgroundColor: themeStyleSheet.white,
	},
	mainContainer: {
		flex: 1,
	},
	fabContainer: {
		position: 'absolute',
		alignSelf: 'center',
		bottom: 25
	},
	authorRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	modalContainer: {
		backgroundColor: themeStyleSheet.white,
		width: width,
		borderRadius: 20,
		alignItems: 'center'
	},
	bottomList: {
		marginBottom: 100
	},
	postContainer: {
		width: width,
		alignSelf: 'center',
		backgroundColor: themeStyleSheet.white,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.20,
		shadowRadius: 1.41,
		elevation: 2,
		marginBottom: 10,
		borderRadius: 25
	},
	innerPost: {
		width: width * 0.9,
		alignSelf: 'center',
		paddingVertical: 15,
	},
	author: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	authorName: {
		marginLeft: 10,
		fontWeight: 'bold',
		fontSize: 16
	},
	created_at: {
		fontSize: 12
	},
	editDetails: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	contentContainer: {
		marginTop: 10,
	},
	img: {
		height: 250,
		width,
		marginVertical: 20
	},
	reactionInfo: {
		width: '100%',
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 15,
	},
	align: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	likeCommentContainer: {
		width,
		alignSelf: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 15,
		borderTopWidth: 0.5,
		borderColor: themeStyleSheet.lightgray,
		paddingTop: 13,
	},
	likeBtn: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '50%',
	},
	carouselContainer: {
		flex: 1,
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	carouselItem: {
		height: '90%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default styles;