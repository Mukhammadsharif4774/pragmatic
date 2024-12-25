import React from 'react';
import {StyleSheet, ImageBackground, FlatList, Text} from 'react-native';
import PragmaticHeader from '../components/PragmaticHeader';
import PragmaticMenuComponent from '../components/PragmaticMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {soupProducts} from '../helpers/pragmaticProducts';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderProduct = ({item}) => <PragmaticMenuComponent item={item} />;
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <PragmaticHeader />

      <Text style={styles.title}>Меню</Text>

      <FlatList
        data={soupProducts}
        renderItem={renderProduct}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.main}
        style={styles.flex}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main: {
    paddingBottom: 100,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    width,
  },
  image: {
    width: '100%',
    height: 80,
    objectFit: 'contain',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
});
