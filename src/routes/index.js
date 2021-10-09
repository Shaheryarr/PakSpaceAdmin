import React from 'react';
import { Dimensions, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { themeStyleSheet } from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from '../components/container/SplashScreen';
import NewsFeed from '../components/container/NewsFeed';
import Issues from '../components/container/Issues';
import Profile from '../components/container/Profile';
import GettingStarted from '../components/container/GettingStarted';
import Login from '../components/container/Login';
import SignUp from '../components/container/SignUp';

const { height, width } = Dimensions.get('window');

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
    let iconName;

    switch (route.name) {
        case 'NewsFeed':
            iconName = 'newspaper-variant-outline';
            break;

        case 'Issues':
            iconName = 'apps';
            break;

        case 'Profile':
            iconName = 'face-profile';
            break;

        default:
            break;
    }

    return <Icon name={iconName} color={color} size={30} />;
};

const Tabs = () => {
    return (
        <Tab.Navigator initialRouteName={'NewsFeed'} screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color }) => screenOptions(route, color),
            tabBarActiveTintColor: themeStyleSheet.mainColor,
            tabBarShowLabel: false,
            tabBarStyle: Platform.OS == 'ios' ? { height: height * 0.1 } : { height: height * 0.08 },
        })}>
            <Tab.Screen name="NewsFeed" component={NewsFeed} />
            <Tab.Screen name="Issues" component={Issues} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

const appRoutes = () => {
    return (
        <Stack.Navigator initialRouteName={'Tabs'} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>
    );
};

const rootRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'SplashScreen'} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="GettingStarted" component={GettingStarted} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="appRoutes" component={appRoutes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default rootRoutes;