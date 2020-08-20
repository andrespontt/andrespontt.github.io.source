import React from 'react';
import logo from './logo.svg';
import './App.css';
import CovidDashboard from './CovidDashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CovidDashboard />
      </header>
    </div>
  );
}

export default App;
