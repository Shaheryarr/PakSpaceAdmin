import {Spinner} from 'native-base';
import React from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import {themeStyleSheet} from '../../../constants';
import styles from './styles';

const Buttons = ({title, onPress, type, loading, disabled}) => {
  return type == 'primary' ? (
    <View style={styles.mainContainer}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(
          'rgba(255,255,255,.3)',
          false,
        )}
        disabled={loading || disabled ? true : false}
        onPress={onPress}>
        <View
          style={
            disabled ? styles.containerPrimaryDisabled : styles.containerPrimary
          }>
          {loading ? (
            <Spinner color={themeStyleSheet.white} />
          ) : (
            <Text
              style={
                disabled
                  ? styles.textStylePrimaryDisabled
                  : styles.textStylePrimary
              }>
              {title.toUpperCase()}
            </Text>
          )}
        </View>
      </TouchableNativeFeedback>
    </View>
  ) : type == 'secondary' ? (
    <View style={styles.mainContainer}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(
          'rgba(255,255,255,.3)',
          false,
        )}
        disabled={loading ? true : false}
        onPress={onPress}>
        <View style={styles.containerSecondary}>
          {loading ? (
            <Spinner color={themeStyleSheet.white} />
          ) : (
            <Text style={styles.textStyleSecondary}>{title.toUpperCase()}</Text>
          )}
        </View>
      </TouchableNativeFeedback>
    </View>
  ) : (
    <View style={styles.mainContainer}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('rgba(255,0,0,.3)', false)}
        disabled={loading ? true : false}
        onPress={onPress}>
        <View style={styles.containerRed}>
          {loading ? (
            <Spinner color={themeStyleSheet.white} />
          ) : (
            <Text style={styles.textStyleWhite}>{title.toUpperCase()}</Text>
          )}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default Buttons;
