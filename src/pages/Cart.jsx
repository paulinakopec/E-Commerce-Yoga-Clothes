import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BaliShorts from '../img/Bali_shorts.jpeg'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`

const TopTexts = styled.div``

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div``
const ProductSize = styled.span``
const PriceDetail = styled.span`
    flex: 1;
`

const Summary = styled.div`
    flex: 1;
`

const Cart = () => {
  return (
    <Container>
        <Navbar></Navbar>
        <Announcement></Announcement>
        <Wrapper>
            <Title>
                YOUR CART
            </Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src={BaliShorts}></Image>
                            <Details>
                                <ProductName><b>Product:</b> BALI TOP</ProductName>
                                <ProductId><b>ID:</b> 85897389492</ProductId>
                                <ProductColor></ProductColor>
                                <ProductSize><b> Size:</b> M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>189 PLN</PriceDetail>
                    </Product>
                </Info>
                <Summary>summary</Summary>
            </Bottom>
        </Wrapper>
        <Footer></Footer>
    </Container>
  )
}

export default Cart
