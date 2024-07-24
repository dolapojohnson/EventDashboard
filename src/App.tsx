import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from './routes/SignIn/SignIn';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<Login />} />
    </Routes>
  );
}

export default App;
