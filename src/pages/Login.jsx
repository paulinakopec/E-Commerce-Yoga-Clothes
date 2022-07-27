import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("https://i.ytimg.com/vi/VIwo1lVNbh0/maxresdefault.jpg");
    background-size: cover;
    // opacity: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile ({width: "70%"})};    
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column; 
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 5px;
`

const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    border: 1px solid black;
    cursor: pointer;
    margin: auto;
    margin-bottom: 10px;
    
    &:hover{
        background-color: black;
        color: white;
        transition: 1s ease-in-out;
    }
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"></Input>
                <Input placeholder="password"></Input>
                <Button>LOG IN</Button>
                <Link>FORGOT MY PASSWORD</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
