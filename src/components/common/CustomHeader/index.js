import React from 'react';
import { StyleSheet, Dimensions, View, Text, TouchableOpacity } from "react-native";
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { height, width } = Dimensions.get("window");

const CustomHeader = ({ firstIcon, onPressFirstIcon, title, secondIcon, save, thirdIcon, onPressThirdIcon, leaderboard }) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.firstIconContainer} onPress={onPressFirstIcon}>
                <Icon name={firstIcon} style={styles.icon} size={40} />
            </TouchableOpacity>

            <View style={styles.headingContainer}>
                <Text style={styles.heading}>{title}</Text>
            </View>

            <TouchableOpacity style={{...styles.secondIconContainer, width: '10%'}}>
                <Icon name={secondIcon} style={styles.icon} size={40} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondIconContainer} onPress={onPressThirdIcon}>
                {save ? (
                    <View style={styles.saveContainer}>
                        <Text style={styles.saveText}>Post</Text>
                    </View>
                ) : leaderboard ? (
                    <Text style={styles.leaderboard}>Leaderboard</Text>
                ) : (
                    <Icon name={thirdIcon} style={styles.icon} size={40} />
                )}
            </TouchableOpacity>
        </View>
    )
}

export default CustomHeader;