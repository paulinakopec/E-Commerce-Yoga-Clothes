import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    margin-bottom: 10px;
    text-transform: uppercase;
    text-align: center;
`

const ProductItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {
  return (
    <Container>
        <Title>Featured Products</Title>
        <ProductItems>
        {popularProducts.map((item) => (
            <Product item={item} key={item.id}/>
        ))}
        </ProductItems>
    </Container>
  );
};

export default Products
