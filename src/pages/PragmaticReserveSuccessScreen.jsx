import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import PragmaticHeader from '../components/PragmaticHeader';
import PragmaticComponent from '../components/PragmaticComponent';
import BackgroundImage from '../assets/background.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'PragmaticHomeScreen'});
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <PragmaticHeader />

      <Text style={styles.text}>Спасибо за резерв!</Text>

      <PragmaticComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.white,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  text: {
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: FONTS.black,
    fontSize: 30,
    marginTop: '25%',
    paddingVertical: 20,
    backgroundColor: COLORS.main,
  },
  description: {
    backgroundColor: COLORS.blue,
    paddingVertical: 15,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: 25,
    paddingHorizontal: 50,
  },
});
