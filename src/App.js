import React from "react";
import Navbar from './components/navbar';
import Router from './router';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className='container'>
        <Navbar />
        <Router />
      </div>
    </HashRouter>    
  );
}

export default App;
