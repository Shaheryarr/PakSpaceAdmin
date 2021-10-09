import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Issues from '../components/container/Issues';

const Stack = createNativeStackNavigator();

const rootRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Issues'} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Issues" component={Issues} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default rootRoutes;
