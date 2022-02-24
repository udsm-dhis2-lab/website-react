import React from 'react';
import { Navbar } from './components/navbar';
import { Home } from './components/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';
import Footer from './components/footer';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
      }}
    >
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              element={
                <div>
                  <h1>page not found</h1>
                </div>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};
