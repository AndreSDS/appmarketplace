import React, { useState } from "react";
import { View } from "react-native";
import FeatherIcon from 'react-native-vector-icons/Feather';
import {formatCurrency} from '../../utils/function.utils';

import FloatCart from '../../components/FloatCart';

import {
  Container,
  ProductContainer,
  ProductList,
  Product,
  ProductImage,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
  ProductButtonText,
} from "./styles";

const Catalog = () => {
  const [products, setPRoducts] = useState([
    {
      id: "1",
      title: "Assinatura Trimestral",
      image_url: "https://cdn.iconscout.com/icon/premium/png-256-thumb/certified-product-3-1146812.png",
      price: 200,
    },
  ]);

  const RenderProducts = ({product}) => {
    const {title, image_url, price} = product;
    return (
    <Product>
      <ProductImage source={{ uri: image_url }} />
      <ProductTitle>{title}</ProductTitle>
      <PriceContainer>
        <ProductPrice>{formatCurrency(price)}</ProductPrice>
        <ProductButton onPress={() => {}}>
          <ProductButtonText>Adicionar</ProductButtonText>
          <FeatherIcon size={30} name="plus-circle" color="#b9c0d2" />
        </ProductButton>
      </PriceContainer>
    </Product>
  )};

  return (
    <Container>
      <ProductContainer>
        <ProductList
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          data={products}
          keyExtractor={(prod) => prod.id}
          renderItem={({item}) => (<RenderProducts product={item} />)}
        />
      </ProductContainer>
      <FloatCart />
    </Container>
  );
};

export default Catalog;
