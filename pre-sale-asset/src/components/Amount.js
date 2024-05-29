// Amount.js
import React from 'react';
import styled from 'styled-components';
import Inputs from './Inputs';

const AmountBox = styled.div`
border: 1px solid rgba(255,255,255, 0.2); 
padding: 50px;  
border-radius: 5px;
margin: 0 auto;
margin-top:50px;
width:55%;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Text = styled.div`
  font-size: 16px;
  color:white;
`;

const Button = styled.button`
  padding: 5px 8px;
  font-size: 10px;
  cursor: pointer;
  background-color:#444;
  color:white;
`;

const Amount = () => {
  return (
    <>
    <AmountBox>
    <Container>
      <Text>Enter Amount</Text>
      <Button>Min</Button>
      <Button>50%</Button>
      <Button>Max</Button>
      <Text style={{marginLeft:'150px'}}>USDT(ETH) 1,245,564</Text>
      <Button>Switch</Button>
    </Container>
    <Inputs/>
    <button
        className='button' > BUY PRESALE $AAV
    </button>
    </AmountBox>
    
    
    </>
  );
};

export default Amount;
