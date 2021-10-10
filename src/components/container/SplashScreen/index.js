import React, { useEffect, useState } from 'react';
import { useToast } from 'native-base';
import { SafeAreaView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../redux/actions';
import { handleLogout, isInternetConnected } from '../../../constants';
import SScreen from 'react-native-splash-screen'
import styles from './styles';
import { getUserAuthentication } from '../../../SyncServices';

const SplashScreen = ({ navigation }) => {

    const [loading, setLoading] = useState(true)

    const user = useSelector(state => state.user);

    const Toast = useToast();

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('User: ', user)

        handleAuthentication()
    }, [])

    const handleAuthentication = () => {
        if (user) {
            isInternetConnected().then(() => {
                getUserAuthentication().then(res => {
                    SScreen.hide()
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'appRoutes' }],
                    });
                }).catch(err => {
                    SScreen.hide()
                    handleLogout(dispatch, navigation)
                })
            }).catch(err => {
                SScreen.hide()
                Toast.show({
                    title: 'Unable to connect to the internet'
                })
            })
        } else {
            SScreen.hide()
            navigation.reset({
                index: 0,
                routes: [{ name: 'GettingStarted' }],
            });
        }
    }

    return (
        <SafeAreaView>
            <Text>Splash Screen</Text>
        </SafeAreaView>
    )
}

export default SplashScreen;