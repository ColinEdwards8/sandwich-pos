import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/HomePage';
import NewOrder from './pages/NewOrder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/Order' element={<NewOrder />}/>
      </Routes> 
    </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <div>testing</div>
    //   </header>
    // </div>
  );
}

export default App;
