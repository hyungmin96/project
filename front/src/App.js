import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage, Loginpage } from './pages'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Loginpage />} />
        <Route path='/home' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
