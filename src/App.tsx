import React from 'react';
import './App.css';
import { AppRoutes } from './AppRoutes';

const App: React.FC = () => {
  return (
    <div className="App">
      {AppRoutes()}
    </div>
  );
}

export default App;
