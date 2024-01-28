import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen'

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path='/chats/:person' element={<><Header backButton='/chats'/><ChatScreen/></>} />
          <Route path='/chats' element={<><Header backButton='/'/><Chats/></>} />
          <Route path='/' element={<><Header/><TinderCards />
            <SwipeButtons /></>} />

        </Routes>
      </Router>

      {/* tinder cards */}

      {/* Buttons belw cards */}

      {/* chat screen
       */}
      {/* Individual chat screen */}
    </div>
  );
}

export default App;
