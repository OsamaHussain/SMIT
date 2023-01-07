import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Courses from './components/Courses';

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Courses />
    </div>
  );
}

export default App;
