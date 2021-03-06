import React from 'react';
import { View, StyleSheet, ImageBackground, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons} from '@expo/vector-icons';


import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import AppButton from '../components/AppButton';

const blueRadiusValue = Platform.OS === "android" ? 0.7 : 5.5;

function WelcomeScreen({navigation}) {
    return (
        <AppScreen>
            <ImageBackground
            source={require("../assets/standardboard.png")}
            style = {styles.background}
            blurRadius={blueRadiusValue}
            >
                <View style = {styles.welcomeContainer}>
                    <MaterialCommunityIcons
                    name="chess-king"
                    size={75}
                    color={AppColors.white}
                    />
                <AppText>Welcome to Chess</AppText>

                </View>
                <View style={styles.buttonContainer}>
                    <AppButton title="Login" onPress={() => navigation.navigate("Login")}/>
                    <AppButton title="Register" color="blue" onPress={() => navigation.navigate("Register")}/>

                </View>
                
            </ImageBackground>
        </AppScreen>
        
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    welcomeContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:43,
    },
    buttonContainer: {
        marginTop: 300,
        marginRight: 30,
        flexDirection: 'column',
        height: 150,
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
        width: '50%'


    },
})

export default WelcomeScreen;