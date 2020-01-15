import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  fetch("https://picsum.photos/v2/list")
  return (
    <div className="App">
      <div id="images-source"></div>
      <div id="images-for-google"></div>
    </div>
  );
}

export default App;
