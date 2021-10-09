import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions } from 'react-native';
import { themeStyleSheet } from '../../../constants';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('screen');

const TextField = ({
	placeholder,
	value,
	onChange,
	autoFocus,
	placeholderTextColor,
	label,
	secureTextEntry,
	error,
	textContentType,
	returnKeyType,
	keyboardType,
	customWidth,
	multiline,
	ref
}) => {
	const [visible, setVisible] = useState(!secureTextEntry);

	return (
		<View>
			<View
				style={{
					...styles.inputContainer,
					width: customWidth ? customWidth : width * 0.85,
					borderColor: error ? themeStyleSheet.red : themeStyleSheet.mainColor,
				}}>
				<View style={styles.innerTextInput}>
					<View>
						<Text
							style={{
								...styles.labelStyle,
								color: error ? themeStyleSheet.red : null,
							}}>
							{label}
						</Text>
						<TextInput
							placeholder={placeholder}
							value={value}
							onChange={onChange}
							autoFocus={autoFocus}
							placeholderTextColor={placeholderTextColor}
							style={styles.textStyle}
							returnKeyType={returnKeyType}
							secureTextEntry={!visible}
							onChangeText={text => onChange(text)}
							textContentType={textContentType}
							keyboardType={keyboardType}
							autoCapitalize={'none'}
							multiline={multiline}
							ref={ref}
						/>
					</View>
					{textContentType == 'password' && (
						<Icon
							name={visible ? 'eye' : 'eye-off'}
							color={themeStyleSheet.mainColor}
							size={21}
							onPress={() => setVisible(!visible)}
						/>
					)}
				</View>
			</View>
			<Text style={styles.error}>{error}</Text>
		</View>
	);
};

export default TextField;
