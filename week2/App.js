import React from 'react';
import {  StyleSheet, Text } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';

export default function App() {
    return (
        <RegisterScreen/>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
    }
});
