import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import Task from './components/Task';
import Body from './components/Body';
import './App.css';

function App() {
  const [value, setValue] = useState(20);
  const maxValue = 100;

  return (
    <>
    <div style={{ padding: '20px' }}>
      <ProgressBar value={value} maxValue={maxValue} />
      <Task/>
      <Body/>
    </div>
    </>
  );
}

export default App;
