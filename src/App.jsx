import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Project from './pages/Project'


function App() {
  return (
    <BrowserRouter >
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes> 
    </BrowserRouter>
  );
};

export default App;
