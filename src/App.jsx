// import React from 'react'
import {Routes, Route} from 'react-router-dom'
import SearchPage from './components/SearchPage'
import PrivateMessagePage from './components/PrivateMessagePage';
import './App.css';
// import bgMusic from './assets/public/bgmusic.mp3';

const App = () => {
  return (
    <div className="background-container">
 
    <Routes>
      <Route path = "/" element ={<SearchPage/>}/>
      <Route path ="/message/:codeName" element={<PrivateMessagePage/>}/>
    </Routes>
    </div>

  );
};

export default App;