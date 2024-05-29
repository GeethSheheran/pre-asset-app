// src/components/CountdownTimer.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <TimerContainer>
      <div><Text>Presale Starts In</Text></div>
      <Boxes>
        <TimeBox><h1>{timeLeft.days || '0'} Days</h1></TimeBox>
        <TimeBox><h1>{timeLeft.hours || '0'} Hours</h1></TimeBox>
        <TimeBox><h1>{timeLeft.minutes || '0'} Minutes</h1></TimeBox>
        <TimeBox><h1>{timeLeft.seconds || '0'} Seconds</h1></TimeBox>
      </Boxes>
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
  width: 90%;
  max-width: 500px;
  margin: 20px auto;
`;

const Text = styled.h1`
  color: #0ae0bd;
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Boxes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const TimeBox = styled.div`
  margin: 10px;
  padding: 10px;
  background: #000;
  border-radius: 5px;
  min-width: 80px;
  text-align: center;

  h1 {
    color: #0ae0bd;
    font-size:30px;
  }

  @media (max-width: 768px) {
    min-width: 60px;
    font-size: 16px;

    h1 {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    min-width: 50px;
    font-size: 14px;

    h1 {
      font-size: 14px;
    }
  }
`;

export default CountdownTimer;
