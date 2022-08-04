import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, .2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 300px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;  

    &:hover ${Info}{
        opacity: 1;
    }
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 2;  
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.5s ease;
    cursor: pointer;
    
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img}></Image>
        <Info>
            <Icon>
                <ShoppingCartOutlined></ShoppingCartOutlined>
            </Icon>
            <Icon>
                <Link to='/product' className='link'><SearchOutlined></SearchOutlined></Link>
            </Icon>
            <Icon>
                <FavoriteBorder></FavoriteBorder>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
