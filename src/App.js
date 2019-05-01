import React from 'react';
import logo from './logo.svg';
import PropsCom from './Props';
import LinkCom from './Link';
import AnimationCom from './Animations';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h2>參數傳遞</h2>
      <PropsCom />
      <h2>給任意組件綁定樣式</h2>
      <LinkCom />
      <h2>動畫</h2>
      <AnimationCom />
    </div>
  );
}

export default App;
