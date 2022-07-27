import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, MailOutline } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive'; 

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})};
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none"})};
`

const Title = styled.h3`
    margin-bottom: 30px;

`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 5px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile ({backgroundColor: "ghostwhite"})};
`
const Logo = styled.h1``

const Description = styled.p`
    margin: 20px 0px
`
const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props=>props.color};
    margin-right: 10px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>NOFOMO.</Logo>
            <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus sit iusto numquam natus architecto in, libero adipisci autem ea nobis inventore optio accusamus, repellat hic voluptate harum aliquam quae sed?</Description>
            <SocialContainer>
                <SocialIcon color="cornflowerblue">
                    <Facebook></Facebook>
                </SocialIcon>
                <SocialIcon color="hotpink">
                    <Instagram></Instagram>
                </SocialIcon>
                <SocialIcon color="cornflowerblue">
                    <Twitter></Twitter>
                </SocialIcon>
                <SocialIcon color="orangered">
                    <Pinterest></Pinterest>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Sale</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>
                Marszalkowska Street 107/12, 02-100 Warsaw
            </ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>
                +48 123 456 789
            </ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>
                contact@nofomo.dev
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer
