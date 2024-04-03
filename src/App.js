import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./component/Landing";
import Onboarding from './component/Onboarding';
import Login from './component/Login';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
