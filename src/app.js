import React from 'react';
import { Navbar } from './components/navbar';
import { Home } from './components/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';

export const App = () => {
  return (
    <>
      <Router>
        <Navbar />
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
      </Router>
    </>
  );
};
