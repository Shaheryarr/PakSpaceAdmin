import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Button from '../../common/Buttons';

const GettingStarted = ({ navigation }) => {

    const handleSignUp = () => {
        navigation.navigate('SignUp');
    };

    const handleLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <>
            <SafeAreaView style={styles.notchContainer} />
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.topContainer}>
                    <View style={styles.carouselContainer}>
                        {/* <Carousel
                            data={data}
                            renderItem={renderItem}
                            sliderWidth={SLIDER_WIDTH}
                            itemWidth={ITEM_WIDTH}
                            inactiveSlideShift={0}
                            enableSnap
                        /> */}
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button
                            type="secondary"
                            title={'get yourself heard'}
                            onPress={handleSignUp}
                        />
                    </View>
                </View>

                <View style={styles.bottomContainer}>
                    <TouchableOpacity onPress={handleLogin}>
                        <Text style={styles.subText}>
                            Already Registered? <Text style={styles.mainText}>Login</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

export default GettingStarted;