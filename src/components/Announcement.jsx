import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: darkolivegreen;
  opacity: 0.3;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`

const Announcement = () => {
  return (
    <Container>
      Free shipping on orders over 200 PLN
    </Container>
  )
}

export default Announcement
