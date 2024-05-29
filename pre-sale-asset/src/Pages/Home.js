import React from 'react'
import styled from 'styled-components'
import CountdownTimer from '../components/CountDownTimer'
import Wallet from '../components/Wallet'
import ProgressBar from '../components/ProgressBar'
import Amount from '../components/Amount'
import Task from '../components/Task'

function Home() {
    const targetDate = "2024-07-01T14:59:59"; 
  return (
    <Container>
        <h1 className='header'>AAV Presale</h1>
        
      <ProgressBar/>
      <Task/>
      <CountdownTimer targetDate={targetDate} />
      <Wallet />
      <Amount/>
    </Container>
  )
}

const Container = styled.div`
    
    min-height: 100vh;
    padding: 100px 0;
    margin-left:80px;
    margin-right:80px;

`

export default Home
