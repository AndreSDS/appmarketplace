import React from "react";
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  CartPricing,
  CartButton,
  CartButtonText,
  CartTotalPricing,
} from "./styles";

const FloatCart = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <FeatherIcon size={24} name="shopping-cart" color="#f3f9ff" />
        <CartButtonText>0 Item</CartButtonText>
        <CartPricing>
          <CartTotalPricing>R$ 200,00</CartTotalPricing>
        </CartPricing>
        <FeatherIcon size={24} name="chevron-right" color="#f3f9ff" />
      </CartButton>
    </Container>
  );
};

export default FloatCart;
