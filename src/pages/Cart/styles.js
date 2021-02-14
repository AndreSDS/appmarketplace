import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ProductContainer = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  margin-top: 60px;
  border-radius: 20px;
  background-color: #e83f5b;
`;

export const ProductList = styled(FlatList)`
  flex: 1;
  padding: 30px 10px;
`;

export const Product = styled.View`
  flex: 1;
  flex-direction: 5px;
  margin: 5px;
  background: #fff;
  min-width: 350px;
  min-height: 130px;
  padding: 15px 10px;
  border-radius: 20px;
`;

export const ProductImage = styled.Image`
  height: 92px;
  width: 140px;
`;

export const ProductTitleContainer = styled.Text`
  font-size: 16px;
  margin-left: 5px;
  margin-top: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPriceContainer = styled.Text`
  flex-direction: column;
`;

export const TotalPriceContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;