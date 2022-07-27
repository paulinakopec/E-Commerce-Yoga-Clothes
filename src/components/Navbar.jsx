import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive'


const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})};
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "10px 0px"})};    
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({margin: "0px 5px 0px 0px"})};
     
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})};   
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    ${mobile({alignItems: "flex-start"})};  
`;

const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})};   
`;    

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "24px", margin: "0px 5px"})};   
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 25px;
    ${mobile({justifyContent: "center", flex: "1.5", marginLeft: "0px"})};   
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    padding-left: 15px;
    ${mobile({fontSize: "12px", margin: "0px 5px 0px 0px", paddingLeft: "0px"})};       
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>PL</Language>
                <SearchContainer>
                    <Input placeholder="search"></Input>
                    <Search style={{color: 'gray', fontSize: 16}}></Search>
                </SearchContainer>
            </Left>
            <Center><Logo>NOFOMO.</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={2} color="primary">
                        <ShoppingCartOutlined></ShoppingCartOutlined>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
