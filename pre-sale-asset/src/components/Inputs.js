import React from 'react';
import styled from 'styled-components';

// Styled components for the input fields
const InputContainer = styled.div`
  display: inline-block;
  margin-top:20px;
`;

const StyledInput = styled.input`
  padding: 10px;
  margin-right: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const InputText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex;
    margin-top: 20px;

  p {
    display: inline-block;
    color: white;
    margin-right: 160px; 
    margin:0 auto;
  }
`;

// Component definition
const Inputs = () => {
  return (
    <>
    <InputContainer>
      <StyledInput type="text" placeholder="Enter Amount" />
      <StyledInput type="text" placeholder="Approve USDC & Commit" />
    </InputContainer>
    <p style={{ color:'#fff'}}>Do you have AN INFINATE CODE, IF YES <a href='#'>CLICK HERE</a></p>
    <InputContainer>
      <StyledInput type="text" placeholder="Enter Code" />
      <StyledInput type="text" placeholder="Apply" />
    </InputContainer>
    <InputText>
      <p>BONUS</p>
      <p>0 $AAv</p>
    </InputText>
    <hr style={{ flex: 1, margin: '20px 10px', opacity: '10%' }} />
    </>
  );
};

export default Inputs;
