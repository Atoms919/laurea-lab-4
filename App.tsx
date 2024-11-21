import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import LoginPage from './LoginPage';
import ContactPage from './ContactPage';
import { enableScreens } from 'react-native-screens';

enableScreens();
const Stack = createStackNavigator();

function AppNavigator() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Contact" component={ContactPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;