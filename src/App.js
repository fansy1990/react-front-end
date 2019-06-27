import React from 'react';
import logo from './logo.svg';
import './App.css';

import ProjectTable from './component/ProjectTable.js';

function App() {
  return (
    <div className="App">
        <br />
        <h1 className="App-link">项目集锦</h1>
        <ProjectTable/>


        <br/>
        <img src={logo} className="App-logo" alt="logo" />
        {/*<header className="App-header">
      </header>*/}
    </div>
  );
}

export default App;
