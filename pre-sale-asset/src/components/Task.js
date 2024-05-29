import React from 'react';
import styled from 'styled-components';


const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top:50px;
`;

const StepLabel = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: #fff;
  background-color: #76c7c0;
  font-size: 15px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const StepLabel2 = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: #fff;
  background-color: #222;
  font-size: 15px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Task = () => {
  return (
    <TaskContainer>
      <StepLabel>1</StepLabel>
      <span style={{ color:'#76c7c0'}}>connect vollet</span>
      <hr style={{ flex: 1, margin: '0 10px', opacity: '20%' }} />
      <StepLabel2>2</StepLabel2>
      <span style={{ color:'#fff', opacity: '80%'}}>connect vollet</span>
    </TaskContainer>
  );
}

export default Task;
