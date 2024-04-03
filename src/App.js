import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./component/Landing";
import Onboarding from './component/Onboarding';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
          <Route path="/onboarding" element={<Onboarding/>}/>
      </Routes>
    </Router>
  );
}

export default App;
