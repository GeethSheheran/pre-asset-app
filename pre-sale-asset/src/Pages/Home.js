import React from 'react'
import styled from 'styled-components'
import CountdownTimer from '../Components/CountDownTimer'
import Wallet from '../Components/Wallet';

function Home() {
    const targetDate = "2024-07-01T14:59:59"; 
  return (
    <Container>
        <h1 className='header'>AAV Presale</h1>
      <CountdownTimer targetDate={targetDate} />
      <Wallet />
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: black;
    padding: 100px 0;

`

export default Home
