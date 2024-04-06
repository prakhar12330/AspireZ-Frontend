import React from 'react';
import './App.css';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Landing from "./component/Landing";
import Onboarding from './component/Onboarding';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Age from './component/Age';
import { useState } from 'react';
import Home from './component/Home/Home';
import Gender from './component/Gender';

function App() {

  const [auth, setAuth] = useState(false);
  const location = useLocation();
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/login" element={<Login setAuth={setAuth} />} />
      <Route path="/signup" element={<Signup setAuth={setAuth} />} />
      <Route
        path="/home"
        element={
          auth ? (
            <Home setAuth={setAuth} />
          ) : (
            <Navigate to="/login" state={{ from: location }} replace />
          )
        }
      />
      <Route path="/home/age" element={<Age />} />
      <Route path="/home/gender" element={<Gender />} />
    </Routes>

  );
}

export default App;
