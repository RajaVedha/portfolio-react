import './App.css';
import React, { Component }  from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <Router>
    
        <Routes>
          <Navbar />
          <Route path="/" element={<Home />} />
          <Route path="/projects"  element={<Projects />}/>
          <Route path="/projects/:id" element={<ProjectDisplay />}/>
          <Route path="/certificates" element={<Certificates />} />
          <Footer />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
