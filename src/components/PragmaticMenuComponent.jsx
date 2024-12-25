import React, {useContext, useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from './AppContext';
import {COLORS, FONTS} from '../helpers/colors';

export default function ({item}) {
  const {shouldRefresh, toggleRefresh} = useContext(AppContext);
  const [added, setAdded] = useState(false);

  const updateCart = useCallback(async () => {
    const cartList = await AsyncStorage.getItem('cartList');
    const cartArray = cartList ? JSON.parse(cartList) : [];
    const isProductInCart = cartArray.some(cart => cart.name === item.name);
    setAdded(isProductInCart);
  }, [item.name]);

  const handleCartUpdate = async action => {
    const cartList = await AsyncStorage.getItem('cartList');
    let cartArray = cartList ? JSON.parse(cartList) : [];

    if (action === 'add') {
      if (!cartArray.some(cart => cart.name === item.name)) {
        cartArray.push({...item, count: 1});
      }
    } else if (action === 'remove') {
      cartArray = cartArray.filter(cart => cart.name !== item.name);
    }

    await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
    toggleRefresh(prev => !prev);
  };

  const toggleCart = () => {
    added ? handleCartUpdate('remove') : handleCartUpdate('add');
  };

  useEffect(() => {
    updateCart();
  }, [updateCart, shouldRefresh]);

  return (
    <View style={styles.main}>
      <Image source={item?.image} style={styles.image} />

      <View
        style={{
          width: '55%',
          justifyContent: 'space-between',
          height: 110,
          marginLeft: 10,
        }}>
        <Text style={styles.title}>{item?.name}</Text>

        <Text style={styles.description}>{item?.description}</Text>

        <View style={styles.row}>
          <Text style={styles.price}>{item?.price} $</Text>

          <TouchableOpacity onPress={toggleCart}>
            <Text style={styles.button}>{added ? 'убрать' : 'купить'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    alignSelf: 'center',
    height: 150,
    marginTop: 35,
    backgroundColor: COLORS.main,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 10,
  },
  image: {
    width: '45%',
    height: 150,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    width: '100%',
  },
  description: {
    fontSize: 12,
    fontFamily: FONTS.light,
    color: COLORS.white,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
  },
  price: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    textAlign: 'center',
    verticalAlign: 'middle',
    marginLeft: 10,
    color: COLORS.white,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  button: {
    fontFamily: FONTS.black,
    textAlign: 'center',
    fontSize: 16,
    color: COLORS.main,
    borderColor: COLORS.black,
    backgroundColor: COLORS.white,
    paddingHorizontal: 14,
    paddingVertical: 3,
    borderRadius: 8,
  },
  icon: {
    width: 40,
    height: 40,
    objectFit: 'contain',
  },
});
