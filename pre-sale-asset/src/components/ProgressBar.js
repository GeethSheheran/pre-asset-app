import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 100%;
  margin: 0;
`;

const ProgressBarTrack = styled.div`
  width: 100%;
  background-color: #e0e0df;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
`;

const Progress = styled.div`
  height: 30px;
  width: ${props => props.width}%;
  background-color: ${props => (props.width > 100 ? 'red' : '#76c7c0')};
  transition: width 0.3s ease-in-out;
  border-radius: 25px;
`;

const Label = styled.div`
  text-align: center;
  color: white;
  font-weight: bold;
`;

const ValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  margin-top:10px;
  margin-bottum:10px;
  color:#fff;
`;

const BoldValue = styled.span`
  font-weight: bold;
`;

const ProgressBar = ({ value, maxValue }) => {
  const percentage = (value / maxValue) * 100;

  return (
    <ProgressBarContainer>
      <h1  style={{ color:'#fff', textAlign: 'center',marginBottom: '50px'}}>$AVV PRESALE</h1>
      <ValueContainer>
        <div><BoldValue>0</BoldValue> Investors</div>
        <div><BoldValue>0</BoldValue> USDT Raised</div>
        <div><BoldValue>$0,1</BoldValue> $AAV Price</div>
      </ValueContainer>
      <ProgressBarTrack>
        <Progress width={percentage}>
          <Label>{Math.min(percentage, 100).toFixed(1)}%</Label>
        </Progress>
      </ProgressBarTrack>
      <ValueContainer>
        <div>Progress 144,115%</div>
        <div>Target raise: $5,000,000</div>
      </ValueContainer>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
